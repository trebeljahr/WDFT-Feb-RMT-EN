import { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const base = "https://pokeapi.co/api/v2/pokemon";
export function SinglePokemon() {
  const params = useParams();
  const [pokeImage, setPokeImage] = useState();
  console.log(params);

  useEffect(() => {
    async function fetchPokeInfo() {
      const url = `${base}/${params.name}`;
      console.log("url:", url);
      const res = await fetch(url);
      const data = await res.json();
      console.log("data:", data);
      console.log(
        "image-url:",
        data.sprites.other["official-artwork"].front_default
      );
      setPokeImage(data.sprites.other["official-artwork"].front_default);
    }
    fetchPokeInfo();
  }, [params]);
  return (
    <div>
      <h1>{params.name}</h1>
      <img src={pokeImage} alt={params.name}></img>
    </div>
  );
}
export function PokemonList() {
  const location = useLocation();
  console.log("Location:", location);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const url = base + "?limit=2000";
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setPokemons(data.results);
    }

    fetchPokemon();
  }, []);
  return (
    <div>
      <h1>Pokemon</h1>
      {pokemons.map(({ name }) => {
        return (
          <div key={name}>
            <h1>
              <Link to={name}> {name}</Link>
            </h1>
          </div>
        );
      })}
    </div>
  );
}
