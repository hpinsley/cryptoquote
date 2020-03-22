import React from 'react';
import '../App.css';

export type LetterEntryProps = {
  isSelectedKey: boolean;
  fromKey: string;
  toKey: string;
}

export default function LetterEntry(props: LetterEntryProps) {

  const keyClass = props.isSelectedKey ? "key selected" : "key";

  return (
    <div style={{
        width: "42px",
        height: "100px",
        fontSize: "18pt"
        }}>

      <div key="letterkey" style={{height: "30px"}}>
        <span className={keyClass}>{props.fromKey}</span>
      </div>

      <div key="lettervalue" style={{height: "30px", marginTop: "5px"}}>
        <span className="value">{props.toKey}</span>
      </div>
    </div>
  );
}