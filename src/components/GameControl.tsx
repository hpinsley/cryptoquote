import React from 'react';
import '../App.css';

export type GameControlProps = {
  startNewGame: () => void;
  clearGuesses: () => void;
}

export default function GameControl(props:GameControlProps)
{
  return (
    <div>
      <button style={{marginRight: "20px"}} onClick={props.clearGuesses}>Start Over</button>
      <button onClick={props.startNewGame}>New Game</button>
    </div>
  )
}