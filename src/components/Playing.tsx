import React, {useRef, useEffect}  from 'react';
import '../App.css';

export type PlayingProps = {
  cypher: string;
  keymap: Map<string, string>
}

export default function Playing(props: PlayingProps) {

  const focusElementRef:any = useRef(null);

  useEffect(() => {
    if (focusElementRef && focusElementRef.current) {
      focusElementRef.current.focus();
    }
  }, []);

  return (
    <div ref={focusElementRef} tabIndex={0} className="Playing" onKeyPress={ev => captureKey(ev)} >
      Playing here
      <div>Cypher</div>
      <div>{props.cypher}</div>
      {showKeyMap(props.keymap)}
    </div>
  );

  function captureKey(ev: React.KeyboardEvent) {
    console.log(`Just got an ${ev.key}/${ev.keyCode}`);
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