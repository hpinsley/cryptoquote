import React, {useState} from 'react';
import '../App.css';
import {GameStates} from '../models/state';
import NoPuzzle from './NoPuzzle';
import Playing from './Playing';

export default function Game() {

  const [gameState, setGameState] = useState(GameStates.NO_PUZZLE)

  function renderView() {
    switch(gameState) {
      case GameStates.NO_PUZZLE:
        return (<NoPuzzle />);
      case GameStates.PLAYING:
        return (<Playing />)
    }
    return (
      <div>View for {gameState}</div>
    )
  }
  return (
    <div className="Game">
      Game
      { renderView() }
    </div>
  );
}