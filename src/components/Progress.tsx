import React, {useState, useEffect} from 'react';
import '../App.css';
import reward from '../images/reward-01.jpg';

export type ProgressProps = {
  remaining: number;
}

export default function Progress(props:ProgressProps) 
{
    const [awardShown, setAwardShown] = useState(false);

    useEffect(() => {
      //console.log(`In useEffect callback with remaining = ${props.remaining} and awardShow = ${awardShown}`)
      if (props.remaining === 0 && !awardShown) 
      {
        setTimeout(() => {
            setAwardShown(true);
        }, 2500)
      }
    });

    if (props.remaining === 0 && !awardShown) 
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
            <img src={reward} alt="You won!" style={{width: "300px", borderRadius:"15px", border:"10px solid puple"}} />
        </div>
      );
    }
    
    function showInProgress(remaining: number)
    {
      return <div style={{fontWeight: "bold"}}>You have {remaining} letters left to guess.</div>
    }
}

