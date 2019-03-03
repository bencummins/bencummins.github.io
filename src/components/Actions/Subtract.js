import React from "react";
import { GameContext } from "../../GameContext";

import { Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";

import "../GameBoard.css";

const SubtractAction = ({
  haveTurn,
  gameState,
  currentResult,
  isPossible,
  getNextResult,
  number
}) => {
  return (
    <Button
      className={"subtract"}
      disabled={!isPossible(currentResult) || gameState !== "ready"}
      onClick={() => haveTurn(getNextResult)}
      title="Subtract button value from current result"
    >
      - {number}
    </Button>
  );
};
const SubtractActionContainer = () => {
  const number =Math.floor(Math.random() * 9) + 1;


  const getNextResult = result => parseInt(result - number);

  const isPossible = (value) => {
    let possible = true
    console.log("Subtract Is Possible",value, possible)
    
    return possible
  }  

  return {
    getNextResult: getNextResult,
    hash: "subtract-" + number,

    possible: (value) => {
      return isPossible();
    },

    button: (
      <GameContext.Consumer>
        {({ haveTurn, gameState, currentResult }) => <SubtractAction currentResult={currentResult} haveTurn={haveTurn} gameState={gameState} number={number} isPossible={isPossible} getNextResult={getNextResult} />}
      </GameContext.Consumer>
    )
  };
};

export default SubtractActionContainer;
