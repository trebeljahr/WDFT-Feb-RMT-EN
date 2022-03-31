import "./App.css";
import { Clock } from "./components/Clock";
import { SimpleUseEffect } from "./components/SimpleUseEffect";
import { ThreeStates } from "./components/ThreeStates";
import { useState } from "react";

function App() {
  const [showClock, setShowClock] = useState(false);
  // console.log("Hello App function is being re-run");
  return (
    <div className="App">
      <button onClick={() => setShowClock(!showClock)}>
        {showClock ? "Hide" : "Show"} clock
      </button>
      {showClock && <Clock />}
      {/* <ThreeStates />
      <SimpleUseEffect /> */}
    </div>
  );
}

export default App;
