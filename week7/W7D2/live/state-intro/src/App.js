import "./App.css";
import { NameToggle } from "./components/NameToggle";
import { HarryPotterCharacters } from "./components/HarryPotterCharacters";
import { useState } from "react";
// import { ConditionalRendering } from "./components/ConditionalRendering";

function Counter({ defaultValue = 0, increment = 1 }) {
  const [number, setNumber] = useState(defaultValue);
  const incrementNumber = () => {
    // number++
    // number = number + 1;
    // number += 1;
    // console.log(number++);
    console.log("number before update", number);
    const update = number + increment; // ++number // number++
    console.log("number:", number);
    console.log("update:", update);
    setNumber(update);
  };

  const decrementNumber = () => {
    setNumber(number - increment);
  };

  const reset = () => {
    setNumber(defaultValue);
  };

  return (
    <div>
      <h1>Counter: {number}</h1>
      <button onClick={incrementNumber}>+{increment}</button>
      <button onClick={decrementNumber}>-{increment}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function App() {
  return (
    <>
      <Counter increment={5} />
      <Counter defaultValue={100} />
      <Counter defaultValue={1000} increment={100} />

      {/* <ConditionalRendering /> */}
      <NameToggle />
      <HarryPotterCharacters />

      {/* <HarryPotterCharacters /> */}
      {/* <HarryPotterCharacters /> */}

      {/* we could have multiple components each maintaining their own state. */}
      {/* <NameToggle />
      <NameToggle />
      <NameToggle /> */}
    </>
  );
}

export default App;
