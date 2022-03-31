import { useEffect, useState } from "react";

export function Counter({ timeForTickInSeconds = 1 }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter((oldCounter) => oldCounter + 1);
    }, 1000 * timeForTickInSeconds);
    return () => {
      clearInterval(id);
    };
  }, [timeForTickInSeconds]);

  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
}
