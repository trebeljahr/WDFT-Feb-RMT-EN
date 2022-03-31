import { useEffect, useState } from "react";

export function ThreeStates() {
  const [stateA, setStateA] = useState("");
  const [stateB, setStateB] = useState("");
  const [lastEdited, setLastEdited] = useState("");

  useEffect(() => {
    setLastEdited(stateA);
    console.log("hello");
    // don't do!!!
    // setStateA("something else" + Math.random());
  }, [stateA]);

  useEffect(() => {
    setLastEdited(stateB);
  }, [stateB]);

  return (
    <>
      <h1>{lastEdited}</h1>
      <input
        type="text"
        value={stateA}
        onChange={(event) => setStateA(event.target.value)}
      />
      <input
        type="text"
        value={stateB}
        onChange={(event) => setStateB(event.target.value)}
      />
    </>
  );
}
