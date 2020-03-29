import React, {useState} from 'react';
import '../App.css';

export type NoPuzzleProps = {
  setCypher: (cypher:string) => void;
  setPlainText: (plainText:string) => void;
  useRandomQuote: () => void;
}
export default function NoPuzzle(props:NoPuzzleProps) {

  const [text, setText] = useState('');


  return (
    <div className="NoPuzzle">
      <div>
        Enter the cypher or plaintext:
      </div>
      <div>
        <textarea rows={10} cols={80} value={text} onChange={(ev) => setText(ev.target.value)} />
      </div>
      <div>
        <button style={{fontSize: "24pt"}} onClick={() => props.setCypher(text)}>Play</button>
      </div>
      <div>
        <button style={{fontSize: "24pt"}} onClick={() => props.setPlainText(text)}>Scramble &amp; Play</button>
      </div>
      <div>
        <button style={{fontSize: "24pt"}} onClick={props.useRandomQuote}>Random</button>
      </div>
    </div>
  );
}