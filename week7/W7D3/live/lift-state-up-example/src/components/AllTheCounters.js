import { useState } from "react";
import { Counter } from "./Counter";

const singleState = {
  currentNumber: 1,
  defaultIncrement: 5,
};
export function AllTheCounters() {
  const [states, setStates] = useState([singleState, singleState, singleState]);

  const resetSingleCounter = (indexThatWeSearchFor) => {
    console.log(indexThatWeSearchFor); // => event of button click
    setStates((oldValues) => {
      return oldValues.map((counterState, index) => {
        if (index === indexThatWeSearchFor) {
          // edit the counter
          return {
            ...counterState,
            currentNumber: 0,
          };
        }
        // don't want to edit the counter
        return counterState;
      });
    });
  };

  return (
    <div>
      {states.map((state, index) => {
        return (
          <Counter
            key={"counter" + index}
            reset={resetSingleCounter}
            index={index}
            number={states[index].currentNumber}
          />
        );
      })}
    </div>
  );
}
