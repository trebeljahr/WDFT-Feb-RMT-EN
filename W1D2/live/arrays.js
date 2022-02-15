const ourArray = [
  1,
  2,
  3,
  "hello",
  undefined,
  null,
  [],
  { key1: "Hello" },
  false,
  () => {
    console.log("Hello");
  },
];

console.log(ourArray[0]);

const copy = ourArray;
copy[0] = "Something else";
console.log(copy[0]);
console.log(ourArray[0]);

const number = 8;
let copyOfnumber = number;
copyOfnumber = 1;
console.log(number);
console.log(copyOfnumber);

const numbersArray = [1, 2, 3];
let numbersArrayCopy = numbersArray;
numbersArrayCopy = 1;
console.log(numbersArray);

console.log(...numbersArray);

// shallow copy
const copyWithSpread = [...numbersArray];

// deep cloning an array / deep copying an array
// lodash

const arrayToCopy = ["a", "b", "c"];
console.log(JSON.stringify(arrayToCopy));
console.log(typeof JSON.stringify(arrayToCopy));

// cheap way to do deep copies
const deepCopy = JSON.parse(JSON.stringify(arrayToCopy));
console.log(deepCopy);
deepCopy[0] = "z";
console.log(deepCopy);
console.log(arrayToCopy);
// functions, Maps, Sets

// "[ 1, 2, 3, 'string', '3' ]"

const ticTacToeBoard = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["o", "o", "x"],
];

const copyForHistory = [...ticTacToeBoard];
console.log(copyForHistory[0][0]);

ticTacToeBoard[0][0] = "o";

ticTacToeBoard[2] = "hello";
console.log(copyForHistory[0][0]);

console.log(copyForHistory[2]);

const deepCopyForTicTacToeBoard = JSON.parse(JSON.stringify(ticTacToeBoard));
ticTacToeBoard[0][1] = "x";
console.log(deepCopyForTicTacToeBoard[0][1]);

console.table(ticTacToeBoard);
console.table(deepCopyForTicTacToeBoard);

// arrays have methods
const names = ["Andre", "Luiz", "Lysann"];

names.forEach((name) => {
  console.log(name);
});

const result = names.splice(0, 2);
console.log(result);
console.log(names);

const lastName = names.pop();
console.log(lastName);
console.log(names);

console.log(names.pop());
console.log(names);

names.push("Charlie");
names.push("Ioannis");
names.push("Ada");
names.push("Renato");
names.push("Patricia");

console.log(names);

names.unshift("Joseph");
console.log(names);

names.shift();
console.log("Original before", names);

// slice is non mutating
const result2 = names.slice(1, 3);
console.log(result2);
console.log("Original after: ", names);

console.log(names.indexOf("Rico"));
console.log(names.indexOf("Ioannis"));
console.log(names[names.indexOf("Ioannis")]);

console.log(names.includes("Rico"));
console.log(names.includes("Charlie"));

console.log(["a"] === ["a"]);

const nestedNames = ["Charlie", "Joshua", ["Rowena"]];

console.log(nestedNames.indexOf(["Rowena"]));

const elementToSearchFor = ["Rowena"];
for (let i = 0; i < nestedNames.length; i++) {
  const currentNameForIteration = nestedNames[i];
  console.log(currentNameForIteration);
  if (elementToSearchFor === currentNameForIteration) {
    console.log("We found it it's at index", i);
    break;
  }
}

console.log("Renato".includes("E"));
