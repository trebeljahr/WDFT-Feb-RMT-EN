// import logo from "./logo.svg";
// const logo = require("./logo.svg");

import mountain from "./mountain.jpg";
import "./App.css";
import { FirstComponent, SecondComponent } from "./Component";
import Pizza from "./Component";
// import { FirstComponent } from './Component';
function App() {
  const name = "Joshua";
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ textDecoration: "underline" }} className="greeting">
          Hello there {name}!
        </h1>
        <FirstComponent />
        <SecondComponent />
        <Pizza />
        <img
          src="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
          alt="mountain"
        />
        <img src={mountain} width={300} alt="another mountain" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
