const games = require('../data/mockGames');
const wallet = require('../data/wallet');

exports.getGames = (req, res) => {
  res.json(games);
};

exports.joinGame = (req, res) => {
  const { userId, gameId } = req.body;
const game = games.find(g => g.id === Number(gameId));  const user = wallet[userId];

  if (!user || !game) {
    return res.status(400).json({ message: "Invalid user or game" });
  }

  if (user.coins < game.entryFee) {
    return res.status(400).json({ message: "Not enough coins" });
  }

  user.coins -= game.entryFee;
  user.history.push({
    type: "DEBIT",
    amount: game.entryFee,
    note: `Joined ${game.name}`,
    timestamp: new Date().toISOString()
  });

  return res.json({
    message: `Joined ${game.name}`,
    coinsLeft: user.coins
  });
};
