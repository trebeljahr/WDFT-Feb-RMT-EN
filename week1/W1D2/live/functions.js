// functions

// function declaration
function myFunction(input) {
  // function body
  return `Hello ${input}`;
}

console.log(myFunction("Luiz"));
const value = myFunction();
console.log(value);

function multiply(num1, num2, num3) {
  return num1 * num2 * num3;
}

console.log(multiply(3, 5, 10));

function empty() {}
console.log(empty());

function outerFunction() {
  function innerFunction() {
    console.log("Hello World");
    return "Hello world as return value";
  }
  return innerFunction;
}

console.log(outerFunction());
console.log(outerFunction()());

// functions can be used to encapsulate (or abstract) ideas / pieces of code / algorithms
function isABiggerThanB(numA, numB) {
  if (numA > numB) {
    return "Yes";
  }
  return "No";
}

console.log(isABiggerThanB(-10, 5));

// function name() {}

// function expression
const hello2 = function () {
  console.log("Hello");
};
// function expression
const hello = (num1, num2) => num1 * num2;
console.log(hello(2, 3));

// higherOrderFunction()
const array = ["a", "b", "c"];

function logger(element) {
  console.log(element);
}

// array.forEach(logger);
// logger("a")
// logger("b")
// logger("c")

array.forEach((letter) => {
  console.log("Hello this is your", letter);
});

// console.log(logger);

function ourForEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

console.log("========");
ourForEach(array, logger);

console.log("======");
ourForEach(array, (letter, index, wholeArray) => {
  console.log(
    "Hello this is your letter",
    letter,
    "the index is",
    index,
    "the whole array is",
    wholeArray
  );
});

const listOfWords = [
  "hello",
  "world",
  "it's",
  "Harry Potter",
  "rainy",
  "outside",
];

function findLongestWord(list) {
  let longestWord = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].length > longestWord.length) {
      longestWord = list[i];
    }
  }
  return longestWord;
}

const result = findLongestWord(listOfWords);
console.log(result);

function sumUpLengthOfAllWords(words) {
  let totalLength = 0;
  for (let i = 0; i < words.length; i++) {
    totalLength += words[i].length;
  }
  return totalLength;
}

const total = sumUpLengthOfAllWords(listOfWords);
console.log(total);

function averageWordLength(list) {
  return sumUpLengthOfAllWords(list) / list.length;
}

console.log(averageWordLength(listOfWords));

// Math.random(); // -> 0 to 1; 0.555123
const pickRandomWord = (list) => {
  const randomIndex = Math.floor(Math.random() * list.length); // 0 -> list.length
  //   console.log(randomIndex);
  return list[randomIndex];
};

console.log(pickRandomWord(listOfWords));
console.log(pickRandomWord(listOfWords));
console.log(pickRandomWord(listOfWords));
console.log(pickRandomWord(listOfWords));
console.log(pickRandomWord(listOfWords));
console.log(pickRandomWord(listOfWords));
console.log(pickRandomWord(listOfWords));
console.log(pickRandomWord(listOfWords));
