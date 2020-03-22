import React, {useRef, useEffect, useState}  from 'react';
import '../App.css';
import KeyMap from './KeyMap';
import LetterBoard from './LetterBoard';

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
      <hr/>
      <KeyMap keymap={props.keymap} selectedKey={selectedKey} />
      <hr/>
      <LetterBoard cypher={props.cypher} keymap={props.keymap} selectedKey={selectedKey} />
    </div>
  );

  function nothingMapsTo(k:string)
  {
    const matched = Array.from(props.keymap.values()).find(value => k === value);
    return matched === undefined;
  }

  function captureKey(ev: React.KeyboardEvent) {
    console.log(`Just got an [${ev.key}]`);
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
        setSelectedKey('')
      }
    }
  }

  function mapSelectedKeyTo(k: string, v: string)
  {
    props.setKeyMapping(k, v);
  }
}