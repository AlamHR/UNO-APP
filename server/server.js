// server/server.js
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const httpServer = createServer(app);

app.use(cors());

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173", // your frontend port
    methods: ["GET", "POST"],
  },
});

let rooms = {};

io.on("connection", (socket) => {
  console.log("A player connected:", socket.id);

  socket.on("joinGame", (playerName) => {
    const room = "uno-room";

    if (!rooms[room]) {
      rooms[room] = [];
    }

    rooms[room].push({ id: socket.id, name: playerName });

    socket.join(room);
    console.log(`${playerName} joined the room`);

    io.to(room).emit("updatePlayers", rooms[room]);
        // Auto-start when at least 2 players have joined
    if (rooms[room].length >= 2) {
      console.log("Starting game in room:", room);
      io.to(room).emit("startGame", {
        message: "Game started!",
        players: rooms[room],
      });
    }

  });

  socket.on("disconnect", () => {
    console.log("Player disconnected:", socket.id);
    for (let room in rooms) {
      rooms[room] = rooms[room].filter((p) => p.id !== socket.id);
      io.to(room).emit("updatePlayers", rooms[room]);
    }
  });
});

const PORT = 3000;
httpServer.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
