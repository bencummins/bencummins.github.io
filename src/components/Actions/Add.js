import React from "react";
import { GameContext } from "../../GameContext";

import { Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";

import "../GameBoard.css";

const AddAction = ({
  haveTurn,
  gameState,
  currentResult,
  isPossible,
  getNextResult,
  number
}) => {
  return (
    <Button
      className={"add"}
      disabled={!isPossible(currentResult) || gameState !== "ready"}
      onClick={() => haveTurn(getNextResult)}
      title="Add digit to end - Apending 2 to 21 = 212"
    >
     + {number}
    </Button>
  );
};
const AddActionContainer = () => {
  const number =Math.floor(Math.random() * 9) + 1;


  const getNextResult = result => parseInt(result + number);

  const isPossible = (value) => {
    let possible = true
    console.log("Add Is Possible",value, possible)
    
    return possible
  }  

  return {
    getNextResult: getNextResult,
    hash: "add-" + number,

    possible: (value) => {
      return isPossible(value);
    },

    button: (
      <GameContext.Consumer>
        {({ haveTurn, gameState, currentResult }) => <AddAction currentResult={currentResult} haveTurn={haveTurn} gameState={gameState} number={number} isPossible={isPossible} getNextResult={getNextResult} />}
      </GameContext.Consumer>
    )
  };
};

export default AddActionContainer;
