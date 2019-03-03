import React from 'react'
import { GameContext }  from '../../GameContext'
import '../GameBoard.css'

function Turns() {
    return (
        <GameContext.Consumer>
            {({maxTurns, currentTurns}) => (<div className={'moves'}>Moves: {maxTurns - currentTurns} </div>)}
        </GameContext.Consumer>
    )
}

export default Turns