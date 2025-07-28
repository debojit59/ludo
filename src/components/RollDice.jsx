import React from "react";
import styled from "styled-components";
import { useState } from "react";

const RollDice = ({
  handleError,
  error,
  current,
  setCurrent,
  handleCurrent,
  isSelect,
}) => {
  return (
    <DiceContainer $isSelect={isSelect}>
      <div>
        <img
          src={`/Dice/dice_${current}.png`}
          alt="diceImage"
          onClick={handleCurrent}
        />
      </div>
      <p>Click on Dice to roll</p>
      {error && (
        <Warning>
          <p>{error}</p>
        </Warning>
      )}
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  p {
    font-size: 24px;
    font-weight: 500;
  }
  img {
    animation: roll 0.5s ease-in-out;
    cursor: ${({ $isSelect }) => ($isSelect ? "pointer" : "not-allowed")};
  }
  @media (max-width: 768px) {
    margin-top: 32px;
  }
  img:active {
    animation: roll 0.5s ease-in-out;
  }
`;
const Warning = styled.div`
  p {
    background-color: #ffe0e0;
    border: 1px solid #ff4d4f;
    padding: 10px 16px;
    border-radius: 8px;
    margin-top: 16px;
    max-width: 300px;
    text-align: center;
    animation: fadeIn 0.4s ease-in-out;
  }
`;
