import React, {useState} from 'react';
import '../App.css';
import {GameStates} from '../models/gameModels';
import NoPuzzle from './NoPuzzle';
import Playing from './Playing';

export default function Game() {

  const [gameState, setGameState] = useState(GameStates.NO_PUZZLE)
  const [cypher, setCypher] = useState('');
  const [keymap, setKeymap] = useState(buildEmptyMap());
  const [undoBuffer, _] = useState<Map<string,string>[]>([]);

  function setCypherAndPlay(encryptedText: string)
  {
    setCypher(encryptedText.toUpperCase());
    setGameState(GameStates.PLAYING);
  }

  function renderView() {
    switch(gameState) {
      case GameStates.NO_PUZZLE:
        return (<NoPuzzle setCypher={setCypherAndPlay} />);
      case GameStates.PLAYING:
        return (<Playing cypher={cypher} keymap={keymap} mapKey={mapKey} invokeUndo={undo} />)
    }
  }

  function undo() {
    const lastMap = undoBuffer.pop();
    if (lastMap !== undefined) {
      setKeymap(lastMap);
    }
  }

  function mapKey(k: string, v: string)
  {
    setKeyMapping(k, v);
    undoBuffer.push(keymap);
  }
  
  function setKeyMapping(k: string, v: string)
  {
    const newKeyMap:Map<string,string> = new Map<string, string>(keymap)
    newKeyMap.set(k, v);
    setKeymap(newKeyMap);
  }

  return (
    <div className="Game">
      { renderView() }
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