import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch("http://localhost:5005/api/pokemon");
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
