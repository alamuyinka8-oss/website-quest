const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const siteStatus = document.getElementById('siteStatus');
const scoreValue = document.getElementById('score');
const bestScoreValue = document.getElementById('bestScore');
const speedValue = document.getElementById('speedValue');
const siteUrlInput = document.getElementById('siteUrl');
const websiteFrame = document.getElementById('websiteFrame');
const siteOverlay = document.getElementById('siteOverlay');
const siteOverlayText = document.getElementById('siteOverlayText');
const loadSiteBtn = document.getElementById('loadSiteBtn');
const startBtn = document.getElementById('startBtn');

const state = {
  running: false,
  gameOver: false,
  score: 0,
  best: Number(localStorage.getItem('website-quest-best') || 0),
  speed: 1,
  spawnTimer: 0,
  pickupTimer: 0,
  lastTime: 0,
  flash: 0
};

const groundY = canvas.height - 60;
const player = {
  x: 90,
  y: groundY - 54,
  width: 42,
  height: 54,
  vy: 0,
  jumpPower: 16.5,
  gravity: 0.68,
  onGround: true,
  ducking: false
};

const world = {
  obstacles: [],
  pickups: [],
  particles: []
};

bestScoreValue.textContent = state.best;

function normalizeUrl(rawValue) {
  const value = rawValue.trim();
  if (!value) return 'https://example.com';
  if (/^https?:\/\//i.test(value)) return value;
  return `https://${value}`;
}

function updateSiteLabel(hostname) {
  siteStatus.textContent = `Site: ${hostname}`;
}

function setOverlay(text, visible = true) {
  siteOverlayText.textContent = text;
  siteOverlay.classList.toggle('hidden', !visible);
}

function loadSite() {
  const url = normalizeUrl(siteUrlInput.value);
  siteUrlInput.value = url;
  websiteFrame.src = url;
  updateSiteLabel(new URL(url).hostname);
  setOverlay('Loading website...');
}

function resetPlayer() {
  player.y = groundY - player.height;
  player.vy = 0;
  player.onGround = true;
  player.ducking = false;
}

function resetWorld() {
  world.obstacles = [];
  world.pickups = [];
  world.particles = [];
  state.spawnTimer = 0;
  state.pickupTimer = 0;
  state.score = 0;
  state.speed = 1;
  state.flash = 0;
  player.y = groundY - player.height;
  player.vy = 0;
}

function startGame() {
  if (!state.running) {
    state.running = true;
    state.gameOver = false;
    resetWorld();
    state.lastTime = 0;
    setOverlay('');
  }
}

function endGame() {
  state.running = false;
  state.gameOver = true;
  state.best = Math.max(state.best, Math.floor(state.score));
  localStorage.setItem('website-quest-best', String(state.best));
  bestScoreValue.textContent = state.best;
  setOverlay('Game over — press R to retry', true);
}

function jump() {
  if (!state.running) {
    startGame();
  }

  if (player.onGround) {
    player.vy = -player.jumpPower;
    player.onGround = false;
  }
}

function slide() {
  if (!state.running) return;
  player.ducking = true;
}

function stopSlide() {
  player.ducking = false;
}

function spawnObstacle() {
  const typeRoll = Math.random();
  const width = typeRoll > 0.7 ? 52 : 36;
  const height = typeRoll > 0.7 ? 80 : 50;
  const x = canvas.width + 40;
  const y = groundY - height;

  world.obstacles.push({
    x,
    y,
    width,
    height,
    color: typeRoll > 0.7 ? '#fb7185' : '#f97316',
    type: typeRoll > 0.7 ? 'tall' : 'block'
  });
}

function spawnPickup() {
  const x = canvas.width + 50;
  const y = groundY - (70 + Math.random() * 90);
  world.pickups.push({
    x,
    y,
    radius: 12,
    value: 10,
    spin: Math.random() * Math.PI * 2
  });
}

function update(dt) {
  if (!state.running) return;

  const delta = dt * 0.06;
  state.score += dt * 0.025;
  state.speed = 1 + state.score / 100;
  speedValue.textContent = `${state.speed.toFixed(1)}x`;
  scoreValue.textContent = `${Math.floor(state.score)}`;

  player.vy += player.gravity * delta * 18;
  player.y += player.vy * delta * 12;

  if (player.y >= groundY - player.height) {
    player.y = groundY - player.height;
    player.vy = 0;
    player.onGround = true;
  }

  if (player.ducking && player.onGround) {
    player.height = 38;
  } else {
    player.height = 54;
  }

  state.spawnTimer += dt;
  state.pickupTimer += dt;

  if (state.spawnTimer > 1200 / state.speed) {
    spawnObstacle();
    state.spawnTimer = 0;
  }

  if (state.pickupTimer > 1500 / state.speed) {
    spawnPickup();
    state.pickupTimer = 0;
  }

  const moveSpeed = 6 * state.speed;

  for (const obstacle of world.obstacles) {
    obstacle.x -= moveSpeed * delta * 12;
  }

  for (const pickup of world.pickups) {
    pickup.x -= moveSpeed * delta * 12;
    pickup.spin += 0.12;
  }

  world.obstacles = world.obstacles.filter((obstacle) => obstacle.x + obstacle.width > -20);
  world.pickups = world.pickups.filter((pickup) => pickup.x + pickup.radius > -20);

  const playerHitBox = {
    x: player.x + 8,
    y: player.y + 2,
    width: player.width - 14,
    height: player.height - 6
  };

  for (const obstacle of world.obstacles) {
    const collides =
      playerHitBox.x < obstacle.x + obstacle.width &&
      playerHitBox.x + playerHitBox.width > obstacle.x &&
      playerHitBox.y < obstacle.y + obstacle.height &&
      playerHitBox.y + playerHitBox.height > obstacle.y;

    if (collides) {
      endGame();
      return;
    }
  }

  for (const pickup of world.pickups) {
    const dx = player.x + player.width / 2 - pickup.x;
    const dy = player.y + player.height / 2 - pickup.y;
    const dist = Math.hypot(dx, dy);

    if (dist < pickup.radius + 26) {
      state.score += pickup.value;
      pickup.x = -999;
      state.flash = 1;
    }
  }

  world.pickups = world.pickups.filter((pickup) => pickup.x > -1000);
  state.flash *= 0.92;
}

function drawBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#0f172a');
  gradient.addColorStop(1, '#111827');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const glow = ctx.createRadialGradient(canvas.width * 0.75, 120, 20, canvas.width * 0.75, 120, 250);
  glow.addColorStop(0, 'rgba(34,211,238,0.3)');
  glow.addColorStop(1, 'rgba(34,211,238,0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'rgba(148, 163, 184, 0.08)';
  for (let i = 0; i < 18; i += 1) {
    const x = (i * 71 + (state.score * 2) % 80) % (canvas.width + 40);
    const y = 80 + (i % 5) * 36;
    ctx.fillRect(x, y, 42, 2);
  }
}

function drawGround() {
  ctx.fillStyle = '#0b1120';
  ctx.fillRect(0, groundY, canvas.width, canvas.height - groundY);

  ctx.strokeStyle = 'rgba(148, 163, 184, 0.22)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, groundY + 1);
  ctx.lineTo(canvas.width, groundY + 1);
  ctx.stroke();

  for (let i = 0; i < canvas.width + 30; i += 24) {
    ctx.fillStyle = 'rgba(34, 211, 238, 0.08)';
    ctx.fillRect(i - (state.score * 1.5) % 24, groundY + 14, 14, 4);
  }
}

function drawPickup(pickup) {
  ctx.save();
  ctx.translate(pickup.x, pickup.y);
  ctx.rotate(pickup.spin);
  ctx.fillStyle = '#fcd34d';
  ctx.beginPath();
  ctx.arc(0, 0, pickup.radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#f59e0b';
  ctx.beginPath();
  ctx.arc(0, 0, pickup.radius * 0.55, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawObstacle(obstacle) {
  ctx.fillStyle = obstacle.color;
  ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
  ctx.fillRect(obstacle.x + 6, obstacle.y + 8, obstacle.width - 12, 8);
}

function drawPlayer() {
  const x = player.x;
  const y = player.y;
  const width = player.width;
  const height = player.height;

  if (state.flash > 0.02) {
    ctx.fillStyle = `rgba(255,255,255,${0.2 + state.flash * 0.6})`;
    ctx.fillRect(x - 8, y - 8, width + 16, height + 16);
  }

  ctx.fillStyle = '#34d399';
  ctx.fillRect(x + 8, y + 14, width - 16, height - 14);

  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(x + 10, y + 4, width - 20, 12);

  ctx.fillStyle = '#0f172a';
  ctx.fillRect(x + 10, y + 20, 5, 5);
  ctx.fillRect(x + width - 15, y + 20, 5, 5);
  ctx.fillRect(x + 12, y + 32, width - 24, 4);

  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(x + 6, y + 6, 8, 8);
  ctx.fillRect(x + width - 14, y + 6, 8, 8);

  if (player.onGround) {
    ctx.fillStyle = '#7dd3fc';
    ctx.fillRect(x + 6, y + height - 4, 10, 6);
    ctx.fillRect(x + width - 16, y + height - 4, 10, 6);
  }
}

function render() {
  drawBackground();

  for (const pickup of world.pickups) {
    drawPickup(pickup);
  }

  for (const obstacle of world.obstacles) {
    drawObstacle(obstacle);
  }

  drawGround();
  drawPlayer();
}

function loop(timestamp) {
  if (!state.lastTime) state.lastTime = timestamp;
  const dt = timestamp - state.lastTime;
  state.lastTime = timestamp;

  update(dt);
  render();
  requestAnimationFrame(loop);
}

window.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'ArrowUp') {
    event.preventDefault();
    jump();
  }

  if (event.code === 'ArrowDown') {
    event.preventDefault();
    slide();
  }

  if (event.key.toLowerCase() === 'r') {
    state.running = false;
    state.gameOver = false;
    startGame();
  }
});

window.addEventListener('keyup', (event) => {
  if (event.code === 'ArrowDown') {
    player.ducking = false;
  }
});

loadSiteBtn.addEventListener('click', loadSite);
startBtn.addEventListener('click', () => {
  startGame();
});

document.querySelectorAll('.preset').forEach((button) => {
  button.addEventListener('click', () => {
    siteUrlInput.value = button.dataset.url;
    loadSite();
  });
});

websiteFrame.addEventListener('load', () => {
  setOverlay('', false);
});

websiteFrame.addEventListener('error', () => {
  setOverlay('This site blocks embedding. You can still play the fallback runner scene.', true);
});

siteUrlInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    loadSite();
  }
});

resetPlayer();
render();
requestAnimationFrame(loop);
