export function Counter({
  number,
  updateSingleCounter: setNumber,
  updateToDo,
  start,
}) {
  const reset = (event) => setNumber(start);
  const increment = (event) => setNumber(number + updateToDo);
  const decrement = (event) => setNumber(number - updateToDo);

  return (
    <div>
      <h1>Counter: {number}</h1>
      <button onClick={increment}>+{updateToDo}</button>
      <button onClick={decrement}>-{updateToDo}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
