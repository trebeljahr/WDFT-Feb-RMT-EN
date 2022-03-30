import "./App.css";
import { ConditionalRendering } from "./components/ConditionalRendering";
import { Counter } from "./components/Counter";

function App() {
  return (
    <>
      <ConditionalRendering />

      <Counter increment={5} />
      <Counter defaultValue={100} />
      <Counter defaultValue={1000} increment={100} />
    </>
  );
}

export default App;
