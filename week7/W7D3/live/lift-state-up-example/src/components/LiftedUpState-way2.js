import { useState } from "react";

// Representational Component -> they don't have ANY logic
function ShowNumber(props) {
  return <h1>{props.number}</h1>;
}
// Representational Component
function GenericChangeButton({ handleClick, text }) {
  return <button onClick={handleClick}>{text}</button>;
}

export function LiftedUpState2(props) {
  const [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      {props.children}
      <ShowNumber number={number} />
      {/* {A({ number: number })} */}
      <GenericChangeButton handleClick={increment} text="+1" />
      <GenericChangeButton handleClick={decrement} text="-1" />
    </div>
  );
}
