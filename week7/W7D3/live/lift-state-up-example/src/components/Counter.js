import { useState } from "react";

export function Counter({ defaultValue = 0, increment = 1 }) {
  const [number, setNumber] = useState(defaultValue);
  const incrementNumber = () => {
    setNumber(number + increment);
  };

  const decrementNumber = () => {
    setNumber(number - increment);
  };

  const reset = () => {
    setNumber(defaultValue);
  };

  return (
    <div>
      <h1 className={number >= defaultValue ? "on" : "off"}>
        Counter: {number}
      </h1>
      <button onClick={incrementNumber}>+{increment}</button>
      <button onClick={decrementNumber}>-{increment}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
