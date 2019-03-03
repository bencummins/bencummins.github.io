import React from 'react'
import { GameContext }  from '../../GameContext'
import '../GameBoard.css'

function Target() {
    return (
        <GameContext.Consumer>
            {({targetResult}) => (<div className={'target'}>Goal: {targetResult}</div>)}
        </GameContext.Consumer>
    )
}

export default Target