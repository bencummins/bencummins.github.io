import React, { useContext } from "react";
import { GameContext } from "../../GameContext";

import { Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";

import "../GameBoard.css";

const SumAction = ({
  haveTurn,
  gameState,
  currentResult,
  isPossible,
  getNextResult
}) => {
  return (
    <Button
      className={"sum"}
      disabled={!isPossible(currentResult) || gameState !== "ready"}
      onClick={() => haveTurn(getNextResult)}
            title="Sum numbers - 13 = 1+3 = 4"
>
      SUM
    </Button>
  );
};
const SumActionContainer = () => {

  const getNextResult = result => [...result.toString()].reduce((x, y) => parseInt(x) + parseInt(y));

  const isPossible = (value) => {
    let possible =  value.toString().length > 1;
    console.log("Sum Is Possible",value, possible)
    
    return possible
  }  

  return {
    getNextResult: getNextResult,
    hash: "sum",

    possible: (value) => {
      return isPossible(value);
    },

    button: (
      <GameContext.Consumer>
        {({ haveTurn, gameState, currentResult }) => <SumAction currentResult={currentResult} haveTurn={haveTurn} gameState={gameState} isPossible={isPossible} getNextResult={getNextResult} />}
      </GameContext.Consumer>
    )
  };
};

export default SumActionContainer;
