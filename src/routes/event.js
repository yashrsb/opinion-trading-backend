const express = require("express");
const authMiddleware = require("../middleware/auth");
const { getEvents, createEvent } = require("../controllers/eventController");

const router = express.Router();

router.get("/", getEvents);
router.post("/", authMiddleware, createEvent);

module.exports = router;
