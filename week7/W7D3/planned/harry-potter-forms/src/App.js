import { useState } from "react";
import "./App.css";
import { Character } from "./components/Character";
import { characters as defaultCharacters } from "./data/charactersWithImages";

function App() {
  const [characters, setCharacters] = useState(defaultCharacters);
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
  return (
    <div className="App">
      <input value={filter} onChange={handleFilterInput}></input>
      <div className="harry-potter-characters">
        {characters.map(toCharacterComponent)}
      </div>
    </div>
  );
}

export default App;
