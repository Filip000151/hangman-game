# Hangman Game

A Hangman game built with React, TypeScript, and Motion. One player enters a secret word, and the other tries to guess it letter by letter before the hangman is complete. Features animated hangman drawing and smooth transitions.

🔗 **[Live Demo](https://Filip000151.github.io/hangman-game/)**

## Features

- **Two-player gameplay** — one player enters a secret word, the other guesses
- **Animated hangman drawing** — SVG parts animate in as wrong guesses accumulate
- **Letter guessing** — click letters to reveal them or lose an attempt
- **Word input screen** — the setter enters the word before the game starts

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool
- **Motion** (Framer Motion) — animations
- **Tailwind CSS** — styling

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone https://github.com/Filip000151/hangman-game.git
cd hangman-game
npm install
npm run dev
