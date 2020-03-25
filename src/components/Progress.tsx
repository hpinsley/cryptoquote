import React, {useState} from 'react';
import '../App.css';
import reward from '../images/reward-01.jpg';

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
      setTimeout(() => setAwardShown(true), 3000);
      return (
        <div>
            <img src={reward} style={{width: "300px", border:"10px solid black"}} />
        </div>
      );
    }
    
    function showInProgress(remaining: number)
    {
      return <div>You have {remaining} letters left to guess.</div>
    }
}

