// import logo from "./logo.svg";
// const logo = require("./logo.svg");

import mountain from "./mountain.jpg";
import "./App.css";
import { FirstComponent, SecondComponent } from "./components/Component";
import Pizza from "./components/Component";
import { Greeting } from "./components/Greeting";
import { DestructuredProps } from "./components/DestructuredProps";
import { Pokemon } from "./components/Pokemon";
// import { FirstComponent } from './Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Vinayak" message="Hello" color="rgb(100, 20, 30)" />
        <Greeting name="Joshua" message="Howdy" color="yellow" />
        <Greeting name="Julie" message="Something French :)" />
        <DestructuredProps currentName="Rico" backgroundColor="black" />
        <Pokemon
          pokemonName="Charmander"
          type="electro"
          moves={["thunderbolt", "paralysis"]}
        >
          <div>
            <h1>Hello there from "inside" Pokemon component</h1>
          </div>
          <h2>Second Child</h2>
          <FirstComponent />
        </Pokemon>

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
