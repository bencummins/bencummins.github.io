import React from "react";
import { GameContext } from "../../GameContext";

import { Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import "../GameBoard.css";


function Buttons() {
  return (
    <GameContext.Consumer>
      {({ buttons, initialiseGame, resetGame, gameState, cheat }) => (
        <Row className={"buttons"}>
          <Col className={"game-button"} xs={4}>
            {(cheat || gameState == 'Won') && <Button onClick={initialiseGame}>NEW</Button>}
          </Col>
          <Col className={"game-button"} xs={4}>
            {buttons && buttons[0] && buttons[0].button}
          </Col>
          <Col className={"game-button"} xs={4}>
            <Button onClick={resetGame}>RESET</Button>
          </Col>

          <Col className={"game-button"} xs={4} />
          <Col className={"game-button"} xs={4}>
            {buttons && buttons[1] && buttons[1].button}
          </Col>
          <Col className={"game-button"} xs={4}>
            {buttons && buttons[2] && buttons[2].button}
          </Col>

          <Col className={"game-button"} xs={4} />
          <Col className={"game-button"} xs={4}>
            {buttons && buttons[3] && buttons[3].button}
          </Col>
          <Col className={"game-button"} xs={4}>
            {buttons && buttons[4] && buttons[4].button}
          </Col>
        </Row>
      )}
    </GameContext.Consumer>
  );
}
export default Buttons;
