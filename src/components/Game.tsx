import React, {useState} from 'react';
import '../App.css';
import {GameStates} from '../models/gameModels';
import NoPuzzle from './NoPuzzle';
import Playing from './Playing';
import { encrypt} from '../services/quoteService';
import * as QuoteService from '../services/quoteService'

export default function Game() {

  const [gameState, setGameState] = useState(GameStates.NO_PUZZLE)
  const [cypher, setCypher] = useState('');
  const [keymap, setKeymap] = useState(buildEmptyMap());
  const [undoBuffer, setUndoBuffer] = useState<Map<string,string>[]>([]);

  function resetAll()
  {
    setGameState(GameStates.NO_PUZZLE);
    setCypher('');
    setKeymap(buildEmptyMap());
    setUndoBuffer([]);
  }

  function clearGuesses()
  {
    setKeymap(buildEmptyMap());
    setUndoBuffer([]);
  }

  function setCypherAndPlay(encryptedText: string)
  {
    setCypher(encryptedText.toUpperCase());
    setGameState(GameStates.PLAYING);
  }

  function scramblePlaintextAndPlay(plainText: string)
  {
    const encryptedText = encrypt(plainText);
    console.log(`Plain text: ${plainText}`);
    console.log(`Encrypted: ${encryptedText}`);
    setCypherAndPlay(encryptedText);
  }

  function useRandomQuote()
  {
    const quote = QuoteService.GetRandomQuote();
    const plainText = quote.plainText + (quote.author ? ('-- ' + quote.author) : "");
    scramblePlaintextAndPlay(plainText);
  }

  function startNewGame() {
    resetAll();
  }

  function renderView() {
    switch(gameState) {
      case GameStates.NO_PUZZLE:
        return (<NoPuzzle randomQuoteCount={QuoteService.getKnownQuotationCount()} setCypher={setCypherAndPlay} setPlainText={scramblePlaintextAndPlay} useRandomQuote={useRandomQuote} />);
      case GameStates.PLAYING:
        return (<Playing
                  cypher={cypher}
                  keymap={keymap}
                  mapKey={mapKey}
                  invokeUndo={undo}
                  clearGuesses={clearGuesses}
                  startNewGame={startNewGame} />
                )
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