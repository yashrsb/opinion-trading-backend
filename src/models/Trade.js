const mongoose = require("mongoose");

const TradeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  amount: Number,
  odds: Number,
  status: { type: String, enum: ["pending", "won", "lost"], default: "pending" },
});

module.exports = mongoose.model("Trade", TradeSchema);
