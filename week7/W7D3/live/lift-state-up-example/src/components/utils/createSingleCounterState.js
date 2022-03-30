export function createSingleCounterState(start, increment) {
  return {
    start,
    currentNumber: start,
    increment,
  };
}
