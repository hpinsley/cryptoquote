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
        width: "32px",
        height: "70px",
        fontSize: "16pt"
        }}>

      <div style={{height: "20px"}}>
        <span className={keyClass}>{props.fromKey}</span>
      </div>

      <div style={{height: "20px", marginTop: "5px"}}>
        <span className="value">{props.toKey}</span>
      </div>
    </div>
  );
}