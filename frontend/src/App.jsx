import React, { useState } from 'react'
import Lobby from './Lobby'
import Game from './Game'

function App({ socket }) {
  const [inRoom, setInRoom] = useState(false)

  const handleJoin = () => setInRoom(true)

  if (!inRoom) {
    return <Lobby socket={socket} onJoin={handleJoin} />
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-4">UNO Game</h1>
      </div>
      <Game socket={socket} />
    </div>
  )
}

export default App
