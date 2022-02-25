const numbers = [1, 20, 30, 10000, 4];

// this tries to sort it like strings
// console.log(numbers.sort());

console.log(
  // sorting numbers in ascending order
  numbers.sort((a, b) => {
    return a - b;
  })
);

console.log(
  numbers.sort((a, b) => {
    return b - a;
  })
);
const names = ["Alice", "Clara", "Bob"];
console.log(names.sort());

const people = [
  { name: "Ada", age: 150 },
  { name: "Adam", age: 80 },
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 },
];

console.log("Ada" < "Adam");

const sortedByAge = JSON.parse(JSON.stringify(people)).sort((a, b) => {
  return a.age - b.age;
});

const sortedByName = JSON.parse(JSON.stringify(people)).sort((a, b) => {
  if (a.name === b.name) return 0;

  if (a.name > b.name) {
    return -1;
  }
  return 1;
});

console.log(sortedByName);

console.log(sortedByAge);
console.log(people);

// could also use this to
sortedByAge.reverse();

console.log("A".charCodeAt(0));
console.log("a".charCodeAt(0));

console.log("A" < "a");
