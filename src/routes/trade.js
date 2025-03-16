const express = require("express");
const { placeTrade, getUserTrades } = require("../controllers/tradeController");
const authMiddleware = require("../middleware/auth");

module.exports = (io) => {
  const router = express.Router();

  router.post("/", authMiddleware, (req, res) => placeTrade(req, res, io));
  router.get("/", authMiddleware, getUserTrades);

  return router;
};
