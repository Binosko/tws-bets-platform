// Main application JavaScript
const GAME_TYPES = {
    DICE: 'dice',
    GUESS: 'guess',
    COIN: 'coin',
    RPS: 'rps',
    LOTTERY: 'lottery'
};

// User session management
class UserSession {
    constructor() {
        this.username = localStorage.getItem('tws_username') || null;
        this.balance = parseInt(localStorage.getItem('tws_balance')) || 1000;
        this.items = JSON.parse(localStorage.getItem('tws_items')) || [];
        this.updateUI();
    }

    login(username) {
        this.username = username;
        localStorage.setItem('tws_username', username);
        this.updateUI();
        return true;
    }

    logout() {
        this.username = null;
        localStorage.removeItem('tws_username');
        this.updateUI();
    }

    updateBalance(amount) {
        this.balance += amount;
        localStorage.setItem('tws_balance', this.balance);
        this.updateUI();
        return this.balance;
    }

    updateUI() {
        if (document.getElementById('userBalance')) {
            document.getElementById('userBalance').textContent = this.balance;
        }
        if (document.getElementById('userName')) {
            document.getElementById('userName').textContent = this.username || 'Guest';
        }
    }
}

// Game Manager
class GameManager {
    constructor() {
        this.activeGames = [];
        this.gameHistory = JSON.parse(localStorage.getItem('gameHistory')) || [];
    }

    createChallenge(gameType, stake) {
        const challengeId = this.generateChallengeId();
        const challenge = {
            id: challengeId,
            gameType,
            stake,
            creator: userSession.username,
            acceptor: null,
            status: 'waiting',
            createdAt: new Date().toISOString()
        };

        this.activeGames.push(challenge);
        this.saveGames();
        return challengeId;
    }

    generateChallengeId() {
        return 'CH' + Date.now() + Math.random().toString(36).substr(2, 4).toUpperCase();
    }

    saveGames() {
        localStorage.setItem('activeGames', JSON.stringify(this.activeGames));
    }

    recordGame(gameData) {
        this.gameHistory.push(gameData);
        localStorage.setItem('gameHistory', JSON.stringify(this.gameHistory));
    }

    getGameHistory() {
        return this.gameHistory.slice(-20); // Last 20 games
    }
}

// Initialize
let userSession;
let gameManager;

document.addEventListener('DOMContentLoaded', function() {
    userSession = new UserSession();
    gameManager = new GameManager();
    
    // Check if user is logged in
    if (!userSession.username && window.location.pathname.includes('index.html')) {
        showLoginModal();
    }
    
    // Update all balance displays
    updateBalanceDisplays();
});

// Utility functions
function showLoginModal() {
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 1000; display: flex; justify-content: center; align-items: center;">
            <div style="background: #1e1e1e; padding: 30px; border-radius: 10px; width: 90%; max-width: 400px; border: 2px solid #4CAF50;">
                <h2 style="color: #4CAF50; margin-bottom: 20px;">Welcome to TWS Gambling</h2>
                <input type="text" id="loginUsername" placeholder="TWS Username" style="width: 100%; padding: 10px; margin-bottom: 15px; background: #2d2d2d; color: white; border: 1px solid #444; border-radius: 5px;">
                <button onclick="handleLogin()" style="width: 100%; padding: 12px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Enter Platform</button>
                <p style="margin-top: 15px; color: #888; font-size: 12px; text-align: center;">No password needed. We trust the TWS honor system.</p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function handleLogin() {
    const username = document.getElementById('loginUsername')?.value.trim();
    if (username) {
        userSession.login(username);
        document.querySelector('div[style*="position: fixed"]')?.remove();
    } else {
        alert('Please enter a username');
    }
}

function updateBalanceDisplays() {
    document.querySelectorAll('.balance-display').forEach(el => {
        el.textContent = userSession?.balance || 0;
    });
}

function formatMoney(amount) {
    return '$' + amount.toLocaleString();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Export for use in other files
if (typeof module !== 'undefined') {
    module.exports = { UserSession, GameManager, GAME_TYPES };
}
