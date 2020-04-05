import React, {useState, useEffect} from 'react';
import '../App.css';
import reward from '../images/reward-01.jpg';
import UIfx from 'uifx'
import fanfareSound from '../sounds/fanfare01.wav'

export type ProgressProps = {
  remaining: number;
}

const fanfare = new UIfx(
  fanfareSound,
  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }
)

export default function Progress(props:ProgressProps) 
{
    const [awardShown, setAwardShown] = useState(false);

    useEffect(() => {
      //console.log(`In useEffect callback with remaining = ${props.remaining} and awardShow = ${awardShown}`)
      if (props.remaining === 0 && !awardShown) 
      {
        fanfare.play(1.0);
        setTimeout(() => {
            setAwardShown(true);
        }, 2500);
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
      return <div style={{fontWeight: "bold", fontFamily: "sans-serif"}}>You have {remaining} letters left to guess.</div>
    }
}

