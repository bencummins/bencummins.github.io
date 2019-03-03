import React from "react";
import { GameContext } from "../../GameContext";

import { Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";

import "../GameBoard.css";

const ReverseAction = ({
  haveTurn,
  gameState,
  currentResult,
  isPossible,
  getNextResult,

}) => {

  return (
    <Button
      className={"reverse"}
      disabled={!isPossible(currentResult) || gameState !== "ready"}
      onClick={() => haveTurn(getNextResult)}
      title="Reverse numbers 123 = 321"
    >
      &lt;-&gt;
    </Button>
  );
};


const ReverseActionContainer = () => {
  const getNextResult = result =>
    parseInt(
      (result < 0 ? "-" : "") +
        [...result.toString()]
          .filter(x => x.toString() !== "-")
          .reverse()
          .join("")
    );

  const isPossible = (value) => {
    let possible = value.toString().length > 1;
    console.log("Reverse Is Possible",value, possible)
    
    return possible
  }  


  return {
    getNextResult: getNextResult,
    hash: "reverse",

    possible: (value) => {
      return isPossible(value);
    },

    button: (
      <GameContext.Consumer>
        {({ haveTurn, gameState, currentResult }) => (
          <ReverseAction
            currentResult={currentResult}
            haveTurn={haveTurn}
            gameState={gameState}
            isPossible={isPossible}
            getNextResult={getNextResult}
          />
        )}
      </GameContext.Consumer>
    )
  };
};

export default ReverseActionContainer;
