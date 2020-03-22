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
    const cells = letters.map(c => <LetterEntry isSelectedKey={c == selectedKey} fromKey={c} toKey={getLetter(keymap, c)} />)
    const tds = cells.map((cell,index) => (<td key={index}>{cell}</td>))

    return (
      <div>
        <table id="letterboard">
          <tbody>
            <tr>
              {tds}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}