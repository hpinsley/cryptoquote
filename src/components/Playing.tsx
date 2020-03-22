import React, {useRef, useEffect, useState}  from 'react';
import '../App.css';

export type PlayingProps = {
  cypher: string;
  keymap: Map<string, string>
  setKeyMapping: (k: string, v: string) => void;
}

export default function Playing(props: PlayingProps) {

  // We have to use an effect to set the focus to our div so we can capture
  // keys
  const focusElementRef:any = useRef(null);

  useEffect(() => {
    if (focusElementRef && focusElementRef.current) {
      focusElementRef.current.focus();
    }
  }, []);

  const [selectedKey, setSelectedKey] = useState('')

  return (
    <div ref={focusElementRef} tabIndex={0} className="Playing" onKeyPress={ev => captureKey(ev)} >
      Playing here
      <div>Selected key: {selectedKey}</div>
      <hr/>
      {showKeyMap(props.keymap)}
      <hr/>
      {showCypher()}
    </div>
  );

  function showCypher()
  {
    return (
      <div>
        {props.cypher}
      </div>
    )
  }
  function captureKey(ev: React.KeyboardEvent) {
    console.log(`Just got an ${ev.key}`);
    var k = ev.key.toUpperCase();
    if (k.length == 1 && k >= "A" && k <= "Z") {
      if (selectedKey != '') {
        mapSelectedKeyTo(selectedKey, k)
      }
      else {
        setSelectedKey(k);
      }
    }
  }

  function mapSelectedKeyTo(k: string, v: string)
  {
    props.setKeyMapping(k, v);
  }

  function getLetter(keymap: Map<string, string>, cypherLetter: string): string {
    if (keymap.has(cypherLetter.toUpperCase())) {
      return keymap.get(cypherLetter.toUpperCase())!
    }

    return cypherLetter;
  }

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
      </div>
    )
  }
}