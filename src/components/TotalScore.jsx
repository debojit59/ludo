import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreConrainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreConrainer>
  );
};

export default TotalScore;

const ScoreConrainer = styled.div`
  h1 {
    font-size: 100px;
    display: flex;
    justify-content: center;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 60px;
    }

    p {
      font-size: 18px;
    }
  }
`;
