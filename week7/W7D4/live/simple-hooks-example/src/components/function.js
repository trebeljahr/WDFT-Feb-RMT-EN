const myFunction = () => {
  const thisFunction = () => {
    console.log("Hello");
  };
  return thisFunction;
};

const returnValueOfMyFunction = myFunction();
console.log(returnValueOfMyFunction);

setTimeout(returnValueOfMyFunction, 5000);
