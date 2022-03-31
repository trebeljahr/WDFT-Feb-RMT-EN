import { useEffect, useState } from "react";
import "./App.css";
import { characters as defaultCharacters } from "./data/charactersWithImages";

function Character({ character, changeCharacter }) {
  const [editMode, setEditMode] = useState(false);
  const [characterForm, setCharacterForm] = useState(character);
  const toggleEditMode = () => {
    setEditMode(!editMode);
    changeCharacter(characterForm);
    setLastUpdatedTime(Date.now());
  };
  const [lastUpdatedTime, setLastUpdatedTime] = useState(Date.now());
  const [timePassed, setTimePassed] = useState(Date.now() - lastUpdatedTime);

  const handleFormUpdateForField = (fieldName) => (event) => {
    console.log("Hello");
    const newState = { ...characterForm, [fieldName]: event.target.value };
    console.log(newState);
    setCharacterForm(newState);
    setLastUpdatedTime(Date.now());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimePassed(Date.now() - lastUpdatedTime);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [lastUpdatedTime]);

  useEffect(() => {
    setTimePassed(Date.now() - lastUpdatedTime);
  }, [lastUpdatedTime]);

  const niceTimeString = () => {
    const timeInMinutes = Math.floor(timePassed / 1000 / 60);
    if (timeInMinutes <= 0) {
      return "just now";
    }

    return ` ${timeInMinutes} ${timeInMinutes > 1 ? "mins" : "min"} ago`;
  };

  return (
    <div className="card harryPotterCard">
      <div className="row g-0 cardRow">
        <div className="col-4">
          <img
            src={character.image}
            className="characterImage rounded-start"
            alt={character.name}
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            {editMode ? (
              <>
                <h5 className="card-title">
                  Name:{" "}
                  <input
                    value={characterForm.name}
                    onChange={handleFormUpdateForField("name")}
                  />
                </h5>
                <p className="card-text">
                  House:{" "}
                  <input
                    value={characterForm.house}
                    onChange={handleFormUpdateForField("house")}
                  />
                </p>
                <p className="card-text">
                  Patronus:{" "}
                  <input
                    value={characterForm.patronus}
                    onChange={handleFormUpdateForField("patronus")}
                  />
                </p>
                <p className="card-text">
                  Actor:{" "}
                  <input
                    value={characterForm.actor}
                    onChange={handleFormUpdateForField("actor")}
                  />
                </p>
                <p className="card-text">
                  Gender:{" "}
                  <input
                    value={characterForm.gender}
                    onChange={handleFormUpdateForField("gender")}
                  />
                </p>
                <p className="card-text">
                  Ancestry:{" "}
                  <input
                    value={characterForm.ancestry}
                    onChange={handleFormUpdateForField("ancestry")}
                  />
                </p>
              </>
            ) : (
              <>
                <h5 className="card-title"> Name: {character.name}</h5>
                <p className="card-text">House: {character.house}</p>
                <p className="card-text">Patronus: {character.patronus}</p>
                <p className="card-text">Actor: {character.actor}</p>
                <p className="card-text">Gender: {character.gender}</p>
                <p className="card-text">Ancestry: {character.ancestry}</p>
              </>
            )}
            <p className="card-text">
              <small className="text-muted">
                Last updated {niceTimeString()}
              </small>
            </p>
            <button onClick={toggleEditMode}>
              {editMode ? "Save" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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

  return (
    <div className="App">
      <div className="harry-potter-characters">
        {characters.map((character, index) => {
          return (
            <Character
              key={character.name}
              character={character}
              changeCharacter={changeCharacter(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
