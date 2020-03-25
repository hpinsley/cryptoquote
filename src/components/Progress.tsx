import React, {useState} from 'react';
import '../App.css';

export type ProgressProps = {
  remaining: number;
}

export default function Progress(props:ProgressProps) 
{
    const [awardShow, setAwardShown] = useState(false);

    if (props.remaining === 0 && !awardShow) 
    {
      return showCompleteAward();
    }
    else
    {
      return showInProgress(props.remaining);
    }
    
    function showCompleteAward()
    {
      return (
        <div>
            <div>COMPLETE</div>
            <button onClick={() => setAwardShown(true)}>OK</button>
        </div>
      );
    }
    
    function showInProgress(remaining: number)
    {
      return <div>You have {remaining} letters left to guess.</div>
    }
}

