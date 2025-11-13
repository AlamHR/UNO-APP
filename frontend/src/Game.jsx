import React, { useEffect, useState } from "react";

export default function Game({ socket, players }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [message, setMessage] = useState("");
  const [playerList, setPlayerList] = useState(players);

  useEffect(() => {
    // ✅ Update player list if the server sends new ones
    socket.on("updatePlayers", (updatedPlayers) => {
      setPlayerList(updatedPlayers);
    });

    // ✅ Listen for "startGame" signal from server
    socket.on("startGame", (data) => {
      console.log("Game started:", data);
      setGameStarted(true);
      setMessage(data.message || "Game started!");
    });

    return () => {
      socket.off("updatePlayers");
      socket.off("startGame");
    };
  }, [socket]);

  if (!gameStarted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-green-800 text-white">
        <h1 className="text-3xl font-bold mb-4">UNO Game 🎮</h1>
        <h2 className="text-lg mb-4">Players in room:</h2>
        <ul>
          {playerList.map((p) => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
        <p className="mt-6 text-gray-300">Waiting for game logic to start...</p>
      </div>
    );
  }

  // ✅ Once game starts, show the board
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-700 text-white">
      <h1 className="text-3xl font-bold mb-4">UNO Started! 🚀</h1>
      <h2 className="text-lg mb-2 text-yellow-200">{message}</h2>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Players in game:</h3>
        <ul>
          {playerList.map((p) => (
            <li key={p.id} className="mb-1">
              {p.name}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 italic text-gray-300">
        (Gameplay logic will be added next!)
      </p>
    </div>
  );
}
