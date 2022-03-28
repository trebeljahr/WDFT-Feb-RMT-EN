import "./App.css";
import { data } from "./data";

function Character({ character: { name, avatarSrc } }) {
  return (
    <div className="character">
      <div className="characterImg">
        <img
          src={process.env.PUBLIC_URL + "/imgs/" + avatarSrc}
          alt={`${name}`}
        ></img>
      </div>
      <div className="characterName">
        <h2>{name}</h2>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <h1>All Naruto Characters!</h1>
      <div className="characterContainer">
        {data.map((character) => {
          return <Character key={character.name} character={character} />;
        })}
      </div>
    </div>
  );
}

export default App;
