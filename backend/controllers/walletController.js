const wallet = require('../data/wallet');

exports.getWallet = (req, res) => {
  const user = wallet[req.params.userId];
  if (!user) return res.status(404).json({ message: "User not found" });

  res.json(user);
};

exports.recharge = (req, res) => {
  const { userId, amount } = req.body;
  const user = wallet[userId];

  if (!user) return res.status(404).json({ message: "User not found" });

  // Ensure amount is a number
  const rechargeAmount = Number(amount);

  // Validate amount
  if (isNaN(rechargeAmount) || rechargeAmount <= 0) {
    return res.status(400).json({ message: "Invalid recharge amount" });
  }

  // Perform safe addition
  user.coins += rechargeAmount;

  // Log transaction
  user.history.push({
    type: "CREDIT",
    amount: rechargeAmount,
    note: "Recharge",
    timestamp: new Date().toISOString()
  });

  res.json({ message: "Recharge successful", newBalance: user.coins });
};
