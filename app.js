const games = [
  {
    id: 'bubble-pop',
    name: 'Bubble Pop World',
    age: 5,
    type: 'Kids',
    accent: '#4ea5ff',
    description: 'Pop the floating bubbles and make bright colors sparkle.',
    website: `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;font-family:Arial, sans-serif;background:linear-gradient(#9de3ff,#c7f4ff);display:grid;place-items:center;height:100vh;">
          <div style="text-align:center;">
            <h1 style="font-size:36px;color:#1d4ed8;margin:0;">Bubble Pop World</h1>
            <div style="margin-top:24px;display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
              <div style="width:60px;height:60px;border-radius:50%;background:#fff;box-shadow:0 0 18px rgba(37,99,235,0.5);"></div>
              <div style="width:70px;height:70px;border-radius:50%;background:#bde8ff;box-shadow:0 0 18px rgba(37,99,235,0.5);"></div>
              <div style="width:50px;height:50px;border-radius:50%;background:#dbeafe;box-shadow:0 0 18px rgba(37,99,235,0.5);"></div>
            </div>
            <p style="margin-top:18px;color:#1e3a8a;font-size:18px;">Age 5 website game</p>
          </div>
        </body>
      </html>
    `
  },
  {
    id: 'color-race',
    name: 'Color Race',
    age: 8,
    type: 'Kids',
    accent: '#5ac8fa',
    description: 'Follow the rainbow path and match the right colors.',
    website: `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;font-family:Arial,sans-serif;background:linear-gradient(#dbeafe,#bfdbfe);height:100vh;display:grid;place-items:center;">
          <div style="padding:24px;border-radius:24px;background:rgba(255,255,255,0.7);text-align:center;box-shadow:0 20px 40px rgba(59,130,246,0.15);">
            <h1 style="margin:0;color:#1d4ed8;">Color Race</h1>
            <div style="margin-top:20px;display:flex;gap:14px;justify-content:center;">
              <span style="width:38px;height:38px;border-radius:50%;background:#f87171;display:inline-block;"></span>
              <span style="width:38px;height:38px;border-radius:50%;background:#fbbf24;display:inline-block;"></span>
              <span style="width:38px;height:38px;border-radius:50%;background:#34d399;display:inline-block;"></span>
              <span style="width:38px;height:38px;border-radius:50%;background:#60a5fa;display:inline-block;"></span>
            </div>
            <p style="margin-top:18px;color:#1e3a8a;font-size:18px;">Age 8 website game</p>
          </div>
        </body>
      </html>
    `
  },
  {
    id: 'star-jump',
    name: 'Star Jump Quest',
    age: 10,
    type: 'Kids',
    accent: '#5aa9ff',
    description: 'Jump to collect stars and dodge tiny blockers.',
    website: `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;font-family:Arial,sans-serif;background:linear-gradient(#0f172a,#1d4ed8);height:100vh;display:grid;place-items:center;">
          <div style="width:420px;height:260px;border-radius:24px;background:rgba(255,255,255,0.12);position:relative;overflow:hidden;">
            <div style="position:absolute;left:30px;bottom:42px;width:36px;height:48px;background:#f8fafc;border-radius:10px;"></div>
            <div style="position:absolute;left:160px;bottom:30px;width:18px;height:18px;background:#facc15;border-radius:50%;box-shadow:0 0 30px #facc15;"></div>
            <div style="position:absolute;left:240px;bottom:35px;width:110px;height:32px;background:#fdba74;border-radius:8px;"></div>
            <div style="position:absolute;left:340px;top:32px;width:12px;height:12px;background:#f8fafc;border-radius:50%;"></div>
            <div style="position:absolute;left:320px;top:48px;width:12px;height:12px;background:#f8fafc;border-radius:50%;"></div>
            <div style="position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:center;padding:18px;color:#e0f2fe;font-weight:700;font-size:20px;">Star Jump Quest</div>
          </div>
        </body>
      </html>
    `
  },
  {
    id: 'spark-teen',
    name: 'Spark Stage',
    age: 13,
    type: 'Teen',
    accent: '#8b5cf6',
    description: 'Create beats, join mini challenges, and chat with friends.',
    website: `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;font-family:Arial,sans-serif;background:linear-gradient(#1e1b4b,#312e81);height:100vh;display:grid;place-items:center;">
          <div style="background:rgba(255,255,255,0.08);padding:32px 28px;border-radius:24px;text-align:center;color:#f5f3ff;box-shadow:0 20px 40px rgba(139,92,246,0.18);">
            <h1 style="margin:0 0 18px;">Spark Stage</h1>
            <div style="display:flex;justify-content:center;gap:12px;">
              <div style="width:18px;height:60px;background:#a78bfa;border-radius:12px;"></div>
              <div style="width:18px;height:92px;background:#c4b5fd;border-radius:12px;"></div>
              <div style="width:18px;height:76px;background:#ddd6fe;border-radius:12px;"></div>
            </div>
            <p style="margin-top:18px; color:#d8b4fe; font-size:18px;">Age 13 voice-enabled game</p>
          </div>
        </body>
      </html>
    `
  },
  {
    id: 'pixel-battle',
    name: 'Pixel Battle Arena',
    age: 16,
    type: 'Teen',
    accent: '#f97316',
    description: 'Quick strategy rounds and live player rooms.',
    website: `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;font-family:Arial,sans-serif;background:linear-gradient(#1f2937,#111827);height:100vh;display:grid;place-items:center;">
          <div style="background:rgba(255,255,255,0.04); width:460px; padding:28px; border-radius:28px; color:#f3f4f6; box-shadow:0 20px 40px rgba(249,115,22,0.2);">
            <h1 style="margin:0 0 16px;">Pixel Battle Arena</h1>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
              <div style="height:48px;background:#fbbf24;border-radius:12px;"></div>
              <div style="height:48px;background:#f97316;border-radius:12px;"></div>
              <div style="height:48px;background:#ef4444;border-radius:12px;"></div>
            </div>
            <p style="margin-top:18px;color:#fed7aa; font-size:18px;">Age 16 multiplayer lobby</p>
          </div>
        </body>
      </html>
    `
  },
  {
    id: 'puzzle-cafe',
    name: 'Puzzle Cafe 20',
    age: 20,
    type: 'Adult',
    accent: '#f43f5e',
    description: 'Calm puzzle rooms and social hangouts for adults.',
    website: `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;font-family:Arial,sans-serif;background:linear-gradient(#1f2937,#111827);height:100vh;display:grid;place-items:center;">
          <div style="text-align:center;color:#f8fafc;">
            <div style="display:flex;justify-content:center;gap:18px;">
              <span style="display:block;width:56px;height:56px;border-radius:14px;background:#fda4af;"></span>
              <span style="display:block;width:56px;height:56px;border-radius:14px;background:#f9a8d4;"></span>
              <span style="display:block;width:56px;height:56px;border-radius:14px;background:#fbcfe8;"></span>
            </div>
            <h1 style="margin-top:22px;">Puzzle Cafe 20</h1>
            <p style="color:#fecdd3;font-size:18px;">Age 20 community game</p>
          </div>
        </body>
      </html>
    `
  },
  {
    id: 'voice-lounge',
    name: 'Voice Lounge 30',
    age: 30,
    type: 'Adult',
    accent: '#06b6d4',
    description: 'Relaxed co-op play with voice chat and friendly rooms.',
    website: `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;font-family:Arial,sans-serif;background:linear-gradient(#0f172a,#134e4a);height:100vh;display:grid;place-items:center;">
          <div style="padding:30px 34px;border-radius:22px;background:rgba(255,255,255,0.06);color:#ecfeff;">
            <h1 style="margin:0 0 12px;">Voice Lounge 30</h1>
            <div style="display:flex;gap:16px;justify-content:center;">
              <span style="display:block;width:24px;height:58px;border-radius:16px;background:#67e8f9;"></span>
              <span style="display:block;width:24px;height:78px;border-radius:16px;background:#a5f3fc;"></span>
              <span style="display:block;width:24px;height:62px;border-radius:16px;background:#cffafe;"></span>
            </div>
            <p style="margin-top:18px;color:#a5f3fc; font-size:18px;">Age 30 voice-enabled room</p>
          </div>
        </body>
      </html>
    `
  },
  {
    id: 'zen-sky',
    name: 'Zen Sky 50',
    age: 50,
    type: 'Adult',
    accent: '#10b981',
    description: 'Relaxing strategy and social space for mature players.',
    website: `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;font-family:Arial,sans-serif;background:linear-gradient(#ecfeff,#bbf7d0);height:100vh;display:grid;place-items:center;">
          <div style="text-align:center;color:#065f46;">
            <h1 style="margin:0;">Zen Sky 50</h1>
            <div style="margin-top:20px;display:flex;justify-content:center;gap:16px;">
              <span style="display:block;width:16px;height:64px;border-radius:999px;background:#10b981;"></span>
              <span style="display:block;width:16px;height:86px;border-radius:999px;background:#34d399;"></span>
              <span style="display:block;width:16px;height:70px;border-radius:999px;background:#6ee7b7;"></span>
            </div>
            <p style="margin-top:18px;font-size:18px;">Age 50 calm play website</p>
          </div>
        </body>
      </html>
    `
  }
];

const state = {
  age: Number(localStorage.getItem('ageplay-age') || 10),
  color: localStorage.getItem('ageplay-color') || '#4ea5ff',
  selectedGameId: 'star-jump',
  voiceEnabled: false
};

const ageSlider = document.getElementById('ageSlider');
const ageValue = document.getElementById('ageValue');
const modeBadge = document.getElementById('modeBadge');
const matchLabel = document.getElementById('matchLabel');
const matchText = document.getElementById('matchText');
const voiceToggle = document.getElementById('voiceToggle');
const voiceText = document.getElementById('voiceText');
const colorPicker = document.getElementById('colorPicker');
const gamesGrid = document.getElementById('gamesGrid');
const gameCounter = document.getElementById('gameCounter');
const previewTitle = document.getElementById('previewTitle');
const previewAge = document.getElementById('previewAge');
const gamePreview = document.getElementById('gamePreview');
const randomGameBtn = document.getElementById('randomGameBtn');

function getAgeBase(age) {
  if (age <= 12) return 'kids';
  if (age <= 17) return 'teen';
  return 'adult';
}

function isVoiceAllowed(age) {
  return age >= 13;
}

function getMatchingGames(age) {
  return [...games].sort((a, b) => {
    const aDiff = Math.abs(a.age - age);
    const bDiff = Math.abs(b.age - age);
    return aDiff - bDiff;
  });
}

function savePlayer() {
  localStorage.setItem('ageplay-age', String(state.age));
  localStorage.setItem('ageplay-color', state.color);
}

function applyTheme() {
  const mode = getAgeBase(state.age);
  document.body.dataset.mode = mode;
  const root = document.documentElement;
  root.style.setProperty('--primary', state.color);
  root.style.setProperty('--primary-2', mode === 'kids' ? '#6dd2ff' : mode === 'teen' ? '#a78bfa' : '#67e8f9');
  modeBadge.textContent = mode === 'kids' ? 'Kids mode' : mode === 'teen' ? 'Teen mode' : 'Adult mode';

  const voiceAllowed = isVoiceAllowed(state.age);
  if (voiceAllowed) {
    voiceText.textContent = state.voiceEnabled ? 'Voice chat: On' : 'Voice chat: Off';
    voiceToggle.classList.remove('disabled');
    voiceToggle.disabled = false;
  } else {
    voiceText.textContent = 'Locked: 13+';
    voiceToggle.classList.add('disabled');
    voiceToggle.disabled = true;
    state.voiceEnabled = false;
  }

  voiceToggle.textContent = state.voiceEnabled ? 'On' : 'Off';
  matchLabel.textContent = `Same age friends: ${state.age}`;
  matchText.textContent =
    state.age <= 12
      ? `You can play with other ${state.age}-year-olds and games rated ${state.age}.`
      : `You can match with players around ${state.age} and games rated ${state.age}.`;

  savePlayer();
}

function renderGames() {
  const matches = getMatchingGames(state.age);
  const visible = matches.slice(0, 8);

  gamesGrid.innerHTML = visible
    .map((game) => {
      const selected = game.id === state.selectedGameId ? 'selected' : '';
      const highlight = game.age === state.age ? 'Exact age match' : 'Nearby age match';
      const buttonLabel = game.id === state.selectedGameId ? 'Playing' : 'Play';
      return `
        <article class="game-card ${selected}" data-id="${game.id}">
          <div class="game-card-top">
            <span class="game-badge" style="background:${game.accent}22;border-color:${game.accent}55;color:${game.accent};">${game.type}</span>
            <span class="age-chip">${game.age}</span>
          </div>
          <div>
            <h3>${game.name}</h3>
          </div>
          <p>${game.description}</p>
          <div class="game-meta">
            <span>${highlight}</span>
            <button class="game-play-btn" data-id="${game.id}" style="background:${game.accent};">${buttonLabel}</button>
          </div>
        </article>
      `;
    })
    .join('');

  gameCounter.textContent = `${visible.length} games`;

  gamesGrid.querySelectorAll('.game-card').forEach((card) => {
    card.addEventListener('click', (event) => {
      const button = event.target.closest('.game-play-btn');
      const id = button ? button.dataset.id : card.dataset.id;
      setSelectedGame(id);
    });
  });
}

function setSelectedGame(id) {
  const game = games.find((entry) => entry.id === id) || games[0];
  state.selectedGameId = game.id;
  previewTitle.textContent = game.name;
  previewAge.textContent = `Age ${game.age}`;
  gamePreview.srcdoc = game.website;
  renderGames();
}

function handleAgeChange(nextAge) {
  state.age = Math.max(5, Math.min(50, Number(nextAge)));
  ageSlider.value = String(state.age);
  ageValue.textContent = String(state.age);

  const exactMatchGame = games.find((game) => game.age === state.age);
  if (exactMatchGame) {
    state.selectedGameId = exactMatchGame.id;
  }

  applyTheme();
  setSelectedGame(state.selectedGameId);
}

ageSlider.addEventListener('input', (event) => {
  handleAgeChange(event.target.value);
});

colorPicker.addEventListener('input', (event) => {
  state.color = event.target.value;
  applyTheme();
});

voiceToggle.addEventListener('click', () => {
  if (!isVoiceAllowed(state.age)) return;
  state.voiceEnabled = !state.voiceEnabled;
  applyTheme();
});

randomGameBtn.addEventListener('click', () => {
  const pool = games.filter((game) => game.age === state.age || Math.abs(game.age - state.age) <= 2);
  const picked = pool[Math.floor(Math.random() * pool.length)] || games[0];
  setSelectedGame(picked.id);
});

ageSlider.value = String(state.age);
ageValue.textContent = String(state.age);
colorPicker.value = state.color;
applyTheme();
setSelectedGame(state.selectedGameId);
