function helloWorld() {
  innerFunction();
  function innerFunction() {
    console.log("Hello from inside");
  }
  //   arrowFunction();
  //   const arrowFunction = () => {
  //     console.log("Hello from inside arrow");
  //   };
  return "Hello World";
}
var aVarThatWeHaveNotDefinedYet;

// hoisting means the interpreter reformats code and puts var names on the top of the file

// console.log(variableWeHaveNotDefinedYet);
// const variableWeHaveNotDefinedYet = "hello";
// let variableWeHaveNotDefinedYet = "hello";

console.log(aVarThatWeHaveNotDefinedYet);
aVarThatWeHaveNotDefinedYet = "hello";
console.log(aVarThatWeHaveNotDefinedYet);

console.log(helloWorld());

callAPizza();

// function expression -> not hoisted
// const callAPizza = function () {
//   console.log("Pizza please");
// };
// const arrowFunction = () => {
// console.log("Pizza please")
// }

// function declaration -> are hoisted
function callAPizza() {
  console.log("Pizza please");
}
