import React from 'react';
import '../App.css';

export type KeymapProps = {
  keymap: Map<string, string>
  selectedKey: string;
}

export default function KeyMap(props: KeymapProps) {

  return (
    <div>
      {showKeyMap(props.keymap)}
    </div>
  );

  function showKeyMap(keymap: Map<string, string>) {
    const keys = Array.from(keymap.keys()).map(k => (<td key={k}>{k} = {keymap.get(k)}</td>))

    return (
      <div>
        <table id="keymap">
          <tbody>
            <tr>
              {keys}
            </tr>
          </tbody>
        </table>
      <div>
        Selected key: {props.selectedKey}</div>
      </div>
    )
  }
}