import React from "react";
import styled from "styled-components";
import { Button } from "../Styled/Button";

const GameStart = ({ Toogle }) => {
  return (
    <Container>
      <div>
        <StyledImg src="dices.png" alt="Dice-Image" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={Toogle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default GameStart;

// Styled-components
const Container = styled.div`
  max-width: 1180px;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 20px;
  gap: 40px;

  .content h1 {
    font-size: 96px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 48px;
    }

    @media (max-width: 480px) {
      font-size: 36px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (max-width: 768px) {
      align-items: center;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 24px;
  }
`;

const StyledImg = styled.img`
  width: 300px;
  height: auto;

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 160px;
  }
`;
