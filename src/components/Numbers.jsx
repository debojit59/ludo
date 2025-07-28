import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Number = [1, 2, 3, 4, 5, 6];

const Numbers = ({ handleError, error, selectNumber, SetselectNumber }) => {
  return (
    <ContainerNumber>
      <div>
        {Number.map((value, i) => (
          <Box
            key={i}
            onClick={() => {
              SetselectNumber(value);
              handleError(value);
            }}
            $isSelect={selectNumber === value}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </ContainerNumber>
  );
};

export default Numbers;

const ContainerNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;

  p {
    font-weight: 700;
    font-size: 24px;
    text-align: center;
  }

  div {
    display: flex;
    gap: 24px;
  }

  @media (max-width: 768px) {
    align-items: center;

    p {
      font-size: 18px;
    }

    div {
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  font-size: 24px;
  font-weight: 500;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ $isSelect }) => ($isSelect ? "black" : "white")};
  color: ${({ $isSelect }) => ($isSelect ? "white" : "black")};
  transition: background-color 0.3s ease-in, color 0.3s ease-in;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 16px;
  }
`;
