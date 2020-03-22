import React, {useState} from 'react';
import '../App.css';
import {GameStates} from '../models/gameModels';
import NoPuzzle from './NoPuzzle';
import Playing from './Playing';

export default function Game() {

  const [gameState, setGameState] = useState(GameStates.NO_PUZZLE)
  const [cypher, setCypher] = useState('');
  const [keymap, setKeymap] = useState(buildEmptyMap());

  function setCypherAndPlay(encryptedText: string)
  {
    setCypher(encryptedText);
    setGameState(GameStates.PLAYING);
  }

  function renderView() {
    switch(gameState) {
      case GameStates.NO_PUZZLE:
        return (<NoPuzzle setCypher={setCypherAndPlay} />);
      case GameStates.PLAYING:
        return (<Playing />)
    }
  }
  return (
    <div className="Game">
      Game
      { renderView() }
      <div>The cypher is {cypher}</div>
    </div>
  );
}

function buildEmptyMap() : Map<string, string>
{
  const map = new Map<string, string>();

  for (var i = 0; i<26; ++i)
  {
    var key = String.fromCharCode(65 + i);
    map.set(key, "");
  }

  return map;
}