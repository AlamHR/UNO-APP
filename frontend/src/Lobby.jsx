import React, { useState } from "react";

export default function Lobby({ socket, onJoin }) {
  const [name, setName] = useState("");

  const handleJoin = () => {
    if (name.trim() !== "") {
      socket.emit("joinGame", name);
      onJoin(); // Let App know we joined
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-900 text-white">
      <h1 className="text-3xl font-bold mb-4">🎴 UNO Lobby</h1>
      <input
        className="p-2 text-black rounded mb-2"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        onClick={handleJoin}
      >
        Join Game
      </button>
    </div>
  );
}
