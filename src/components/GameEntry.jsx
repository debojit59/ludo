import React from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import Numbers from "./Numbers";
import RollDice from "./RollDice";
import Rules from "./Rules";
import { useState } from "react";
import { Button, OutlineButton } from "../Styled/Button";

const GameEntry = () => {
  const [selectNumber, SetselectNumber] = useState();
  const [current, setCurrent] = useState(1);
  const [score, setScore] = useState(0);
  const [err, setErr] = useState("");
  const [showRules, SetshowRules] = useState(false);

  const RandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const handleScore = (select, num) => {
    if (!selectNumber) {
      return;
    }
    setErr("");
    if (select === num) {
      setScore((sc) => sc + num);
    } else {
      setScore((sc) => sc - 2);
    }
    SetselectNumber(undefined);
  };

  const handleCurrent = () => {
    if (!selectNumber) {
      setErr("you haven't selected any number");
      return;
    }
    setErr("");
    const diceNum = RandomNumber();
    setCurrent(() => diceNum);
    handleScore(selectNumber, diceNum);
  };

  const handleError = (value) => {
    setErr("");
  };

  return (
    <Whole>
      <MainConainer>
        <TotalScore score={score} />
        <Numbers
          error={err}
          selectNumber={selectNumber}
          SetselectNumber={SetselectNumber}
          handleError={handleError}
        />
      </MainConainer>
      <RollDice
        isSelect={!!selectNumber}
        current={current}
        setCurrent={setCurrent}
        handleCurrent={handleCurrent}
        error={err}
        handleError={handleError}
      />
      <div className="Btn">
        <OutlineButton onClick={() => setScore(0)}>Reset</OutlineButton>
        <Button onClick={() => SetshowRules((rule) => !rule)}>
          {showRules ? "Hide" : "Show"}
        </Button>
      </div>
      {showRules && <Rules />}
    </Whole>
  );
};

export default GameEntry;

const MainConainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
  padding: 0 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    padding: 0 16px;
  }
`;

const Whole = styled.div`
  padding-bottom: 60px;
  text-align: center;

  .Btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    gap: 15px;

    @media (max-width: 768px) {
      padding-top: 50px;
    }

    button {
      width: 180px;
      max-width: 90%;
      font-size: 16px;

      @media (max-width: 480px) {
        width: 150px;
        font-size: 14px;
      }
    }
  }
`;
