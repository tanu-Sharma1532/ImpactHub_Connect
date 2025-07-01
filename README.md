# ImpactHub Connect – Game & Wallet Module

This is a small project with a game lobby and wallet system. Users can join games using coins and also recharge their wallet.

---

## Features

- Two mock games: Challenge & Connect, Snake & Ladder
- Shows how many coins are needed to join
- Join button that deducts coins and shows dummy game screen
- Wallet screen shows:
  - Total coins
  - Transaction history
  - Add coins using recharge packs
  - Error if not enough coins

---

## Tech Used

**Frontend:**
- React
- Axios
- React Router

**Backend:**
- Node.js
- Express
- Nodemon
- Mock data (no database)

---

## How to Run (All Steps Together)

```bash
# 1. Clone the project
git clone https://github.com/tanu-Sharma1532/ImpactHub_Connect.git
cd ImpactHub_Connect

# 2. Start backend
cd backend
npm install
nodemon server.js
# Leave this running in one terminal

# 3. Open new terminal, start frontend
cd frontend
npm install
npm start
