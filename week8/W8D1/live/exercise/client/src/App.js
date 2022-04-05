import "./App.css";
import { useEffect, useState } from "react";

const baseAPIUrl =
  process.env.NODE_ENV === "production"
    ? "https://poke-app-fullstack.herokuapp.com"
    : "http://localhost:5005";

function App() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    console.log(process.env.NODE_ENV);
    console.log(baseAPIUrl);

    async function fetchPokemon() {
      const response = await fetch(`${baseAPIUrl}/api/pokemon`);
      const data = await response.json();
      console.log(data);
      if (data.pokemon) {
        setPokemon(data.pokemon);
      }
    }
    fetchPokemon();
  }, []);

  return (
    <div>
      {pokemon ? (
        <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprite} alt={pokemon.name} width={300} />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default App;
