import React  from "react";
import { GameContext } from "../../GameContext";

import { Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";

import "../GameBoard.css";

const MultiplyAction = ({
  haveTurn,
  gameState,
  currentResult,
  isPossible,
  getNextResult,
  number
}) => {
  return (
    <Button
      className={"multiply"}
      disabled={!isPossible(currentResult) || gameState !== "ready"}
      onClick={() => haveTurn(getNextResult)}
      title="Multiply current result by button value"
    >
      X {number}
    </Button>
  );
};
const MultiplyActionContainer = () => {
  const number =Math.floor(Math.random() * 3) + 2;

  const getNextResult = result => parseInt(result * number);

  
  const isPossible = (value) => {
    let possible = value > 0
    console.log("Multiply Is Possible",value, possible)
    
    return possible
  }  

  return {
    getNextResult: getNextResult,
    hash: "multiply-" + number,

    possible: (value) => {
      return isPossible(value);
    },

    button: (
      <GameContext.Consumer>
        {({ haveTurn, gameState, currentResult }) => <MultiplyAction currentResult={currentResult} haveTurn={haveTurn} gameState={gameState} number={number} isPossible={isPossible} getNextResult={getNextResult} />}
      </GameContext.Consumer>
    )
  };
};

export default MultiplyActionContainer;
