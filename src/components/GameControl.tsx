import React, {useState, useEffect} from 'react';
import '../App.css';

export type GameControlProps = {
  startNewGame: () => void;
}

export default function GameControl(props:GameControlProps) 
{
  return (
    <div>
      <button onClick={props.startNewGame}>New Game</button>
    </div>
  )
}