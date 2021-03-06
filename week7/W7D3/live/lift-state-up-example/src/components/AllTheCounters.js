import { useState } from "react";
import { Counter } from "./Counter";
import { createSingleCounterState } from "./utils/createSingleCounterState";

const initialCounters = [
  createSingleCounterState(1, 5),
  createSingleCounterState(0, 100),
  createSingleCounterState(0, 1),
];

export function AllTheCounters() {
  const [states, setStates] = useState(initialCounters);

  const updateSingleCounterFactory = (indexThatWeSearchFor) => (update) => {
    console.log(indexThatWeSearchFor); // => event of button click
    setStates((oldValues) => {
      return oldValues.map((counterState, index) => {
        if (index === indexThatWeSearchFor) {
          // edit the counter
          return {
            ...counterState,
            currentNumber: update,
          };
        }
        // don't want to edit the counter
        return counterState;
      });
    });
  };

  const updateAll = ({ subtract = false } = {}) => {
    setStates((oldValues) => {
      return oldValues.map((counterState) => {
        return {
          ...counterState,
          currentNumber:
            counterState.currentNumber +
            (subtract ? -counterState.increment : counterState.increment),
        };
      });
    });
  };

  const incrementAll = () => updateAll();
  const decrementAll = () => updateAll({ subtract: true });
  //   const updateFunction = updateSingleCounterFactory(1);
  //   updateFunction(10000);

  const addCounter = () => {
    setStates((oldValues) => [...oldValues, createSingleCounterState(0, 1000)]);
  };

  const computesTotal = () => {
    alert(
      "Here is the total:" +
        states.reduce((agg, state) => {
          return agg + state.currentNumber;
        }, 0)
    );
  };

  return (
    <div>
      <button onClick={computesTotal}>Compute Total of All counters!</button>
      <button onClick={addCounter}>Add counter!</button>
      <button onClick={incrementAll}>Increment All!</button>
      <button onClick={decrementAll}>Decrement All!</button>

      {states.map((state, index) => {
        return (
          <Counter
            key={"counter" + index}
            updateSingleCounter={updateSingleCounterFactory(index)}
            number={state.currentNumber}
            updateToDo={state.increment}
            start={state.start}
          />
        );
      })}
    </div>
  );
}
