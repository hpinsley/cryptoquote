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

  function shuffle(array:string[]) 
  {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };
  
  function scramblePlaintextAndPlay(plainText: string)
  {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    const shuffled = shuffle(Array.from(alphabet));
    const letterArray = Array.from(alphabet);

    const letterMap = new Map<string,string>();
    for (let i = 0; i < letterArray.length; ++i)
    {
      letterMap.set(letterArray[i], shuffled[i])
    }

    const plainChars = Array.from(plainText.toUpperCase());
    const mappedChars = plainChars.map(c => letterMap.has(c) ? letterMap.get(c) : c);
    const encryptedText = mappedChars.join("");
    console.log(`Plain text: ${plainText}`);
    console.log(`Encrypted: ${encryptedText}`);
    setCypherAndPlay(encryptedText);
  }

  function renderView() {
    switch(gameState) {
      case GameStates.NO_PUZZLE:
        return (<NoPuzzle setCypher={setCypherAndPlay} setPlainText={scramblePlaintextAndPlay} />);
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