import React from 'react'
import { GameContext }  from '../../GameContext'
import '../GameBoard.css'

function Display() {
    return (
        <GameContext.Consumer>
            {({currentResult}) => (<div className={'display'}>{currentResult}</div>)}
        </GameContext.Consumer>
    )
}

export default Display