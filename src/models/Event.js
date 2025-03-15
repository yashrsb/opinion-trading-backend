const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: String,
  type: String,
  odds: Number,
  status: { type: String, enum: ["upcoming", "ongoing", "completed"], default: "upcoming" },
});

module.exports = mongoose.model("Event", EventSchema);
