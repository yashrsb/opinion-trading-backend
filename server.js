const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./src/config/db");
const logger = require("./src/utils/logger");
const authRoutes = require("./src/routes/auth");
const eventRoutes = require("./src/routes/event");
const tradeRoutes = require("./src/routes/trade");

require("dotenv").config();
connectDB();

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// ✅ Body parser (Must be before routes)
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/trades", tradeRoutes);

// ✅ WebSockets
io.on("connection", (socket) => {
  logger.info("New WebSocket Connection");

  socket.on("place_trade", (data) => {
    io.emit("update_trades", data);
  });

  socket.on("disconnect", () => {
    logger.info("User Disconnected");
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => logger.info(`Listening on port ${PORT}`));
