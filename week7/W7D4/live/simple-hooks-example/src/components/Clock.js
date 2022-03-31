import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState(new Date());

  // wrong way!!!! it will do weird things
  //   setInterval(() => {
  //     // console.log("Hello");
  //     setTime(new Date());
  //   }, 1000);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("Hello");
      setTime(new Date());
    }, 1000);

    const returnedFunction = () => {
      console.log("Hello clearInterval is run!");
      clearInterval(id);
    };
    return returnedFunction;
  }, []);

  return (
    <div>
      <h1>{time.toISOString()}</h1>
    </div>
  );
}
