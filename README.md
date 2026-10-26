# Website Quest

A browser game where you can load any website, then run, jump, and dodge obstacles while the site plays as the background scene.

## Features

- Type any site URL and load it into the game screen.
- Jump over blockers and collect glowing pickups.
- Press Space or Up to jump, Down to slide, and R to restart.
- Works with a local static server for easy play.

## Run it locally

1. Install Node.js 18 or newer.
2. From the project folder, run:

```bash
npm install
npm start
```

3. Open http://localhost:3000 in your browser.

## Notes

Some websites block being embedded inside an iframe. When that happens, the game will keep running with a fallback scene while showing a message.

## How it works

- `index.html` contains the game UI and the website preview.
- `style.css` styles the interface and game layout.
- `app.js` handles the runner physics, obstacles, input, and URL loading.
- `server.js` serves the static files locally.
