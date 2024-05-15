import React, { useState } from "react";
import ButtonComponent from "../button/button";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null); // Store interval ID

  const startTimer = () => {
    setIsRunning(true);
    const id = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    setIntervalId(id); // Store interval ID
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalId); // Clear interval using stored ID
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalId);
    setSeconds(0);
  };

  return (
    <>
      <h3>Timer</h3>
      <h3>{seconds}</h3>
      <ButtonComponent onClick={startTimer} disabled={isRunning}>
        Start
      </ButtonComponent>
      <ButtonComponent onClick={stopTimer} disabled={!isRunning}>
        Stop
      </ButtonComponent>
      <ButtonComponent onClick={resetTimer}>Reset</ButtonComponent>
    </>
  );
};

export default Timer;
