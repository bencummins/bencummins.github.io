import React,  { useState }  from 'react'
import { GameContext }  from '../../GameContext'
import '../GameBoard.css'

function Cheat() {

    return (
      <GameContext.Consumer>
        {({ takenTurns, setCheat, cheat }) => (<div>

            <button onClick={()=>setCheat(!cheat)}>{cheat ? 'disable':'enable'} cheat mode</button>

            {cheat ?  
                (<div className={'buttons'}>{takenTurns.map((button, i) => <div key={'step-' + i}>{button.button}</div>)}</div>) : 
                null}
            </div>            
        )}
      </GameContext.Consumer>
    );
  }
  

  export default Cheat