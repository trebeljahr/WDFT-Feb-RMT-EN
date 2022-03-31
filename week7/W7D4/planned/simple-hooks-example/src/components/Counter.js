import { useEffect, useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  const createUpdater = (update) => () => {
    setCounter((oldCounter) => oldCounter + update);
  };

  const decrement = createUpdater(-1);
  const increment = createUpdater(+1);

  useEffect(() => {
    console.log("Hello there!");
  }, [counter]);

  return (
    <div className="counter">
      <h1>
        <button onClick={decrement}>-</button>
        <span>Counter: {counter}</span>
        <button onClick={increment}>+</button>
      </h1>
    </div>
  );
}
