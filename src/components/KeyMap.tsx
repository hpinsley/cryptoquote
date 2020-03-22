import React from 'react';
import '../App.css';
import SingleKeyMapping from './SingleKeyMapping'

export type KeymapProps = {
  keymap: Map<string, string>
  selectedKey: string;
}

export default function KeyMap(props: KeymapProps) {

  return (
    <div>
      {showKeyMap(props.keymap, props.selectedKey)}
    </div>
  );

  function showKeyMap(keymap: Map<string, string>, selectedKey: string) {

    const keys = Array.from(keymap.keys()).map(k =>
        (<td key={k}>
          <SingleKeyMapping fromKey={k} toKey={keymap.get(k) || ''} isSelectedKey={k === selectedKey} />
        </td>))

    return (
      <div>
        <table id="keymap">
          <tbody>
            <tr>
              {keys}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}