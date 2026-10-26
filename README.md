# AgePlay

A kid-friendly and age-matched gaming website where players join games and websites based on their age.

## What it does

- Lets the user choose an age from 5 to 50
- Matches games and websites to the same age level
- Uses a blue theme for kids and custom blue colors
- Keeps voice chat available only for ages 13+
- Shows age-based game cards and a live preview of the selected game website

## Run it locally

```bash
npm install
npm start
```

Then open http://localhost:3000

## Main files

- `index.html` — age-matched game portal UI
- `style.css` — kid-friendly and adult-friendly styling
- `app.js` — game filtering, age logic, theme, and preview handling
- `server.js` — local Node server

## Safety idea

- Kids mode is blue by default and uses simpler games.
- Voice chat is locked for users under 13.
- Games and website previews are matched to the player's selected age.
