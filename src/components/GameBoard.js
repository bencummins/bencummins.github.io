import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "../GameContext";
import Display from "./GameBoard/Display";
import GameStatus from "./GameBoard/GameStatus";
import Cheat from "./GameBoard/Cheat";
import Buttons from "./GameBoard/Buttons";
import AppendAction from "./Actions/Append";
import AddAction from "./Actions/Add";
import SubtractAction from "./Actions/Subtract";
import DivideAction from "./Actions/Divide";
import MultiplyAction from "./Actions/Multiply";
import ReverseAction from "./Actions/Reverse";
import SumAction from "./Actions/Sum";

const GameBoard = () => {
  const {
    gameState,
    setGameState,
    targetResult,
    currentTurns,
    maxTurns,
    currentResult,
    initialiseGame,
    setCheat,
    cheat
  } = useContext(GameContext);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    currentTurns === maxTurns &&
      setGameState(currentResult === targetResult ? "Won" : "Lost");

    console.log("gameState", gameState);
    gameState === "init" && initialiseGame();

  });

 


  // setButtons([...buttons, <AddButton />]);

  //   setState({ ...state, buttons: "hello" })
  //   <AppendButton />

  return (
    <div className={"gameboard"}>
      <GameStatus />
      <Display />
      <Buttons />
      <Cheat />
    </div>
  );
};

const GameBoardContainer = props => {

  const [cheat, setCheat] = useState(true)

  const [gameState, setGameState] = useState("init");

  const [limitButtons, setLimitButtons] = useState(5);

  const [buttons, setButtons] = useState([]);
  const [takenTurns, setTakenTurns] = useState([]);

  const [currentResult, setCurrentResult] = useState(0);

  const [targetResult, setTargetResult] = useState(0);
  const [maxTurns, setMaxTurns] = useState(0);

  const [currentTurns, setCurrentTurns] = useState(0);

  const [startValue, setStartValue] = useState(0);

  const [limitTurns, setLimitTurns] = useState(0);

  
  const resetGame = () => {
    setCurrentTurns(0);
    setCurrentResult(startValue);
    setGameState("ready");
  };

  const haveTurn = action => {
    setCurrentTurns(currentTurns + 1);
    setCurrentResult(action);
  };
  const getButton = j => {
    let NewButton = possible_buttons[~~(possible_buttons.length * Math.random())]

    return NewButton();
  };

  const possible_buttons = [
    AddAction,
    AppendAction,
    SubtractAction,
    ReverseAction,
    SumAction,
    MultiplyAction,
    DivideAction
  ];


  //   const targetTurn = action => setTargetResult(action);
  const initialiseGame = () => {
    setCurrentTurns(0);
    const startingValue = Math.floor(Math.random() * 100);
    setStartValue(startingValue);
    setCurrentResult(startingValue);
    setTargetResult(startingValue);

    let i = 0; // failsafe
    let new_buttons = [];

    // get random number of possible buttons
    let limit = Math.floor(Math.random() * limitButtons) + 1;
    while (new_buttons.length < limit && i++ < 100) {
      let tmp = getButton(i);

      // don't include the same button twice
      if (new_buttons.find(button => button.hash === tmp.hash)) {
        continue;
      }

      new_buttons = [...new_buttons, tmp];
    }

    // store new buttons
    setButtons(new_buttons);

    // generate some turns
    const newMaxTurns = Math.floor(Math.random() * limitTurns) + 3;
    setMaxTurns(newMaxTurns);
    let x = startingValue;
    i = 0; // failsafe
    let turns = [];
    while (turns.length < newMaxTurns && i++ < 100) {
      let button = new_buttons[~~(new_buttons.length * Math.random())];

      // can we use this button with the 'current result' ?
      let possible = button.possible(x);

      // if we can't take the action, don't use button
      if (!possible) continue;

      turns = [...turns, button];

      x = button.getNextResult(x) 
      console.log('x', x)
    }
    setTargetResult(x)  

    // store the turns that were taken to get to the result (cheat mode)
    setTakenTurns(turns);

    setGameState("ready");
  };
  return (
    <GameContext.Provider
      value={{
        limitButtons,
        setLimitButtons,  
        haveTurn,
        gameState,
        setGameState,
        currentResult,
        setCurrentResult,
        targetResult,
        setTargetResult,
        buttons,
        setButtons,
        takenTurns,
        setTakenTurns,
        currentTurns,
        setCurrentTurns,
        resetGame,
        maxTurns,
        setMaxTurns,
        startValue,
        setStartValue,
        limitTurns,
        setLimitTurns,
        initialiseGame,
        getButton,
        setCheat, 
        cheat
      }}
    >
      {" "}
      <GameBoard />
    </GameContext.Provider>
  );
};

export default GameBoardContainer;
