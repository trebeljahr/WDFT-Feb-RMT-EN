import { useState } from "react";
import "./App.css";
import { Character } from "./components/Character";
import { characters as defaultCharacters } from "./data/charactersWithImages";

function App() {
  const [characters, setCharacters] = useState(defaultCharacters);
  const [filter, setFilter] = useState("");

  const changeCharacter = (index) => (update) => {
    const updatedCharacters = characters.map((character, current) => {
      if (index === current) {
        return { ...character, ...update };
      }
      return character;
    });
    setCharacters(updatedCharacters);
  };

  const toCharacterComponent = (character, index) => {
    return (
      <Character
        key={character.name}
        character={character}
        changeCharacter={changeCharacter(index)}
      />
    );
  };

  const handleFilterUpdate = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="App">
      Search: <input value={filter} onChange={handleFilterUpdate} />
      <div className="harry-potter-characters">
        {filter === ""
          ? characters.map(toCharacterComponent)
          : characters
              .filter((character) => {
                const lowerFilter = filter.toLowerCase();
                return (
                  character.name.toLowerCase().includes(lowerFilter) ||
                  character.house.toLowerCase().includes(lowerFilter) ||
                  character.patronus.toLowerCase().includes(lowerFilter)
                );
              })
              .map(toCharacterComponent)}
      </div>
    </div>
  );
}

export default App;
