import React from "react";
import { GameContext } from "../../GameContext";

import { Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";

import "../GameBoard.css";

const AppendAction = ({
  haveTurn,
  gameState,
  currentResult,
  isPossible,
  getNextResult,
  number
}) => {

  return (
    <Button
      className={"append"}
      disabled={!isPossible(currentResult) || gameState !== "ready"}
      onClick={() => haveTurn(getNextResult)}
      title="Append digit to end - Apending 2 to 21 = 212"
    >
      {number}
    </Button>
  );
};
const AppendActionContainer = () => {
  const number =Math.floor(Math.random() * 9) + 1;


  const getNextResult = result => parseInt(result.toString() + number.toString());

  const isPossible = (value) => {
    let possible = true
    console.log("Append Is Possible",value, possible)
    
    return possible
  }

  return {
    getNextResult: getNextResult,
    hash: "append-" + number,

    possible: (value) => {
      return isPossible(value);
    },

    button: (
      <GameContext.Consumer>
        {({ haveTurn, gameState, currentResult }) => <AppendAction currentResult={currentResult} haveTurn={haveTurn} gameState={gameState} number={number} isPossible={isPossible} getNextResult={getNextResult} />}
      </GameContext.Consumer>
    )
  };
};

export default AppendActionContainer;
