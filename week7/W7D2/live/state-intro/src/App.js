import "./App.css";
import { useState } from "react";
import { NameToggle } from "./components/NameToggle";
import { HarryPotterCharacters } from "./components/HarryPotterCharacters";
import { ConditionalRendering } from "./components/ConditionalRendering";

function App() {
  return (
    <>
      <ConditionalRendering />
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
