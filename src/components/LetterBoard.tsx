import React from 'react';
import '../App.css';
import LetterEntry from './LetterEntry'

export type LetterBoardProps = {
  cypher: string;
  keymap: Map<string, string>
  selectedKey: string;
}

export default function LetterBoard(props: LetterBoardProps) {

  return (
    <div>
      {showBoard(props.keymap, props.selectedKey, props.cypher)}
    </div>
  );

  function getLetter(keymap: Map<string, string>, cypherLetter: string): string {
    if (keymap.has(cypherLetter.toUpperCase())) {
      return keymap.get(cypherLetter.toUpperCase())!
    }

    return cypherLetter;
  }

  function showBoard(keymap: Map<string, string>, selectedKey: string, cypher: string) {

    const letters = cypher.split('');
    const letterEntries = letters.map(c => <LetterEntry isSelectedKey={c == selectedKey} fromKey={c} toKey={getLetter(keymap, c)} />)
    const enclosedLetters = letterEntries.map((cell,index) => (
        <div style={{float: "left"}}
             key={index}>
               {cell}
        </div>)
    )

    return (
      <div>
        {enclosedLetters}
      </div>
    )
  }
}