const express = require("express");
const authMiddleware = require("../middleware/auth");
const { placeTrade, getUserTrades } = require("../controllers/tradeController");

const router = express.Router();

router.post("/", authMiddleware, placeTrade);
router.get("/", authMiddleware, getUserTrades);

module.exports = router;
