const express = require("express");
const authMiddleware = require("../middleware/auth");
const Event = require("../models/Event");

const router = express.Router();

router.get("/events", authMiddleware, async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

router.post("/event", authMiddleware, async (req, res) => {
  const event = await Event.create(req.body);
  res.json(event);
});

module.exports = router;
