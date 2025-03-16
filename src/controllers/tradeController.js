const Trade = require("../models/Trade");
const User = require("../models/User");

exports.placeTrade = async (req, res, io) => {
  try {
    const { event, amount, odds } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }
    user.balance -= amount;
    await user.save();

    const trade = await Trade.create({ user: req.user.id, event, amount, odds });

    io.emit("update_trades", trade);

    res.status(201).json(trade);
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
