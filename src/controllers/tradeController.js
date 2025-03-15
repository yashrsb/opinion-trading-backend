const Trade = require("../models/Trade");
const User = require("../models/User");

exports.placeTrade = async (req, res) => {
  try {
    const { event, amount, odds } = req.body;
    const user = await User.findById(req.user.id);

    if (user.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    user.balance -= amount;
    await user.save();

    const trade = await Trade.create({ user: req.user.id, event, amount, odds });
    res.json(trade);
  } catch (error) {
    res.status(500).json({ message: "Error placing trade", error });
  }
};

exports.getUserTrades = async (req, res) => {
  try {
    const trades = await Trade.find({ user: req.user.id }).populate("event");
    res.json(trades);
  } catch (error) {
    res.status(500).json({ message: "Error fetching trades", error });
  }
};
