import React, {useState} from 'react';
import '../App.css';

export type NoPuzzleProps = {
  setCypher: (cypher:string) => void;
}
export default function NoPuzzle(props:NoPuzzleProps) {

  const [cypher, setCypher] = useState('');

  return (
    <div className="NoPuzzle">
      <div>
        Enter the cypher:
      </div>
      <div>
        <textarea rows={10} cols={80} value={cypher} onChange={(ev) => setCypher(ev.target.value)} />
      </div>
      <div>
        <button style={{fontSize: "24pt"}} onClick={() => props.setCypher(cypher)}>Play</button>
      </div>
    </div>
  );
}