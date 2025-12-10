import React, { useState, useEffect } from 'react';

export default function TWSBets() {
  const [players, setPlayers] = useState([]);
  const [lotteryTiers, setLotteryTiers] = useState([]);
  const [bets, setBets] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [page, setPage] = useState('home');
  const [showTerms, setShowTerms] = useState(false);
  const [adminMode, setAdminMode] = useState(false);

  // Initialize data on first load
  useEffect(() => {
    // Load from localStorage or initialize
    const savedPlayers = localStorage.getItem('tws_players');
    const savedTiers = localStorage.getItem('tws_tiers');
    const savedBets = localStorage.getItem('tws_bets');
    const savedUser = localStorage.getItem('tws_currentUser');

    if (savedPlayers) setPlayers(JSON.parse(savedPlayers));
    if (savedBets) setBets(JSON.parse(savedBets));
    if (savedUser) setCurrentUser(JSON.parse(savedUser));

    // Initialize lottery tiers if not exists
    if (!savedTiers) {
      const initialTiers = [
        { id: 1, name: "Bronze Tier", price: 50, totalTickets: 100, soldTickets: 0, players: [], status: "waiting", winner: null },
        { id: 2, name: "Silver Tier", price: 150, totalTickets: 100, soldTickets: 0, players: [], status: "waiting", winner: null },
        { id: 3, name: "Gold Tier", price: 300, totalTickets: 100, soldTickets: 0, players: [], status: "waiting", winner: null },
        { id: 4, name: "Diamond Tier", price: 500, totalTickets: 100, soldTickets: 0, players: [], status: "waiting", winner: null }
      ];
      setLotteryTiers(initialTiers);
      localStorage.setItem('tws_tiers', JSON.stringify(initialTiers));
    } else {
      setLotteryTiers(JSON.parse(savedTiers));
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('tws_players', JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    localStorage.setItem('tws_tiers', JSON.stringify(lotteryTiers));
  }, [lotteryTiers]);

  useEffect(() => {
    localStorage.setItem('tws_bets', JSON.stringify(bets));
  }, [bets]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('tws_currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('tws_currentUser');
    }
  }, [currentUser]);

  // Register/Login functions
  const handleRegister = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const displayName = e.target.displayName.value;
    const password = e.target.password.value;

    // Check if user exists
    const existingUser = players.find(p => p.username === username);
    if (existingUser) {
      alert('Username already exists!');
      return;
    }

    const newUser = {
      id: Date.now(),
      username,
      displayName,
      password, // In real app, hash this!
      gamesPlayed: 0,
      gamesWon: 0,
      gamesLost: 0,
      totalWinnings: 0,
      totalLosses: 0,
      ticketsBought: 0,
      reputation: 100,
      joinDate: new Date().toISOString(),
      agreedToTerms: false
    };

    setPlayers([...players, newUser]);
    setCurrentUser(newUser);
    alert('Registration successful! Please login.');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const user = players.find(p => p.username === username && p.password === password);
    if (user) {
      setCurrentUser(user);
      alert(`Welcome back, ${user.displayName}!`);
    } else {
      alert('Invalid credentials!');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setPage('home');
  };

  // Buy lottery ticket
  const buyTicket = (tierId) => {
    if (!currentUser) {
      alert('Please login first!');
      return;
    }

    if (!currentUser.agreedToTerms) {
      setShowTerms(true);
      return;
    }

    const tier = lotteryTiers.find(t => t.id === tierId);
    if (!tier) return;

    // Check max tickets (50 per player)
    if (currentUser.ticketsBought >= 50) {
      alert('You have reached the maximum of 50 tickets!');
      return;
    }

    // Check if player already in this tier
    const playerInTier = tier.players.find(p => p.playerId === currentUser.id);
    if (playerInTier) {
      alert('You already have a ticket in this tier!');
      return;
    }

    // Update tier
    const updatedTiers = lotteryTiers.map(t => {
      if (t.id === tierId) {
        const newPlayers = [...t.players, {
          playerId: currentUser.id,
          playerName: currentUser.displayName,
          ticketNumber: t.soldTickets + 1,
          purchaseTime: new Date().toISOString()
        }];

        // Check if we have at least 2 players now
        let newStatus = t.status;
        if (newPlayers.length >= 2 && t.status === 'waiting') {
          newStatus = 'active';
          // Start the lottery draw after 1 minute (in real app, this would be server-side)
          setTimeout(() => drawLottery(tierId), 60000);
        }

        return {
          ...t,
          soldTickets: t.soldTickets + 1,
          players: newPlayers,
          status: newStatus
        };
      }
      return t;
    });

    // Update user
    const updatedPlayers = players.map(p => {
      if (p.id === currentUser.id) {
        return {
          ...p,
          ticketsBought: p.ticketsBought + 1
        };
      }
      return p;
    });

    setLotteryTiers(updatedTiers);
    setPlayers(updatedPlayers);
    setCurrentUser(updatedPlayers.find(p => p.id === currentUser.id));

    alert(`Ticket purchased for ${tier.name} ($${tier.price})!`);
  };

  // Draw lottery winner
  const drawLottery = (tierId) => {
    const tier = lotteryTiers.find(t => t.id === tierId);
    if (!tier || tier.players.length < 2) return;

    // Random winner selection
    const winnerIndex = Math.floor(Math.random() * tier.players.length);
    const winner = tier.players[winnerIndex];
    const loser = tier.players.find(p => p.playerId !== winner.playerId);

    // Update bets history
    const newBet = {
      id: Date.now(),
      type: 'lottery',
      tier: tier.name,
      amount: tier.price,
      players: tier.players.map(p => ({
        id: p.playerId,
        name: p.playerName
      })),
      winner: {
        id: winner.playerId,
        name: winner.playerName
      },
      loser: {
        id: loser.playerId,
        name: loser.playerName
      },
      status: 'pending_payment',
      created: new Date().toISOString(),
      dueDate: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString() // 48 hours
    };

    // Update players stats
    const updatedPlayers = players.map(p => {
      if (p.id === winner.playerId) {
        return {
          ...p,
          gamesPlayed: p.gamesPlayed + 1,
          gamesWon: p.gamesWon + 1,
          totalWinnings: p.totalWinnings + tier.price,
          reputation: Math.min(100, p.reputation + 5)
        };
      }
      if (p.id === loser.playerId) {
        return {
          ...p,
          gamesPlayed: p.gamesPlayed + 1,
          gamesLost: p.gamesLost + 1,
          totalLosses: p.totalLosses + tier.price,
          reputation: Math.max(0, p.reputation - 10)
        };
      }
      return p;
    });

    // Update tier
    const updatedTiers = lotteryTiers.map(t => {
      if (t.id === tierId) {
        return {
          ...t,
          status: 'completed',
          winner: winner.playerName,
          drawTime: new Date().toISOString()
        };
      }
      return t;
    });

    setBets([...bets, newBet]);
    setPlayers(updatedPlayers);
    setLotteryTiers(updatedTiers);

    // Update current user if they're in this game
    if (currentUser && (currentUser.id === winner.playerId || currentUser.id === loser.playerId)) {
      setCurrentUser(updatedPlayers.find(p => p.id === currentUser.id));
    }

    alert(`🎉 Lottery Draw Complete! Winner: ${winner.playerName} wins $${tier.price}! Loser must pay within 48 hours.`);
  };

  // Create direct bet
  const createBet = (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert('Please login first!');
      return;
    }

    const itemName = e.target.itemName.value;
    const itemAmount = parseInt(e.target.itemAmount.value);
    const moneyValue = parseInt(e.target.moneyValue.value);
    const description = e.target.description.value;

    const newBet = {
      id: Date.now(),
      type: 'direct',
      creatorId: currentUser.id,
      creatorName: currentUser.displayName,
      itemName,
      itemAmount,
      moneyValue,
      description,
      status: 'waiting',
      acceptorId: null,
      acceptorName: null,
      winner: null,
      loser: null,
      created: new Date().toISOString(),
      termsAccepted: false
    };

    setBets([...bets, newBet]);
    alert('Bet created! Waiting for someone to accept...');
    e.target.reset();
  };

  // Accept bet
  const acceptBet = (betId) => {
    if (!currentUser) {
      alert('Please login first!');
      return;
    }

    const bet = bets.find(b => b.id === betId);
    if (!bet || bet.creatorId === currentUser.id) {
      alert('Cannot accept your own bet!');
      return;
    }

    if (!currentUser.agreedToTerms) {
      setShowTerms(true);
      return;
    }

    // Determine winner (50/50 chance)
    const isCreatorWinner = Math.random() > 0.5;
    const winnerId = isCreatorWinner ? bet.creatorId : currentUser.id;
    const winnerName = isCreatorWinner ? bet.creatorName : currentUser.displayName;
    const loserId = isCreatorWinner ? currentUser.id : bet.creatorId;
    const loserName = isCreatorWinner ? currentUser.displayName : bet.creatorName;

    const updatedBet = {
      ...bet,
      status: 'completed',
      acceptorId: currentUser.id,
      acceptorName: currentUser.displayName,
      winner: { id: winnerId, name: winnerName },
      loser: { id: loserId, name: loserName },
      completed: new Date().toISOString(),
      dueDate: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString()
    };

    // Update players stats
    const updatedPlayers = players.map(p => {
      if (p.id === winnerId) {
        return {
          ...p,
          gamesPlayed: p.gamesPlayed + 1,
          gamesWon: p.gamesWon + 1,
          totalWinnings: p.totalWinnings + bet.moneyValue,
          reputation: Math.min(100, p.reputation + 3)
        };
      }
      if (p.id === loserId) {
        return {
          ...p,
          gamesPlayed: p.gamesPlayed + 1,
          gamesLost: p.gamesLost + 1,
          totalLosses: p.totalLosses + bet.moneyValue,
          reputation: Math.max(0, p.reputation - 7)
        };
      }
      return p;
    });

    const updatedBets = bets.map(b => b.id === betId ? updatedBet : b);
    setBets(updatedBets);
    setPlayers(updatedPlayers);

    // Update current user
    if (currentUser.id === winnerId || currentUser.id === loserId) {
      setCurrentUser(updatedPlayers.find(p => p.id === currentUser.id));
    }

    alert(`Bet accepted! ${winnerName} wins ${bet.itemAmount} ${bet.itemName} (or $${bet.moneyValue})! Loser must pay within 48 hours.`);
  };

  // Mark bet as paid (admin or players)
  const markAsPaid = (betId) => {
    const updatedBets = bets.map(b => {
      if (b.id === betId) {
        return { ...b, status: 'paid' };
      }
      return b;
    });
    setBets(updatedBets);
    alert('Marked as paid! Thank you for honoring the bet.');
  };

  // Accept terms
  const acceptTerms = () => {
    if (!currentUser) return;

    const updatedPlayers = players.map(p => {
      if (p.id === currentUser.id) {
        return { ...p, agreedToTerms: true };
      }
      return p;
    });

    setPlayers(updatedPlayers);
    setCurrentUser({ ...currentUser, agreedToTerms: true });
    setShowTerms(false);
    alert('Terms accepted! You can now participate in bets and lotteries.');
  };

  // Admin functions
  const enforcePayment = (betId) => {
    const bet = bets.find(b => b.id === betId);
    if (!bet) return;

    const updatedPlayers = players.map(p => {
      if (p.id === bet.loser.id) {
        return { ...p, reputation: Math.max(0, p.reputation - 20) };
      }
      return p;
    });

    const updatedBets = bets.map(b => {
      if (b.id === betId) {
        return { ...b, status: 'admin_enforced', adminNote: 'Payment enforced by admin' };
      }
      return b;
    });

    setPlayers(updatedPlayers);
    setBets(updatedBets);
    alert(`Admin enforcement applied to ${bet.loser.name}. Reputation decreased.`);
  };

  const resetSystem = () => {
    if (window.confirm('Are you sure? This will reset ALL data!')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  // Calculate statistics
  const totalMoneyInPlay = bets.reduce((sum, bet) => sum + (bet.moneyValue || 0), 0);
  const activeBets = bets.filter(b => ['waiting', 'pending_payment'].includes(b.status)).length;
  const unpaidBets = bets.filter(b => b.status === 'pending_payment').length;

  // Styles
  const styles = {
    container: { 
      minHeight: '100vh', 
      backgroundColor: '#0a0a0a', 
      color: '#fff', 
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 100%)'
    },
    header: { 
      background: 'linear-gradient(90deg, #8B0000 0%, #B22222 100%)', 
      padding: '20px', 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '3px solid #FFD700'
    },
    navButton: { 
      margin: '0 10px', 
      padding: '10px 20px', 
      backgroundColor: '#333', 
      color: '#fff', 
      border: 'none', 
      borderRadius: '5px', 
      cursor: 'pointer',
      fontWeight: 'bold'
    },
    activeNavButton: {
      margin: '0 10px', 
      padding: '10px 20px', 
      background: 'linear-gradient(45deg, #FFD700, #FFA500)', 
      color: '#000', 
      border: 'none', 
      borderRadius: '5px', 
      cursor: 'pointer',
      fontWeight: 'bold'
    },
    main: { 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '20px' 
    },
    card: { 
      backgroundColor: 'rgba(26, 26, 26, 0.8)', 
      padding: '20px', 
      borderRadius: '10px', 
      marginBottom: '20px',
      border: '1px solid #444',
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
    },
    tierCard: {
      backgroundColor: 'rgba(40, 40, 40, 0.9)',
      padding: '15px',
      borderRadius: '8px',
      marginBottom: '15px',
      borderLeft: '4px solid #FFD700'
    },
    button: { 
      padding: '10px 20px', 
      background: 'linear-gradient(45deg, #8B0000, #B22222)', 
      color: '#fff', 
      border: 'none', 
      borderRadius: '5px', 
      cursor: 'pointer',
      fontWeight: 'bold',
      margin: '5px'
    },
    adminButton: {
      padding: '10px 20px', 
      background: 'linear-gradient(45deg, #4B0082, #8A2BE2)', 
      color: '#fff', 
      border: 'none', 
      borderRadius: '5px', 
      cursor: 'pointer',
      fontWeight: 'bold',
      margin: '5px'
    },
    input: { 
      padding: '10px', 
      backgroundColor: '#222', 
      color: '#fff', 
      border: '1px solid #444', 
      borderRadius: '5px',
      margin: '5px 0',
      width: '100%'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '15px',
      marginBottom: '20px'
    },
    statCard: {
      backgroundColor: 'rgba(139, 0, 0, 0.2)',
      padding: '15px',
      borderRadius: '8px',
      textAlign: 'center',
      border: '1px solid #8B0000'
    },
    betItem: {
      backgroundColor: 'rgba(50, 50, 50, 0.9)',
      padding: '15px',
      borderRadius: '8px',
      marginBottom: '10px',
      borderLeft: '4px solid'
    },
    termsModal: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0,0,0,0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    },
    termsContent: {
      backgroundColor: '#1a1a1a',
      padding: '30px',
      borderRadius: '10px',
      maxWidth: '600px',
      maxHeight: '80vh',
      overflow: 'auto',
      border: '2px solid #FFD700'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div>
          <h1 style={{ margin: 0, color: '#FFD700' }}>🎲 TWS-BETS</h1>
          <p style={{ margin: '5px 0 0 0', color: '#ccc' }}>High Stakes Lottery & Betting</p>
        </div>
        
        <div>
          {currentUser ? (
            <>
              <span style={{ marginRight: '20px', color: '#FFD700' }}>
                Welcome, <strong>{currentUser.displayName}</strong>
              </span>
              <button style={styles.button} onClick={handleLogout}>Logout</button>
              <button style={styles.adminButton} onClick={() => setAdminMode(!adminMode)}>
                {adminMode ? '👑 Admin Mode' : '⚙️'}
              </button>
            </>
          ) : (
            <button style={styles.button} onClick={() => setPage('login')}>Login / Register</button>
          )}
        </div>
      </header>

      {/* Navigation */}
      <div style={{ padding: '10px 20px', background: '#222', borderBottom: '1px solid #444' }}>
        <button 
          style={page === 'home' ? styles.activeNavButton : styles.navButton} 
          onClick={() => setPage('home')}
        >
          🏠 Home
        </button>
        <button 
          style={page === 'lottery' ? styles.activeNavButton : styles.navButton} 
          onClick={() => setPage('lottery')}
        >
          🎫 Lottery
        </button>
        <button 
          style={page === 'bets' ? styles.activeNavButton : styles.navButton} 
          onClick={() => setPage('bets')}
        >
          🤝 Direct Bets
        </button>
        <button 
          style={page === 'history' ? styles.activeNavButton : styles.navButton} 
          onClick={() => setPage('history')}
        >
          📜 History
        </button>
        <button 
          style={page === 'profile' ? styles.activeNavButton : styles.navButton} 
          onClick={() => setPage('profile')}
        >
          👤 Profile
        </button>
        {adminMode && (
          <button 
            style={styles.adminButton} 
            onClick={() => setPage('admin')}
          >
            👑 Admin Panel
          </button>
        )}
      </div>

      {/* Main Content */}
      <main style={styles.main}>
        {/* Home Page */}
        {page === 'home' && (
          <div>
            <div style={styles.card}>
              <h2 style={{ color: '#FFD700' }}>Welcome to TWS-Bets</h2>
              <p>The premier lottery and betting platform for That War Server community.</p>
              
              <div style={styles.statsGrid}>
                <div style={styles.statCard}>
                  <h3>💰 Total in Play</h3>
                  <p style={{ fontSize: '24px', color: '#FFD700' }}>${totalMoneyInPlay}</p>
                </div>
                <div style={styles.statCard}>
                  <h3>🎲 Active Players</h3>
                  <p style={{ fontSize: '24px', color: '#00FF00' }}>{players.length}</p>
                </div>
                <div style={styles.statCard}>
                  <h3>⚡ Active Bets</h3>
                  <p style={{ fontSize: '24px', color: '#FFA500' }}>{activeBets}</p>
                </div>
                <div style={styles.statCard}>
                  <h3>⚠️ Unpaid</h3>
                  <p style={{ fontSize: '24px', color: '#FF4444' }}>{unpaidBets}</p>
                </div>
              </div>

              {!currentUser && (
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                  <h3>Ready to play?</h3>
                  <button style={styles.button} onClick={() => setPage('login')}>
                    Login / Register to Start
                  </button>
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div style={{ ...styles.card, marginTop: '20px' }}>
              <h3>🎯 How It Works</h3>
              <ol>
                <li><strong>Register</strong> with your display name</li>
                <li><strong>Accept Terms</strong> (mandatory for betting)</li>
                <li><strong>Buy Lottery Tickets</strong> ($50-$500 tiers)</li>
                <li><strong>Create/Accept Direct Bets</strong> (items or money)</li>
                <li><strong>Honor your bets</strong> - Admins enforce payments!</li>
              </ol>
            </div>
          </div>
        )}

        {/* Login/Register Page */}
        {page === 'login' && (
          <div style={styles.card}>
            <h2 style={{ color: '#FFD700' }}>{currentUser ? 'Already Logged In' : 'Login / Register'}</h2>
            
            {currentUser ? (
              <div>
                <p>You are logged in as <strong>{currentUser.displayName}</strong></p>
                <button style={styles.button} onClick={() => setPage('profile')}>
                  Go to Profile
                </button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {/* Login Form */}
                <div>
                  <h3>Login</h3>
                  <form onSubmit={handleLogin}>
                    <input style={styles.input} name="username" placeholder="Username" required />
                    <input style={styles.input} name="password" type="password" placeholder="Password" required />
                    <button style={styles.button} type="submit">Login</button>
                  </form>
                </div>

                {/* Register Form */}
                <div>
                  <h3>Register</h3>
                  <form onSubmit={handleRegister}>
                    <input style={styles.input} name="username" placeholder="Username" required />
                    <input style={styles.input} name="displayName" placeholder="Display Name (in-game)" required />
                    <input style={styles.input} name="password" type="password" placeholder="Password" required />
                    <button style={styles.button} type="submit">Register</button>
                  </form>
                  <p style={{ fontSize: '12px', color: '#aaa', marginTop: '10px' }}>
                    Note: This is a demo. In production, passwords would be hashed!
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Lottery Page */}
        {page === 'lottery' && (
          <div>
            <div style={styles.card}>
              <h2 style={{ color: '#FFD700' }}>🎫 Lottery Tiers</h2>
              <p>Buy tickets ($50-$500). Game starts with 2+ players. Max 50 tickets per player.</p>
              
              {currentUser && (
                <div style={{ 
                  backgroundColor: currentUser.ticketsBought >= 50 ? '#8B0000' : '#006400',
                  padding: '10px',
                  borderRadius: '5px',
                  marginBottom: '15px'
                }}>
                  <strong>Your Tickets: {currentUser.ticketsBought}/50</strong>
                  {currentUser.ticketsBought >= 50 && ' (MAX REACHED!)'}
                </div>
              )}

              {lotteryTiers.map(tier => (
                <div key={tier.id} style={styles.tierCard}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h3 style={{ margin: '0 0 5px 0', color: '#FFD700' }}>{tier.name}</h3>
                      <p style={{ margin: '0', fontSize: '14px' }}>
                        <strong>Price:</strong> ${tier.price} | 
                        <strong> Tickets:</strong> {tier.soldTickets}/100 | 
                        <strong> Status:</strong> {tier.status.toUpperCase()}
                      </p>
                      <p style={{ margin: '5px 0', fontSize: '12px', color: '#aaa' }}>
                        Players: {tier.players.map(p => p.playerName).join(', ') || 'None yet'}
                      </p>
                    </div>
                    <div>
                      <button 
                        style={styles.button}
                        onClick={() => buyTicket(tier.id)}
                        disabled={!currentUser || tier.soldTickets >= 100 || currentUser.ticketsBought >= 50}
                      >
                        Buy Ticket (${tier.price})
                      </button>
                      {tier.status === 'active' && (
                        <div style={{ marginTop: '5px', color: '#00FF00' }}>
                          ⚡ DRAWING SOON!
                        </div>
                      )}
                      {tier.winner && (
                        <div style={{ marginTop: '5px', color: '#FFD700' }}>
                          🏆 Winner: {tier.winner}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Direct Bets Page */}
        {page === 'bets' && (
          <div>
            <div style={styles.card}>
              <h2 style={{ color: '#FFD700' }}>🤝 Create Direct Bet</h2>
              {currentUser ? (
                <form onSubmit={createBet}>
                  <input style={styles.input} name="itemName" placeholder="Item Name (e.g., Diamond Blocks)" required />
                  <input style={styles.input} name="itemAmount" type="number" placeholder="Amount (e.g., 10)" required />
                  <input style={styles.input} name="moneyValue" type="number" placeholder="Equivalent Money Value ($)" required />
                  <input style={styles.input} name="description" placeholder="Bet Description" />
                  <button style={styles.button} type="submit">Create Bet</button>
                </form>
              ) : (
                <p>Please login to create bets.</p>
              )}
            </div>

            <div style={styles.card}>
              <h2 style={{ color: '#FFD700' }}>Available Bets</h2>
              {bets.filter(b => b.type === 'direct' && b.status === 'waiting').length === 0 ? (
                <p>No available bets. Create one above!</p>
              ) : (
                bets.filter(b => b.type === 'direct' && b.status === 'waiting').map(bet => (
                  <div key={bet.id} style={{ ...styles.betItem, borderLeftColor: '#FFA500' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h4 style={{ margin: '0 0 5px 0' }}>{bet.description || `Bet for ${bet.itemAmount} ${bet.itemName}`}</h4>
                        <p style={{ margin: '0', fontSize: '14px' }}>
                          <strong>Value:</strong> ${bet.moneyValue} | 
                          <strong> Created by:</strong> {bet.creatorName} |
                          <strong> Items:</strong> {bet.itemAmount} {bet.itemName}
                        </p>
                      </div>
                      <button 
                        style={styles.button}
                        onClick={() => acceptBet(bet.id)}
                        disabled={!currentUser || currentUser.id === bet.creatorId}
                      >
                        Accept Bet
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* History Page */}
        {page === 'history' && (
          <div style={styles.card}>
            <h2 style={{ color: '#FFD700' }}>📜 Bet History</h2>
            
            <div style={{ marginBottom: '20px' }}>
              <button style={styles.button} onClick={() => setBets(bets.filter(b => b.status !== 'waiting'))}>
                Show All Completed
              </button>
              <button style={styles.button} onClick={() => setBets(bets.filter(b => b.status === 'pending_payment'))}>
                Show Unpaid Only
              </button>
            </div>

            {bets.filter(b => b.status !== 'waiting').length === 0 ? (
              <p>No history yet.</p>
            ) : (
              bets.filter(b => b.status !== 'waiting').map(bet => (
                <div key={bet.id} style={{
                  ...styles.betItem,
                  borderLeftColor: bet.status === 'paid' ? '#00FF00' : 
                                  bet.status === 'pending_payment' ? '#FF4444' : 
                                  bet.status === 'admin_enforced' ? '#8A2BE2' : '#FFA500'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ margin: '0 0 5px 0' }}>
                        {bet.type === 'lottery' ? `🎫 ${bet.tier} Lottery` : `🤝 ${bet.itemAmount} ${bet.itemName}`}
                      </h4>
                      <p style={{ margin: '0', fontSize: '14px' }}>
                        <strong>Amount:</strong> ${bet.moneyValue} | 
                        <strong> Winner:</strong> {bet.winner?.name} | 
                        <strong> Loser:</strong> {bet.loser?.name} |
                        <strong> Status:</strong> {bet.status.replace('_', ' ').toUpperCase()}
                      </p>
                      <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#aaa' }}>
                        Created: {new Date(bet.created).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      {bet.status === 'pending_payment' && currentUser?.id === bet.loser?.id && (
                        <button style={styles.button} onClick={() => markAsPaid(bet.id)}>
                          Mark as Paid
                        </button>
                      )}
                      {adminMode && bet.status === 'pending_payment' && (
                        <button style={styles.adminButton} onClick={() => enforcePayment(bet.id)}>
                          Enforce Payment
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Profile Page */}
        {page === 'profile' && currentUser && (
          <div style={styles.card}>
            <h2 style={{ color: '#FFD700' }}>👤 Your Profile</h2>
            
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <h3>Games Played</h3>
                <p style={{ fontSize: '24px' }}>{currentUser.gamesPlayed}</p>
              </div>
              <div style={styles.statCard}>
                <h3>Wins / Losses</h3>
                <p style={{ fontSize: '24px' }}>{currentUser.gamesWon} / {currentUser.gamesLost}</p>
              </div>
              <div style={styles.statCard}>
                <h3>Total Winnings</h3>
                <p style={{ fontSize: '24px', color: '#00FF00' }}>${currentUser.totalWinnings}</p>
              </div>
              <div style={styles.statCard}>
                <h3>Total Losses</h3>
                <p style={{ fontSize: '24px', color: '#FF4444' }}>${currentUser.totalLosses}</p>
              </div>
              <div style={styles.statCard}>
                <h3>Reputation</h3>
                <p style={{ fontSize: '24px', color: currentUser.reputation >= 70 ? '#00FF00' : currentUser.reputation >= 40 ? '#FFA500' : '#FF4444' }}>
                  {currentUser.reputation}/100
                </p>
              </div>
              <div style={styles.statCard}>
                <h3>Tickets Bought</h3>
                <p style={{ fontSize: '24px' }}>{currentUser.ticketsBought}/50</p>
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <h3>Your Terms Status</h3>
              {currentUser.agreedToTerms ? (
                <p style={{ color: '#00FF00' }}>✅ Terms accepted. You can participate in all games.</p>
              ) : (
                <div>
                  <p style={{ color: '#FF4444' }}>❌ You must accept terms before betting!</p>
                  <button style={styles.button} onClick={() => setShowTerms(true)}>
                    Read & Accept Terms
                  </button>
                </div>
              )}
            </div>

            <div style={{ marginTop: '20px' }}>
              <h3>Your Active Games</h3>
              {bets.filter(b => 
                (b.winner?.id === currentUser.id || b.loser?.id === currentUser.id) && 
                b.status === 'pending_payment'
              ).length === 0 ? (
                <p>No pending payments.</p>
              ) : (
                bets.filter(b => 
                  (b.winner?.id === currentUser.id || b.loser?.id === currentUser.id) && 
                  b.status === 'pending_payment'
                ).map(bet => (
                  <div key={bet.id} style={{ 
                    backgroundColor: '#8B0000',
                    padding: '10px',
                    borderRadius: '5px',
                    marginBottom: '10px'
                  }}>
                    <p style={{ margin: '0' }}>
                      {bet.loser?.id === currentUser.id ? '⚠️ YOU OWE: ' : '🎉 YOU WON: '}
                      ${bet.moneyValue} {bet.type === 'lottery' ? 'in lottery' : `for ${bet.itemAmount} ${bet.itemName}`}
                    </p>
                    {bet.loser?.id === currentUser.id && (
                      <button style={styles.button} onClick={() => markAsPaid(bet.id)}>
                        Mark as Paid
                      </button>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Admin Panel */}
        {page === 'admin' && adminMode && (
          <div style={styles.card}>
            <h2 style={{ color: '#8A2BE2' }}>👑 Admin Panel</h2>
            <p style={{ color: '#aaa' }}>Use these tools to manage the platform.</p>

            <div style={styles.statsGrid}>
              <div style={{ ...styles.statCard, borderColor: '#8A2BE2' }}>
                <h3>Total Players</h3>
                <p style={{ fontSize: '24px' }}>{players.length}</p>
              </div>
              <div style={{ ...styles.statCard, borderColor: '#8A2BE2' }}>
                <h3>Total Bets</h3>
                <p style={{ fontSize: '24px' }}>{bets.length}</p>
              </div>
              <div style={{ ...styles.statCard, borderColor: '#8A2BE2' }}>
                <h3>Unpaid Bets</h3>
                <p style={{ fontSize: '24px', color: '#FF4444' }}>{unpaidBets}</p>
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <h3>Player Management</h3>
              {players.map(player => (
                <div key={player.id} style={{
                  backgroundColor: player.reputation < 50 ? '#440000' : '#003300',
                  padding: '10px',
                  borderRadius: '5px',
                  marginBottom: '10px'
                }}>
                  <strong>{player.displayName}</strong> ({player.username}) | 
                  Rep: {player.reputation} | 
                  Games: {player.gamesWon}W/{player.gamesLost}L
                </div>
              ))}
            </div>

            <div style={{ marginTop: '20px' }}>
              <h3>Danger Zone</h3>
              <button style={{ ...styles.button, backgroundColor: '#8B0000' }} onClick={resetSystem}>
                💣 Reset All Data
              </button>
              <p style={{ fontSize: '12px', color: '#aaa', marginTop: '10px' }}>
                Warning: This will delete ALL data including players, bets, and lottery tiers!
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Terms Modal */}
      {showTerms && (
        <div style={styles.termsModal}>
          <div style={styles.termsContent}>
            <h2 style={{ color: '#FFD700' }}>📜 TERMS OF USE</h2>
            <div style={{ margin: '20px 0' }}>
              <p><strong>By accepting these terms, you agree to:</strong></p>
              <ol>
                <li>All bets and lottery outcomes are FINAL</li>
                <li>If you lose, you MUST transfer the agreed items/money IN-GAME within 48 hours</li>
                <li>Failure to pay will result in admin intervention</li>
                <li>Repeated failure to pay may result in temporary or permanent ban</li>
                <li>You must be 18+ or have parental permission to participate</li>
                <li>No real money gambling - only in-game items</li>
                <li>Admins have final say in all disputes</li>
              </ol>
              <p style={{ color: '#FF4444', marginTop: '20px' }}>
                ⚠️ <strong>WARNING:</strong> If you don't pay your losses, admins WILL enforce rules!
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={styles.button} onClick={acceptTerms}>
                ✅ I Accept Terms
              </button>
              <button style={{ ...styles.button, backgroundColor: '#444' }} onClick={() => setShowTerms(false)}>
                ❌ Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '20px',
        borderTop: '1px solid #444',
        marginTop: '40px',
        color: '#aaa',
        fontSize: '14px'
      }}>
        <p>TWS-Bets • For That War Server Community • All bets are enforced by admins</p>
        <p>⚠️ This is a demonstration system. Data is stored in your browser's localStorage.</p>
      </footer>
    </div>
  );
}
