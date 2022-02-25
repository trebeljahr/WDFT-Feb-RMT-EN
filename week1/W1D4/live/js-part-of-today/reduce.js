const numbers = [1, 2, 3, 5, 10];

const average =
  numbers.reduce((aggregator, element) => {
    return aggregator + element;
  }, 0) / numbers.length;

console.log(average);

const wizards = [
  ["Harry", "Hogwarts"],
  ["Albus", "Hogwarts"],
  ["Krum", "Durmstrang"],
];

const houses = wizards.reduce((housesObject, wizardAndHouse) => {
  const wizard = wizardAndHouse[0];
  const house = wizardAndHouse[1];
  const currentWizardsInTheHouse = housesObject[house];
  if (currentWizardsInTheHouse === undefined) {
    housesObject[house] = [];
  }
  housesObject[house].push(wizard);
  return housesObject;
}, {});

// what we want
// const houses = {
//   Hogwarts: ["Harry", "Albus"],
//   Durmstrang: ["Krum"],
// };

console.log(houses);

const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 25 },
  { name: "Allen", age: 25 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 },
];

const peopleObjectByAge = people.reduce((agg, person) => {
  const keyIsNotThere = agg[person.age] === undefined;
  if (keyIsNotThere) {
    // let's add the key to the object
    agg[person.age] = [];
    // agg === { 25: [] }
  }
  agg[person.age].push(person.name);

  // agg === { 25: ["Candice"] }
  return agg;
}, {});

console.log(peopleObjectByAge);
/* 
    { 
        25: ["Candice", "Tammy", "Allen"],
        17: ["Stuart"],
        ....
    }
*/

const houses2 = wizards.reduce((agg, [wizardName, house]) => {
  return { ...agg, [house]: [...(agg[house] || []), wizardName] };
}, {});

const totalAge = people.reduce((agg, { age }) => agg + age, 0);
console.log(totalAge);

const groups = people.reduce(
  (agg, { age, name: firstName }) => {
    if (age >= 18) {
      agg.over18.push(firstName);
    } else {
      agg.under18.push(firstName);
    }
    return agg;
  },
  { over18: [], under18: [] }
);

console.log(groups);
