const numbers = [1, 2, 3];

const newNumbers = numbers.map((element) => {
  return element * 2;
});

const multiplyBy2 = (element) => element * 2;
const multiplyBy3 = (element) => element * 3;
const multiplyBy5 = (element) => element * 5;
// const newNumbers = number.map(multiplyBy2).map(multiplyBy5);

const newNumbersButMultipliedBy3 = numbers.map(multiplyBy3);
const multipliedBy6 = numbers.map(multiplyBy3).map(multiplyBy2);
console.log(multipliedBy6);

const newNumbersWithForLoop = [];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  newNumbersWithForLoop.push(element * 2 * 5);
}
console.log(newNumbersWithForLoop);

const newNumbersWithForOfLoop = [];
for (let element of numbers) {
  newNumbersWithForLoop.push(element * 2);
}
console.log(newNumbersWithForLoop);

console.log(newNumbers);
// (element) => element * 2;
// (element) => {
//   return element * 2;
// };
console.log(numbers.map);

console.log(
  numbers.forEach((element) => {
    return element * 2;
  })
);

console.log(numbers);
// numbers.map(function () {});

// function multiply() {
//      return num1 * num2;
// }
//
// numbers.map(multiply);

function ourMap(array, func) {
  const result = [];
  for (let element of array) {
    const transformedElement = func(element);
    result.push(transformedElement);
  }

  return result;
}

console.log(ourMap([1, 2, 3], (element) => element * 2));

// const ourObject = {
//   sayHello: function () {
//     console.log("Hello");
//   },
// };

// ourObject.sayHello();
