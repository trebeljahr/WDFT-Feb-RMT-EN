import { useState } from "react";
import { characterList as defaultWizards } from "./characterList";
import { nanoid } from "nanoid";

function CharacterComponent({ singleCharacter: { name, src } }) {
  return (
    <div className="single-character">
      <h1>{name}</h1>
      <img src={process.env.PUBLIC_URL + src} alt="harry potter" width={300} />
    </div>
  );
}

// const defaultWizards = [
//   {
//     name: "Harry Potter",
//     src: "https://static.kino.de/wp-content/uploads/2017/08/harry-potter-Artikelbild-rcm480x0u.jpg",
//   },
// ];

export function HarryPotterCharacters() {
  const [characters, setCharacters] = useState(
    defaultWizards.map((character) => {
      return {
        ...character,
        id: nanoid(),
      };
    })
  );

  const deleteCharacter = (characterToFind) => {
    setCharacters((oldCharacters) => {
      return oldCharacters.filter(
        (character) => character.id !== characterToFind.id
      );
    });
  };

  const addCharacter = () => {
    setCharacters((oldCharacters) => {
      const randomIndex = Math.floor(Math.random() * defaultWizards.length);
      return [defaultWizards[randomIndex], ...oldCharacters];
    });
  };

  return (
    <div>
      <h1>A new list:</h1>
      <button onClick={addCharacter}>Add a random character!</button>
      {characters.map((character) => (
        <div key={character.id}>
          <CharacterComponent singleCharacter={character} />
          <button onClick={() => deleteCharacter(character)}>
            Delete this character!
          </button>
        </div>
      ))}
    </div>
  );
}
