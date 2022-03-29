import { useState } from "react";

export function NameToggle() {
  const [firstName, setFirstName] = useState("Joshua");

  const handleNameChange = () => {
    console.log("We want to change the name!");
    if (firstName === "Joshua") {
      setFirstName("Vinayak");
    } else {
      setFirstName("Joshua");
    }

    // don't ever do this in React!
    // firstName = "Vinayak";
  };
  // function handleNameChange() {}

  return (
    <>
      <h1>Hello {firstName}</h1>
      <button onClick={() => console.log("Hello")}>
        Click to console.log hello!
      </button>
      <button onClick={handleNameChange}>Click to change username</button>
    </>
  );
}
