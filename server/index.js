import express from 'express'
if(!(card.color==='black' || card.color===top.color || card.type===top.type)){
return socket.emit('errorMessage','illegal play')
}
const played = hand.splice(idx,1)[0]
room.discard.push(played)
// apply effects (very simplified)
const players = room.players
let gi = room.game.currentIndex
if(played.type === 'reverse') room.game.direction *= -1
if(played.type === 'skip') gi = (gi + room.game.direction + players.length) % players.length
if(played.type === 'draw2'){
const targetIndex = (gi + room.game.direction + players.length) % players.length
const target = players[targetIndex]
for(let i=0;i<2;i++) room.hands[target.id].push(room.deck.pop())
players[targetIndex].cards = room.hands[target.id].length
}
if(played.type === 'wild4'){
// give 4 to next
const targetIndex = (gi + room.game.direction + players.length) % players.length
const target = players[targetIndex]
for(let i=0;i<4;i++) room.hands[target.id].push(room.deck.pop())
players[targetIndex].cards = room.hands[target.id].length
}


players.find(p=>p.id===socket.id).cards = hand.length
// advance turn
room.game.currentIndex = (gi + room.game.direction + players.length) % players.length
const cur = players[room.game.currentIndex]
room.game.currentPlayerId = cur.id
room.game.currentPlayerName = cur.name


// simple reshuffle
if(room.deck.length < 5){
const keep = room.discard.splice(room.discard.length-1,1)
room.deck = shuffle(room.discard.concat(room.deck))
room.discard = keep
}


io.to(roomId).emit('gameState', sanitizeRoom(room))



socket.on('drawCard', ({roomId})=>{
const room = rooms[roomId]
if(!room || !room.game) return
const card = room.deck.pop()
room.hands[socket.id].push(card)
const p = room.players.find(x=>x.id===socket.id)
if(p) p.cards = room.hands[socket.id].length
io.to(roomId).emit('gameState', sanitizeRoom(room))
})


socket.on('disconnecting', ()=>{
// remove from rooms
const joined = Array.from(socket.rooms)
joined.forEach(rid=>{
if(rooms[rid]){
rooms[rid].players = rooms[rid].players.filter(p=>p.id!==socket.id)
delete rooms[rid].hands[socket.id]
io.to(rid).emit('roomUpdate', sanitizeRoom(rooms[rid]))
}
})
})



function sanitizeRoom(room){
return {
id: room.id,
players: room.players.map(p=>({ id:p.id, name:p.name, cards: p.cards })),
deckCount: room.deck.length,
topCard: room.discard[room.discard.length-1] || null,
hands: room.hands,
game: room.game
}
}


const PORT = process.env.PORT || 3000
server.listen(PORT, ()=> console.log('Server listening on', PORT))