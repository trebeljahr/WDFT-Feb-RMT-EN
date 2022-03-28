import "./App.css";
import { useState } from "react";
import logo from "./logo.svg";

function ReactLogo({ degrees = false }) {
  return (
    <img
      className="App-logo"
      style={{ filter: degrees ? `hue-rotate(${degrees}deg)` : "none" }}
      src={logo}
      alt="react logo"
    />
  );
}

function ComponentA({ toggle }) {
  return <button onClick={toggle}>Show image!</button>;
}

function ComponentB({ toggle }) {
  return (
    <>
      <button onClick={toggle}>Hide image!</button>
      <ReactLogo />
    </>
  );
}

function Toggle() {
  const [selected, setSelected] = useState(false);
  const toggle = () => {
    setSelected(!selected);
  };
  console.log("Hello from Toggle!");
  console.log(selected);
  return (
    <div className="flex">
      <h1>Toggle!</h1>
      {selected ? (
        <ComponentA toggle={toggle} />
      ) : (
        <ComponentB toggle={toggle} />
      )}
    </div>
  );
}

function ToggleButDifferent({ degrees }) {
  const [selected, setSelected] = useState(false);
  const toggle = () => {
    setSelected(!selected);
  };
  return (
    <div className="flex">
      {/* show how to comment! */}
      <h1>Different Toggle!</h1>
      <button onClick={toggle}>{selected ? "Hide Image" : "Show Image"}</button>
      {selected ? <ReactLogo degrees={degrees} /> : null}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Toggle />
      <ToggleButDifferent degrees={270} />
      <ToggleButDifferent degrees={90} />
    </div>
  );
}

export default App;
