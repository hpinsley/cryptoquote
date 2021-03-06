import React from 'react';
import '../App.css';
import LetterEntry from './LetterEntry'
import { strict } from 'assert';

export type LetterBoardProps = {
  cypher: string;
  keymap: Map<string, string>
  selectedKey: string;
}

export default function LetterBoard(props: LetterBoardProps) {

  return (
    <div style={{backgroundColor: "#eeeeee", border: "6px gray inset", 
              borderRadius: "8px", width: "98%", 
              marginLeft: "auto", marginRight: "auto", marginTop: "10px"}}>
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
    const rows = lines.map((line, index) => showRow(keymap, selectedKey, line, index));

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

  function showRow(keymap: Map<string, string>, selectedKey: string, cypher: string, rowIndex: number) {
    const letters = cypher.split('');
    const letterEntries = letters.map(c => <LetterEntry isSelectedKey={c === selectedKey} fromKey={c} toKey={getLetter(keymap, c)} />)
    const enclosedLetters = letterEntries.map((cell,index) => (
        <div style={{float: "left"}}
             key={rowIndex.toString() + "_" + index}>
               {cell}
        </div>)
    )

    return (
      <div key={rowIndex} style={{width: "98%", marginLeft: "auto", marginRight: "auto"}}>
        {enclosedLetters}
        <div style={{clear: "both"}} />
      </div>
    )
  }
}