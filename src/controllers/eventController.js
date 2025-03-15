const Event = require("../models/Event");

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error });
  }
};
