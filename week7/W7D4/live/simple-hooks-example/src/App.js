import "./App.css";
import { Clock } from "./components/Clock";
import { useState } from "react";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";

function App() {
  const [showClock, setShowClock] = useState(false);
  // console.log("Hello App function is being re-run");
  return (
    <div className="App">
      <FetchData />

      <button onClick={() => setShowClock(!showClock)}>
        {showClock ? "Hide" : "Show"} clock
      </button>

      {showClock && <Clock />}
      {Array.from(Array(5))
        .map((_, i) => i + 1)
        .map((num) => (
          <Counter key={num} timeForTickInSeconds={num} />
        ))}

      {/* <ThreeStates />
      <SimpleUseEffect /> */}
    </div>
  );
}

export default App;
