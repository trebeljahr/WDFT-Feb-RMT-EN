import "./App.css";
import { Clock } from "./components/Clock";
import { useState } from "react";
import { Counter } from "./components/Counter";

function App() {
  const [showClock, setShowClock] = useState(false);
  // console.log("Hello App function is being re-run");
  return (
    <div className="App">
      <button onClick={() => setShowClock(!showClock)}>
        {showClock ? "Hide" : "Show"} clock
      </button>

      {showClock && <Clock />}
      {Array.from(Array(100))
        .map((_, i) => i + 1)
        .map((num) => (
          <Counter timeForTickInSeconds={num} />
        ))}

      {/* <ThreeStates />
      <SimpleUseEffect /> */}
    </div>
  );
}

export default App;
