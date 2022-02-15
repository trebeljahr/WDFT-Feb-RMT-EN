const condition = false;
if (condition) {
  // ....
  console.log("Hello World");
  // you can have nested if blocks as well.
  //   if () {
  //       if () {

  //       }
  //   }
} else if (10 % 2 === 0) {
  console.log("Hello from Else Block");
}

const wizard = "Severus Snape";
switch (wizard) {
  // break;
  case "Albus":
  case "Albus Dumbledore":
    console.log("Hello Albus");
    break;

  case "Harry":
    console.log("Hello Harry");
    break;
  default:
    console.log("Hello unknown wizard");
    break;
}

const conditionForTernary = true;
const value = conditionForTernary
  ? "Outcome if condition is true"
  : "Outcome if the condition is false";

console.log(value);

const condition1 = true;
const condition2 = true;
const nestedTernary = condition1
  ? "someoutcome"
  : condition2
  ? "some other outcome"
  : "yet another outcome";

// if (condition1) {
//  ("someoutcome");
// } else if (condition2) {
//   ("some other outcome");
// } else {
//   ("yet another outcome");
// }

console.log(nestedTernary);

const numberShouldBe1 = true;

let myValue;
if (numberShouldBe1) {
  myValue = 1;
} else {
  myValue = 2;
}

const myValue2 = 10 > 5 ? 1 : 2;

const myName = "Rico";
const language = "en";
const greeting =
  language === "en" ? "Hello" : language === "sp" ? "Hola" : "I don't know";
console.log(greeting + " " + myName);
