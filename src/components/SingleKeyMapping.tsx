import React from 'react';
import '../App.css';

export type SingleKeyMappingProps = {
  isSelectedKey: boolean;
  fromKey: string;
  toKey: string;
}

export default function SingleKeyMapping(props: SingleKeyMappingProps) {

  const keyClass = props.isSelectedKey ? "key selected" : "key";

  return (
    <div style={{
        width: "42px",
        height: "100px",
        border: "solid 1px black",
        borderRadius: "5px"
        }}>

      <div style={{height: "30px"}}>
        <span className={keyClass}>{props.fromKey}</span>
      </div>

      <div style={{height: "30px", marginTop: "10px"}}>
        <span className="value">{props.toKey}</span>
      </div>
    </div>
  );
}