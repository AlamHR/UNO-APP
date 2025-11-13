import React from 'react'
import Card from './Card'


export default function PlayerHand({hand, onPlay, playable}){
return (
<div className="flex flex-row items-end overflow-x-auto p-2">
{hand.map((c, idx) => (
<Card key={idx} card={c} onPlay={onPlay} selectable={playable && c.playable} />
))}
</div>
)
}