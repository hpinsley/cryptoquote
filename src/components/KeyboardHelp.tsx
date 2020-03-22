import React  from 'react';
import '../App.css';

export default function KeyboardHelp() 
{
    return (
      <div>
        <p style={{fontWeight: "bold"}}>
          To unset a letter, press the SPACEBAR after pressing the letter.
          To invoke UNDO, use the BACKSPACE key.
        </p>
      </div>
    );
}
