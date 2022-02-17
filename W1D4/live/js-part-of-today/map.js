const numbers = [1, 2, 3];

const newNumbers = numbers.map((element) => {
  return element * 2;
});

const multBy2 = (element) => element * 2;
const multiplyBy3 = (element) => element * 3;
const multiplyBy5 = (element) => element * 5;
// const newNumbers = number.map(multiplyBy2).map(multiplyBy5);

const newNumbersButMultipliedBy3 = numbers.map(multiplyBy3);
const multipliedBy6 = numbers.map(multiplyBy3).map(multBy2);
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

// don't do this - shadowing is bad!
// const element = "Mercury";

function ourMap(array, fn) {
  const result = [];
  for (let element of array) {
    const transformedElement = fn(element);
    result.push(transformedElement);
  }

  return result;
}

console.log(ourMap([1, 2, 3], multBy2));

// const ourObject = {
//   sayHello: function () {
//     console.log("Hello");
//   },
// };

// ourObject.sayHello();

const wizards = [
  {
    name: "Harry",
    school: "Hogwarts",
  },
  {
    name: "Hermione",
    school: "Hogwarts",
  },
  { name: "Krum", school: "The Other One" },
];

const names = wizards.map((student) => {
  return student.name;
});

console.log(names);

const schools = wizards.map((person) => person.school);
console.log(schools);

const mixedArray = [1, "hello", undefined];
console.log(mixedArray.map(multBy2));

// activity - last "iteration"
const info = {
  cities: [
    { name: "Mirazur", owner: "Gustavo" },
    { name: "Noma", owner: "Jorge" },
    { name: "Gaggan", owner: "Alvaro" },
    { name: "Geranium", owner: "Gustavo" },
    { name: "Arpège", owner: "Luis" },
  ],
};

const myRestaurants = (arr) => {
  //your code here
  return arr.map((restaurant) => restaurant.name);
};

//
// let restaurants = myRestaurants(info.cities);
let restaurants = info.cities.map((restaurant) => restaurant.name);
console.log(
  restaurants
); /*Answer should be [ 'Mirazur', 'Noma', 'Gaggan', 'Geranium', 'Arpège']*/
