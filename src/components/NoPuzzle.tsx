import React, {useState} from 'react';
import '../App.css';

export type NoPuzzleProps = {
  setCypher: (cypher:string) => void;
}
export default function NoPuzzle(props:NoPuzzleProps) {

  const [cypher, setCypher] = useState('');

  return (
    <div className="NoPuzzle">
      No puzzle view
      <div>
        Enter the cypher:
      </div>
      <div>
        <textarea rows={10} cols={132} value={cypher} onChange={(ev) => setCypher(ev.target.value)} />
      </div>
      <div>
        <button onClick={() => props.setCypher(cypher)}>Play</button>
      </div>
    </div>
  );
}