import React from "react";
import styled from "styled-components";
import { Button } from "../Styled/Button";

const GameStart = ({ Toogle }) => {
  return (
    <Container>
      <div>
        <img src="dices.png" alt="Dice-Image" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={Toogle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default GameStart;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  height: 100vh;
  align-items: center;
  margin: 0 auto;
  .content h1 {
    font-size: 96px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;
