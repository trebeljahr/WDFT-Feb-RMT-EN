import { useState } from "react";
import "./App.css";
import { Dice } from "./components/Dice";

function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

const timeBetweenRolls = 100;
const numberOfRolls = 30;

function App() {
  const [diceNumber, setDiceNumber] = useState(rollDice());
  const [isRolling, setIsRolling] = useState(false);

  const handleRollAgain = () => {
    if (isRolling) return;
    setIsRolling(true);
    const interval = setInterval(() => {
      setDiceNumber(rollDice);
    }, timeBetweenRolls);

    setTimeout(() => {
      clearInterval(interval);
      setIsRolling(false);
    }, timeBetweenRolls * numberOfRolls);
  };

  return (
    <div className="App">
      <h1>{isRolling ? "Is rolling..." : "Result: "}</h1>
      <Dice number={diceNumber} />
      <button onClick={handleRollAgain}>Roll Again</button>
    </div>
  );
}

export default App;
