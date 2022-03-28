export function Pokemon(props) {
  // let props = ????

  console.log("props passed to the component", props);
  return (
    <div>
      <h2>{props.pokemonName}</h2>
      {props.children}
    </div>
  );
}

// Pokemon({
//   pokemonName: "Pikachu",
//   type: "electro",
//   moves: ["thunderbolt", "paralysis"],
// });
