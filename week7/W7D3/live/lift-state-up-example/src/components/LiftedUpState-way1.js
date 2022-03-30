import { useState } from "react";

function A() {
  const [number, setNumber] = useState(0);
  const changeNumber = () => {
    setNumber(number + 1);
  };
  return (
    <h1>
      {number} <B changeNumber={changeNumber} />
    </h1>
  );
}

function B({ changeNumber }) {
  return <button onClick={changeNumber}>Click to change number!</button>;
}

export function LiftedUpState1() {
  return (
    <div>
      <A />
    </div>
  );
}
