import { useState } from "react";

export function Form() {
  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    setInput(event.target.value);
  };

  //   const handleClick = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Here is the input: " + input);
  };

  return (
    <form onSubmit={handleSubmit}>
      This is our first input:
      <input value={input} onChange={changeHandler} />
      <button>Click me!</button>
    </form>
  );
}
