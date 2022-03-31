import "./App.css";
import { Counter } from "./components/Counter";
import { Cryptos } from "./components/crypto";
import { Clock } from "./components/Clock";

function App() {
  return (
    <div className="App">
      <Counter />
      <Clock />
      <Cryptos />
    </div>
  );
}

export default App;
