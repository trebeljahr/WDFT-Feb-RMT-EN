export function Counter({ number, reset, index }) {
  return (
    <div>
      <h1>Counter: {number}</h1>
      {/* <button onClick={incrementNumber}>+{increment}</button>
      <button onClick={decrementNumber}>-{increment}</button> */}
      <button onClick={(event) => reset(index)}>Reset</button>
    </div>
  );
}
