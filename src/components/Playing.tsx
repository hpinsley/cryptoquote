import React, {useRef, useEffect, useState}  from 'react';
import '../App.css';
import KeyMap from './KeyMap';
import LetterBoard from './LetterBoard';
import KeyboardHelp from './KeyboardHelp';
import Progress from './Progress';

export type PlayingProps = {
  cypher: string;
  keymap: Map<string, string>
  mapKey: (k: string, v: string) => void;
  invokeUndo: () => void;
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

  const remaining = remainingToGuess(props.cypher, props.keymap);

  return (
    <div ref={focusElementRef} tabIndex={0} className="Playing" onKeyDown={ev => captureKey(ev)} >
      <KeyMap keymap={props.keymap} selectedKey={selectedKey} />
      <KeyboardHelp />
      <Progress remaining={remaining} />
      <LetterBoard cypher={props.cypher} keymap={props.keymap} selectedKey={selectedKey} />
    </div>
  );

  function nothingMapsTo(k:string)
  {
    const matched = Array.from(props.keymap.values()).find(value => k === value);
    return matched === undefined;
  }

  function captureKey(ev: React.KeyboardEvent) {
    //console.log(`Just got an [${ev.key}]`);
    var k = ev.key.toUpperCase();
    if (k.length === 1 && k >= "A" && k <= "Z") {
      if (selectedKey !== '') {
        // He wants to map the selected key to value k.  Don't let him do it if there is
        // already something mapped there
        if (nothingMapsTo(k)) {
          mapSelectedKeyTo(selectedKey, k)
        }
        
        setSelectedKey('');
      }
      else {
        setSelectedKey(k);
      }
    }
    else if (k === " ")
    {
      if (selectedKey !== '')
      {
        mapSelectedKeyTo(selectedKey, '')
        unselectKey();
      }
    }
    else if (k === "BACKSPACE")
    {
      undo();
    }
  }

  function unselectKey() {
    setSelectedKey('');
  }

  function undo()
  {
    unselectKey();
    props.invokeUndo();
  }

  function isLetter(c:string) : Boolean
  {
    const upper = c.toUpperCase();
    return (upper >= 'A' && upper <= 'Z');
  }

  function remainingToGuess(cypher: string, keyMap: Map<string, string>)
  {
    const cypherSet = new Set(Array.from(cypher).filter(isLetter));
    const targetsMapped = new Set(Array.from(keyMap.keys()).filter(k => keyMap.get(k) !== ''));

    let lettersMatches = 0;
    cypherSet.forEach(cypherLetter => {
      if (targetsMapped.has(cypherLetter)) {
        ++lettersMatches;
      }
    })

    return cypherSet.size - lettersMatches;
  }

  function mapSelectedKeyTo(k: string, v: string)
  {
    props.mapKey(k, v);
  }
}