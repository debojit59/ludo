import React from "react";
import styled, { keyframes } from "styled-components";

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
        <StyledImg
          src={`/Dice/dice_${current}.png`}
          alt="diceImage"
          onClick={handleCurrent}
          $isSelect={isSelect}
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

// Animation keyframes
const roll = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled components
const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  p {
    font-size: 24px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 32px;
  }
`;

const StyledImg = styled.img`
  width: 180px;
  height: auto;
  cursor: ${({ $isSelect }) => ($isSelect ? "pointer" : "not-allowed")};
  transition: transform 0.5s ease-in-out;
  &:active {
    animation: ${roll} 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
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
    animation: ${fadeIn} 0.4s ease-in-out;
  }
`;
