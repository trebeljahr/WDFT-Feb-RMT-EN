import "./App.css";
import { NameToggle } from "./components/NameToggle";
import { HarryPotterCharacters } from "./components/HarryPotterCharacters";
// import { ConditionalRendering } from "./components/ConditionalRendering";
import { Counter } from "./components/Counter";

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
