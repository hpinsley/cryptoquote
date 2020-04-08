import React, {useState} from 'react';
import '../App.css';

export type NoPuzzleProps = {
  randomQuoteCount: number;
  setCypher: (cypher:string) => void;
  setPlainText: (plainText:string) => void;
  useRandomQuote: () => void;
}
export default function NoPuzzle(props:NoPuzzleProps) {

  const [text, setText] = useState('');


  return (
    <div className="NoPuzzle" style={{marginTop:"10vh"}}>
      <div>
        Enter the cypher or plaintext:
      </div>
      <div>
        <textarea rows={10} cols={80} value={text} onChange={(ev) => setText(ev.target.value)} />
      </div>
      <div>
        <button className="playButton" disabled={text.length === 0} onClick={() => props.setCypher(text)}>Play</button>
        <button className="playButton" disabled={text.length === 0} onClick={() => props.setPlainText(text)}>Scramble &amp; Play</button>
        <button className="playButton" onClick={props.useRandomQuote}>Random (from list of {props.randomQuoteCount})</button>
      </div>
    </div>
  );
}