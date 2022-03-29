import { useState } from "react";

export function ConditionalRendering() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    console.log("isOn?", isOn);
    setIsOn(!isOn);
  };

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={handleClick}>Toggle!</button>
    </>
  );
}
