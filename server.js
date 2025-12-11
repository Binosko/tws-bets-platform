const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// IMPORTANT: Configure Socket.IO for Vercel
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  },
  transports: ['polling', 'websocket'], // Polling first for Vercel compatibility
  allowEIO3: true
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
  drawInterval: 30 * 60 * 1000,
  minPlayers: 2
};

// DATA STORAGE (in-memory for now)
let players = new Map();
let tickets = new Map();
let activeGames = new Map();
let playerTickets = new Map();
let gameHistory = [];

// Initialize tickets
function initializeTickets() {
  for (let tier = 1; tier <= 4; tier++) {
    tickets.set(tier, {});
    for (let i = 1; i <= 100; i++) {
      tickets.get(tier)[i] = null;
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
  if (tier < 1 || tier > 4) return res.status(400).json({ error: 'Invalid tier' });
  
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
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Socket.io connection
io.on('connection', (socket) => {
  console.log(`Player connected: ${socket.id}`);
  
  // Send immediate connection confirmation
  socket.emit('connected', { 
    socketId: socket.id, 
    message: 'Connected to TWS Lotto Server',
    timestamp: Date.now()
  });
  
  // Send player count
  socket.emit('players-online', { count: players.size });
  
  // Player registration
  socket.on('register', (playerData) => {
    console.log('Registration attempt:', playerData.username);
    
    // Check if display name exists
    const existingPlayer = Array.from(players.values()).find(
      p => p.displayName && playerData.displayName && 
      p.displayName.toLowerCase() === playerData.displayName.toLowerCase()
    );
    
    if (existingPlayer) {
      socket.emit('error', { 
        message: `Display name "${playerData.displayName}" already exists.` 
      });
      return;
    }
    
    // Create player
    const player = {
      id: socket.id,
      socketId: socket.id,
      username: playerData.username || 'player_' + Date.now(),
      displayName: playerData.displayName || playerData.username,
      balance: 1000,
      avatar: '🎮',
      joined: new Date().toISOString(),
      gamesPlayed: 0,
      gamesWon: 0,
      totalWinnings: 0,
      totalLosses: 0,
      netWinnings: 0
    };
    
    players.set(socket.id, player);
    playerTickets.set(socket.id, { total: 0, perTier: {1: 0, 2: 0, 3: 0, 4: 0} });
    
    console.log('Player registered:', player.displayName);
    
    // Send success
    socket.emit('registered', {
      success: true,
      player: {
        id: player.id,
        displayName: player.displayName,
        balance: player.balance,
        gamesPlayed: player.gamesPlayed,
        netWinnings: player.netWinnings,
        avatar: player.avatar
      }
    });
    
    // Update everyone
    io.emit('players-online', { count: players.size });
  });
  
  // Get tier info
  socket.on('get-tier-info', (data) => {
    const tier = data.tier || 1;
    const tierTickets = tickets.get(tier);
    const soldTickets = Object.values(tierTickets).filter(t => t !== null).length;
    const uniquePlayers = new Set(Object.values(tierTickets).filter(t => t !== null)).size;
    
    socket.emit('tier-info', {
      tier,
      price: LOTTO_CONFIG.tiers[tier].price,
      sold: soldTickets,
      available: 100 - soldTickets,
      uniquePlayers,
      status: uniquePlayers >= LOTTO_CONFIG.minPlayers ? 'active' : 'waiting',
      pot: soldTickets * LOTTO_CONFIG.tiers[tier].price
    });
  });
  
  // Buy tickets (simplified for now)
  socket.on('buy-tickets', (data) => {
    console.log('Buy tickets:', data);
    const player = players.get(socket.id);
    
    if (!player) {
      socket.emit('error', { message: 'Please register first' });
      return;
    }
    
    // Mock purchase
    socket.emit('ticket-purchased', {
      tier: data.tier,
      ticketId: Math.floor(Math.random() * 100) + 1,
      playerName: player.displayName
    });
    
    socket.emit('balance-updated', { balance: player.balance - 50 });
  });
  
  // Handle disconnection
  socket.on('disconnect', () => {
    console.log(`Player disconnected: ${socket.id}`);
    const player = players.get(socket.id);
    
    if (player) {
      players.delete(socket.id);
      playerTickets.delete(socket.id);
      io.emit('players-online', { count: players.size });
    }
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🎫 TWS Lotto Server running on port ${PORT}`);
  console.log(`⚠️ Using polling transport for Vercel compatibility`);
});
