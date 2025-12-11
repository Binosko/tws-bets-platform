const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// FORCE POLLING FOR VERCEL
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  },
  transports: ['polling'], // POLLING ONLY
  allowEIO3: true
});

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Simple data storage
let players = new Map();
let playerCount = 0;

// Serve main page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'online', 
    players: playerCount,
    message: 'TWS Lotto Server'
  });
});

// Socket.io
io.on('connection', (socket) => {
  console.log('New connection:', socket.id);
  playerCount++;
  
  // Immediately send connection confirmation
  socket.emit('connected', { 
    message: 'Welcome to TWS Lotto',
    playerId: socket.id,
    timestamp: Date.now()
  });
  
  // Update player count for everyone
  io.emit('players-online', { count: playerCount });
  
  // Handle registration
  socket.on('register', (data) => {
    console.log('Registration:', data.displayName);
    
    // Check for duplicate display name
    let nameExists = false;
    players.forEach(player => {
      if (player.displayName.toLowerCase() === data.displayName.toLowerCase()) {
        nameExists = true;
      }
    });
    
    if (nameExists) {
      socket.emit('error', { 
        message: `Name "${data.displayName}" already taken.` 
      });
      return;
    }
    
    // Create player
    const player = {
      id: socket.id,
      username: data.username,
      displayName: data.displayName,
      balance: 1000,
      avatar: data.avatar || '🎮',
      joined: Date.now(),
      gamesPlayed: 0,
      netWinnings: 0
    };
    
    players.set(socket.id, player);
    
    // Send success
    socket.emit('registered', {
      success: true,
      player: player
    });
    
    console.log('Player registered:', player.displayName);
  });
  
  // Get tier info
  socket.on('get-tier-info', (data) => {
    const tier = data.tier || 1;
    const prices = {1: 50, 2: 150, 3: 300, 4: 500};
    
    socket.emit('tier-info', {
      tier: tier,
      price: prices[tier] || 50,
      sold: 0,
      available: 100,
      uniquePlayers: 0,
      status: 'waiting',
      pot: 0
    });
  });
  
  // Buy tickets
  socket.on('buy-tickets', (data) => {
    const player = players.get(socket.id);
    if (!player) {
      socket.emit('error', { message: 'Not registered' });
      return;
    }
    
    const price = {1: 50, 2: 150, 3: 300, 4: 500}[data.tier] || 50;
    const cost = price * (data.quantity || 1);
    
    if (player.balance >= cost) {
      player.balance -= cost;
      socket.emit('balance-updated', { balance: player.balance });
      socket.emit('ticket-purchased', {
        tier: data.tier,
        ticketId: Math.floor(Math.random() * 100) + 1,
        playerName: player.displayName
      });
    } else {
      socket.emit('error', { message: 'Not enough balance' });
    }
  });
  
  // Disconnect
  socket.on('disconnect', () => {
    console.log('Disconnected:', socket.id);
    if (players.has(socket.id)) {
      players.delete(socket.id);
    }
    playerCount = Math.max(0, playerCount - 1);
    io.emit('players-online', { count: playerCount });
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 TWS Lotto Server on port ${PORT}`);
  console.log(`📡 Using POLLING transport for Vercel compatibility`);
});
