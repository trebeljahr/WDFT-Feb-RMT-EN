import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { PageLayout } from "./components/PageLayout";
import { PokemonList, SinglePokemon } from "./components/Pokemon";

function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

function Custom404Page() {
  return (
    <div>
      <h1>404 - Ooops. This route doesn't exist!</h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="*" element={<Custom404Page />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemon">
          <Route index element={<PokemonList />} />
          <Route path=":name" element={<SinglePokemon />} />
        </Route>
      </Route>

      {/* <Route /> */}
    </Routes>
  );
}

export default App;
