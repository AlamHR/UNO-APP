import React, { useState } from "react";

function Lobby({ socket, setInGame }) {
  const [name, setName] = useState("");

  const joinGame = () => {
    if (name.trim()) {
      socket.emit("join_game", name);
      setInGame(true);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🎴 UNO Lobby</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginRight: "10px",
        }}
      />
      <button onClick={joinGame}>Join Game</button>
    </div>
  );
}

export default Lobby;
