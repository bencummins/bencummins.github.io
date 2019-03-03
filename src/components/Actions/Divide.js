import React, { useContext } from "react";
import { GameContext } from "../../GameContext";

import { Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";

import "../GameBoard.css";

const DivideAction = ({
  haveTurn,
  gameState,
  currentResult,
  isPossible,
  getNextResult,
  number
}) => {
  return (
    <Button
      className={"divide"}
      disabled={!isPossible(currentResult) || gameState !== "ready"}
      onClick={() => haveTurn(getNextResult)}
      title="Divide current result by button value"
    >
       / {number}
    </Button>
  );
};

const DivideActionContainer = props => {
    

  const number =Math.floor(Math.random() * 3) + 1;


  const getNextResult = result => parseInt(result / number);


  const isPossible = (value) => {
    let possible = value > 1 && value % number === 0;
    console.log("Divide Is Possible",value, possible)
    
    return possible
  }  

  return {
    getNextResult: getNextResult,
    hash: "divide-" + number,

    possible: (value) =>  isPossible(value),

    button: (
      <GameContext.Consumer>
        {({ haveTurn, gameState, currentResult }) => <DivideAction currentResult={currentResult} haveTurn={haveTurn} gameState={gameState} number={number} isPossible={isPossible} getNextResult={getNextResult} />}
      </GameContext.Consumer>
    )
  };
};

export default DivideActionContainer;
