const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// LOTTO GAME CONFIGURATION
const LOTTO_CONFIG = {
  tiers: {
    1: { price: 50, name: "Tier 1 - $50", tickets: 100 },
    2: { price: 150, name: "Tier 2 - $150", tickets: 100 },
    3: { price: 300, name: "Tier 3 - $300", tickets: 100 },
    4: { price: 500, name: "Tier 4 - $500", tickets: 100 }
  },
  maxTicketsPerPlayer: 50,
  drawInterval: 30 * 60 * 1000, // 30 minutes in milliseconds
  minPlayers: 2
};

// DATA STORAGE
let players = new Map(); // {socketId: playerData}
let tickets = new Map(); // {tier: {ticketNumber: playerId}}
let activeGames = new Map(); // {tier: gameData}
let playerTickets = new Map(); // {playerId: {total: number, perTier: {1: number, 2: number, ...}}}
let gameHistory = [];

// Initialize tickets
function initializeTickets() {
  tickets.clear();
  for (let tier = 1; tier <= 4; tier++) {
    tickets.set(tier, {});
    for (let i = 1; i <= 100; i++) {
      tickets.get(tier)[i] = null; // null means available
    }
  }
}
initializeTickets();

// Health endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    game: 'TWS Lotto',
    players: players.size,
    activeGames: activeGames.size,
    uptime: process.uptime()
  });
});

// Get tier status
app.get('/api/tier/:tier', (req, res) => {
  const tier = parseInt(req.params.tier);
  if (tier < 1 || tier > 4) {
    return res.status(400).json({ error: 'Invalid tier' });
  }
  
  const tierTickets = tickets.get(tier);
  const soldTickets = Object.values(tierTickets).filter(t => t !== null).length;
  const uniquePlayers = new Set(Object.values(tierTickets).filter(t => t !== null)).size;
  
  res.json({
    tier,
    price: LOTTO_CONFIG.tiers[tier].price,
    sold: soldTickets,
    available: 100 - soldTickets,
    uniquePlayers,
    status: uniquePlayers >= LOTTO_CONFIG.minPlayers ? 'active' : 'waiting',
    pot: soldTickets * LOTTO_CONFIG.tiers[tier].price
  });
});

// Serve main page
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log(`Player connected: ${socket.id}`);
  
  // Immediately send connection success
  socket.emit('connected', { socketId: socket.id, message: 'Connected to TWS Lotto' });
  
  // Send initial data
  socket.emit('players-online', { count: players.size });
  
  // Player registration - SIMPLIFIED VERSION
  socket.on('register', (playerData) => {
    console.log('Registration attempt:', playerData.username);
        
  // Buy tickets
  socket.on('buy-tickets', (data) => {
    const player = players.get(socket.id);
    const playerTicketData = playerTickets.get(socket.id);
    
    if (!player) {
      socket.emit('error', { message: 'Not registered' });
      return;
    }
    
    const tier = data.tier;
    const quantity = data.quantity || 1;
    const ticketPrice = LOTTO_CONFIG.tiers[tier].price;
    const totalCost = ticketPrice * quantity;
    
    // Validation checks
    if (tier < 1 || tier > 4) {
      socket.emit('error', { message: 'Invalid tier' });
      return;
    }
    
    if (playerTicketData.total + quantity > LOTTO_CONFIG.maxTicketsPerPlayer) {
      socket.emit('error', { 
        message: `Cannot buy ${quantity} tickets. Maximum is ${LOTTO_CONFIG.maxTicketsPerPlayer} total tickets. You have ${playerTicketData.total}.` 
      });
      return;
    }
    
    if (player.balance < totalCost) {
      socket.emit('error', { 
        message: `Insufficient balance. Need $${totalCost}, have $${player.balance}` 
      });
      return;
    }
    
    // Find available tickets
    const tierTickets = tickets.get(tier);
    const availableTickets = [];
    for (let i = 1; i <= 100; i++) {
      if (tierTickets[i] === null && availableTickets.length < quantity) {
        availableTickets.push(i);
      }
    }
    
    if (availableTickets.length < quantity) {
      socket.emit('error', { 
        message: `Only ${availableTickets.length} tickets available in this tier` 
      });
      return;
    }
    
    // Process purchase
    player.balance -= totalCost;
    playerTicketData.total += quantity;
    playerTicketData.perTier[tier] = (playerTicketData.perTier[tier] || 0) + quantity;
    
    // Assign tickets to player
    availableTickets.forEach(ticketNumber => {
      tierTickets[ticketNumber] = socket.id;
      
      // Notify all clients about purchased ticket
      io.emit('ticket-purchased', {
        tier,
        ticketId: ticketNumber,
        playerName: player.displayName
      });
    });
    
    // Update player
    socket.emit('balance-updated', { balance: player.balance });
    socket.emit('tickets-updated', { 
      total: playerTicketData.total,
      perTier: playerTicketData.perTier 
    });
    
    // Check if game should start
    checkAndStartGame(tier);
    
    // Send updated tier info
    sendTierUpdates();
  });
  
  // Get player info
  socket.on('get-player-info', () => {
    const player = players.get(socket.id);
    if (player) {
      const ticketData = playerTickets.get(socket.id);
      socket.emit('player-info', {
        player,
        tickets: ticketData
      });
    }
  });
  
  // Get tier info
  socket.on('get-tier-info', (data) => {
    const tier = data.tier || 1;
    const tierTickets = tickets.get(tier);
    const soldTickets = Object.values(tierTickets).filter(t => t !== null).length;
    const uniquePlayers = new Set(Object.values(tierTickets).filter(t => t !== null)).size;
    
    const game = activeGames.get(tier);
    
    socket.emit('tier-info', {
      tier,
      price: LOTTO_CONFIG.tiers[tier].price,
      sold: soldTickets,
      available: 100 - soldTickets,
      uniquePlayers,
      status: uniquePlayers >= LOTTO_CONFIG.minPlayers ? 'active' : 'waiting',
      pot: soldTickets * LOTTO_CONFIG.tiers[tier].price,
      game: game || null
    });
  });
  
  // Disconnect
  socket.on('disconnect', () => {
    console.log(`Player disconnected: ${socket.id}`);
    
    const player = players.get(socket.id);
    if (player) {
      players.delete(socket.id);
      playerTickets.delete(socket.id);
      
      // Update tickets to available if player had any
      for (let tier = 1; tier <= 4; tier++) {
        const tierTickets = tickets.get(tier);
        for (let i = 1; i <= 100; i++) {
          if (tierTickets[i] === socket.id) {
            tierTickets[i] = null;
            io.emit('ticket-released', { tier, ticketId: i });
          }
        }
      }
      
      io.emit('players-online', { count: players.size });
      sendTierUpdates();
    }
  });
});

// Check and start game for a tier
function checkAndStartGame(tier) {
  const tierTickets = tickets.get(tier);
  const soldTickets = Object.values(tierTickets).filter(t => t !== null).length;
  const uniquePlayers = new Set(Object.values(tierTickets).filter(t => t !== null)).size;
  
  // Already have an active game for this tier
  if (activeGames.has(tier)) return;
  
  // Check if we have enough players
  if (uniquePlayers >= LOTTO_CONFIG.minPlayers && soldTickets > 0) {
    const game = {
      tier,
      startTime: Date.now(),
      drawTime: Date.now() + LOTTO_CONFIG.drawInterval,
      tickets: { ...tierTickets },
      participants: uniquePlayers,
      pot: soldTickets * LOTTO_CONFIG.tiers[tier].price,
      status: 'active'
    };
    
    activeGames.set(tier, game);
    
    // Notify all clients
    io.emit('game-started', {
      tier,
      game,
      message: `Tier ${tier} game started! Drawing in 30 minutes.`
    });
    
    // Schedule the draw
    setTimeout(() => {
      drawWinner(tier);
    }, LOTTO_CONFIG.drawInterval);
  }
}

// Draw winner for a tier
function drawWinner(tier) {
  const game = activeGames.get(tier);
  if (!game) return;
  
  const tierTickets = tickets.get(tier);
  const soldTickets = Object.entries(tierTickets).filter(([_, playerId]) => playerId !== null);
  
  if (soldTickets.length === 0) {
    // No tickets sold, cancel game
    activeGames.delete(tier);
    io.emit('game-cancelled', {
      tier,
      message: 'No tickets were purchased. Game cancelled.'
    });
    return;
  }
  
  // Draw random ticket
  const randomIndex = Math.floor(Math.random() * soldTickets.length);
  const [winningTicket, winnerId] = soldTickets[randomIndex];
  const winner = players.get(winnerId);
  
  if (!winner) {
    // Winner disconnected, redraw?
    drawWinner(tier);
    return;
  }
  
  // Calculate winnings (pot minus player's own tickets)
  const playerContribution = Object.values(tierTickets).filter(id => id === winnerId).length * LOTTO_CONFIG.tiers[tier].price;
  const netWinnings = game.pot - playerContribution;
  
  // Update winner
  winner.balance += game.pot;
  winner.gamesPlayed++;
  winner.gamesWon++;
  winner.totalWinnings += game.pot;
  winner.totalLosses += playerContribution;
  winner.netWinnings += netWinnings;
  
  // Update losers
  const loserIds = new Set(Object.values(tierTickets).filter(id => id !== null && id !== winnerId));
  loserIds.forEach(loserId => {
    const loser = players.get(loserId);
    if (loser) {
      loser.gamesPlayed++;
      loser.totalLosses += Object.values(tierTickets).filter(id => id === loserId).length * LOTTO_CONFIG.tiers[tier].price;
      loser.netWinnings -= Object.values(tierTickets).filter(id => id === loserId).length * LOTTO_CONFIG.tiers[tier].price;
      
      // Notify loser
      const loserSocket = Array.from(io.sockets.sockets.values()).find(s => s.id === loserId);
      if (loserSocket) {
        loserSocket.emit('game-lost', {
          tier,
          amount: Object.values(tierTickets).filter(id => id === loserId).length * LOTTO_CONFIG.tiers[tier].price,
          winner: winner.displayName,
          winningTicket: parseInt(winningTicket)
        });
      }
    }
  });
  
  // Record history
  const historyEntry = {
    tier,
    date: new Date().toISOString(),
    winner: winner.displayName,
    winningTicket: parseInt(winningTicket),
    pot: game.pot,
    participants: game.participants,
    ticketsSold: soldTickets.length
  };
  gameHistory.unshift(historyEntry);
  
  // Keep only last 100 history entries
  if (gameHistory.length > 100) {
    gameHistory = gameHistory.slice(0, 100);
  }
  
  // Notify all clients
  io.emit('game-finished', {
    tier,
    winner: winner.displayName,
    winningTicket: parseInt(winningTicket),
    pot: game.pot,
    netWinnings,
    history: historyEntry
  });
  
  // Notify winner
  const winnerSocket = Array.from(io.sockets.sockets.values()).find(s => s.id === winnerId);
  if (winnerSocket) {
    winnerSocket.emit('game-won', {
      tier,
      amount: game.pot,
      netWinnings,
      ticket: parseInt(winningTicket)
    });
  }
  
  // Clear tickets for next round
  initializeTickets();
  
  // Remove game from active
  activeGames.delete(tier);
  
  // Reset player ticket counts for this tier
  playerTickets.forEach((data, playerId) => {
    data.perTier[tier] = 0;
    // Recalculate total
    data.total = Object.values(data.perTier).reduce((sum, count) => sum + count, 0);
  });
  
  // Send updated tier info
  sendTierUpdates();
}

// Send tier updates to all clients
function sendTierUpdates() {
  for (let tier = 1; tier <= 4; tier++) {
    const tierTickets = tickets.get(tier);
    const soldTickets = Object.values(tierTickets).filter(t => t !== null).length;
    const uniquePlayers = new Set(Object.values(tierTickets).filter(t => t !== null)).size;
    
    const game = activeGames.get(tier);
    
    io.emit('tier-update', {
      tier,
      price: LOTTO_CONFIG.tiers[tier].price,
      sold: soldTickets,
      available: 100 - soldTickets,
      uniquePlayers,
      status: uniquePlayers >= LOTTO_CONFIG.minPlayers ? 'active' : 'waiting',
      pot: soldTickets * LOTTO_CONFIG.tiers[tier].price,
      game: game || null
    });
  }
}

// Periodic updates
setInterval(() => {
  // Update countdown timers
  activeGames.forEach((game, tier) => {
    const timeLeft = game.drawTime - Date.now();
    if (timeLeft > 0) {
      io.emit('countdown-update', {
        tier,
        timeLeft: Math.floor(timeLeft / 1000)
      });
    }
  });
}, 1000);

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🎫 TWS Lotto Server running on port ${PORT}`);
  console.log(`💰 Tiers: $50, $150, $300, $500`);
  console.log(`🎲 Max tickets per player: ${LOTTO_CONFIG.maxTicketsPerPlayer}`);
  console.log(`⏰ Draw interval: ${LOTTO_CONFIG.drawInterval / 60000} minutes`);
  console.log(`👥 Minimum players: ${LOTTO_CONFIG.minPlayers}`);
});
