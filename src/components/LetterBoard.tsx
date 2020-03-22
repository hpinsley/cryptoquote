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
    const MaxCharsPerRow = 35;

    const lines = breakLines(cypher, MaxCharsPerRow);
    const rows = lines.map(line => showRow(keymap, selectedKey, line));

    return (
      <div>
        {rows}
      </div>
    )
  }

  function breakLines(cypher: string, lineMax: number) : string[]
  {
    const lines = []
    let [line, remaining] = nextLine(cypher, lineMax);

    while (line.length > 0) {
      lines.push(line);
      [line, remaining] = nextLine(remaining, lineMax);
    }

    return lines;
  }

  function nextLine(text: string, lineMax: number) : [string, string]
  {
    if (text.length <= lineMax) {
      return [text, ""]
    }

    let breakIndex = lineMax + 1;
    while (breakIndex > 0 && isText(text.charAt(breakIndex)))
    {
      --breakIndex;
    }

    if (breakIndex > 1) {
      return [text.substring(0, breakIndex), text.substring(breakIndex)]
    }
    else
    {
      return [text, ""]
    }
  }

  function isText(str:string) : boolean 
  {
    return str !== ' ';
  }

  function showRow(keymap: Map<string, string>, selectedKey: string, cypher: string) {
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
        <div style={{clear: "both"}} />
      </div>
    )
  }
}