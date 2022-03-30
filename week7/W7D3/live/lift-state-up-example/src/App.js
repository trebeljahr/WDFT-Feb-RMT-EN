import { useState } from "react";
import "./App.css";
import { AllTheCounters } from "./components/AllTheCounters";
import { AllTheCountersButAsObjects } from "./components/AllTheCountersButAsObjects";
import { ConditionalRendering } from "./components/ConditionalRendering";
import { Counter } from "./components/Counter";
import { LiftedUpState2 } from "./components/LiftedUpState-way2";
// import { LiftedUpState1 } from "./components/LiftedUpState-way1";

function App() {
  return (
    <>
      {/* <LiftedUpState1 /> */}
      {/* <LiftedUpState2>
        <div>This is a child of the LiftedUpState</div>
      </LiftedUpState2> */}
      <AllTheCountersButAsObjects />
      {/* <AllTheCounters /> */}
      {/* <ConditionalRendering />

      <Counter increment={5} />
      <Counter defaultValue={100} />
      <Counter defaultValue={1000} increment={100} /> */}
    </>
  );
}

export default App;
