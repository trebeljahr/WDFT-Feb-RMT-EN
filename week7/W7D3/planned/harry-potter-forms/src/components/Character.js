import { useState } from "react";

export function Character({ character, changeCharacter }) {
  const [editMode, setEditMode] = useState(false);
  const [characterForm, setCharacterForm] = useState(character);
  const toggleEditMode = () => {
    setEditMode(!editMode);
    changeCharacter(characterForm);
  };

  const handleFormUpdateForField = (fieldName) => (event) => {
    console.log("Hello");
    const newState = { ...characterForm, [fieldName]: event.target.value };
    console.log(newState);
    setCharacterForm(newState);
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
            <button onClick={toggleEditMode}>
              {editMode ? "Save" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
