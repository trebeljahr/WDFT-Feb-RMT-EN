const numbers = [1, 2, 3, 4, 5, 10, 4, 5, 6, 1, 1];

const numbersDivisibleBy2 = numbers.filter((element) => {
  return element % 2 === 0;
});

console.log(numbersDivisibleBy2);

const numbersNotDivisibleBy2 = numbers.filter((element) => {
  return element % 2 !== 0;
});

console.log(numbersNotDivisibleBy2);

const numbers146 = numbers.filter((num) => {
  switch (num) {
    case 1:
    case 4:
    case 6:
      return true;
    default:
      return false;
  }
});

console.log(numbers146);

const wizards = [
  {
    name: "Harry",
    house: "Gryffindor",
  },
  {
    name: "Luna",
    house: "Ravenclaw",
  },
  {
    name: "Cedric",
    house: "Hufflepuff",
  },
  {
    name: "Tom Riddle",
    house: "Slytherin",
  },
];

const noSlytherines = wizards.filter((wizard) => {
  if (wizard.house === "Slytherin") {
    return false;
  }
  return true;
});

console.log(noSlytherines);

const noSlytherines2 = wizards.filter((wizard) => wizard.house !== "Slytherin");
console.log(noSlytherines2);

const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 },
];

const adults = (arr) => {
  //your code here
  const peopleWhoCanDrink = arr
    .filter((person) => person.age >= 21)
    .map((person) => person.name);
  return [peopleWhoCanDrink[0], peopleWhoCanDrink[1]];
};

let canConsumeTwo = adults(people);
console.log(canConsumeTwo);
//Answer should be ['Candice', 'Tammy']
