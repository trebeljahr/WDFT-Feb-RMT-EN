import { useEffect, useState } from "react";

export function SimpleUseEffect() {
  const [state, setState] = useState(false);
  const [anotherState, setAnotherState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  const handleClick2 = () => {
    setAnotherState(!anotherState);
  };

  useEffect(() => {
    console.log("Hello");
  }, []);

  useEffect(() => {
    if (state) {
      console.log("Hello state is currently true");
    }
    console.log("1. Hello the state variable changed");
  }, [state]);

  useEffect(() => {
    console.log("2. Hello the anotherState variable changed");
  }, [anotherState]);

  useEffect(() => {
    console.log("3. Either one changed");
  }, [anotherState, state]);

  return (
    <>
      <div>
        {state ? "Hello" : "Bye"}
        <button onClick={handleClick}>Click me!</button>
      </div>

      <div>
        {anotherState ? "Joshua" : "Vinayak"}
        <button onClick={handleClick2}>Click me!</button>
      </div>
    </>
  );
}
