import React from 'react'


export default function Card({card, onPlay, selectable}){
if(!card) return null
const style = {
backgroundColor: card.color === 'black' ? '#222' : card.color,
color: card.color === 'black' ? 'white' : 'black'
}
return (
<div className={`card m-1 cursor-pointer ${selectable ? 'ring-2 ring-offset-2' : ''}`} style={style} onClick={() => selectable && onPlay(card)}>
<div className="text-lg">{card.type}</div>
</div>
)
}