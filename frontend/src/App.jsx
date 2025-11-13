import React, { useState, useEffect } from "react";
import Lobby from "./Lobby";
import Game from "./Game";

function App({ socket }) {
  const [inRoom, setInRoom] = useState(false);
  const [players, setPlayers] = useState([]);

  // Listen for server updates
  useEffect(() => {
    socket.on("updatePlayers", (playersList) => {
      setPlayers(playersList);
      setInRoom(true); // ✅ Once players are updated, switch to game view
    });

    // cleanup
    return () => socket.off("updatePlayers");
  }, [socket]);

  if (!inRoom) {
    return <Lobby socket={socket} onJoin={() => setInRoom(true)} />;
  }

  return <Game socket={socket} players={players} />;
}

export default App;
