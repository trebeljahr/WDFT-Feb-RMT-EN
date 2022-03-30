import { useState } from "react";
import { Counter } from "./Counter";
import { createSingleCounterState } from "./utils/createSingleCounterState";

export function AllTheCountersButAsObjects() {
  const [states, setStates] = useState({
    a: createSingleCounterState(0, 10),
    b: createSingleCounterState(10, 50),
    // b: createSingleCounterState(10, 50),
  });

  const updateSingleCounterFactory = (key) => (update) => {
    setStates((oldStates) => {
      return {
        ...oldStates,
        [key]: { ...oldStates[key], currentNumber: update },
      };
    });
  };

  return (
    <div>
      {Object.keys(states).map((key) => {
        return (
          <Counter
            key={key}
            updateSingleCounter={updateSingleCounterFactory(key)}
            number={states[key].currentNumber}
            updateToDo={states[key].increment}
            start={states[key].start}
          />
        );
      })}
    </div>
  );
}
