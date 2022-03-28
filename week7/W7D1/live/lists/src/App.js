import "./App.css";
import { nanoid } from "nanoid";

const names = [
  "Joshua",
  "Vinayak",
  "Charlie",
  "Renato",
  "Ada",
  "Patricia",
  "Jasmin",
];

function NameDisplay({ name }) {
  return (
    <li>
      <h1>{name}</h1>
    </li>
  );
}
function App() {
  return (
    <div>
      <ul>
        {names.map((name) => (
          <NameDisplay key={name + nanoid()} name={name} />
        ))}
      </ul>
    </div>
  );
}

export default App;
