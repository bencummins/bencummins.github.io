import React from "react";
import { GameContext } from "../../GameContext";
import "../GameBoard.css";
import Target from "../GameBoard/Target";
import Turns from "../GameBoard/Turns";

import { Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

function GameStatus() {
  return (
    <GameContext.Consumer>
      {({ gameState, initialiseGame, currentTurns, resetGame }) => (
        <Row>
          <Col xs={4} className={'game-status ' + gameState.toString().toLowerCase()}>
          {gameState === "ready" ? <div className={'playing'}>Playing</div> : <div>{gameState}</div>}


          </Col>
          <Col xs={4}>
            <Turns />
          </Col>
          <Col xs={4}>
            <Target />
          </Col>

        </Row>
      )}
    </GameContext.Consumer>
  );
}

export default GameStatus;
