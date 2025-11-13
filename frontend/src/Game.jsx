import React from "react";

function Game({ socket }) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>UNO Game Screen</h1>
      <p>Connected to server ✅</p>
    </div>
  );
}

export default Game;
