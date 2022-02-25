// const myObject = {
//   key: "value",
//   number: 2,
//   pizza: ["margherita"],
//   Albus: {
//     name: "Albus",
//   },
//   "Harry Potter": {
//     name: "Harry",
//     lastName: "Potter",
//     school: "Hogwarts",
//     friend: {
//       name: "Ron",
//       lastName: "Weasley",
//     },
//   },
// };

// console.log(myObject["Harry Potter"]);
// console.log(myObject.key);

// console.log(myObject.Albus.name);
// console.log(myObject["Harry Potter"].name);

// const ron = myObject["Harry Potter"].friend;
// console.log(ron);
// console.log(ron.name + " " + ron.lastName);

// console.log(`${ron.name} ${ron.lastName}`);

// console.log(myObject["Harry Potter"]["name"]);

// const ourKeyVariable = "Harry Potter";
// console.log(myObject[ourKeyVariable]);

// for (let key in myObject) {
//   console.log(key);
//   console.log(myObject[key]);
// }

// const keyArray = Object.keys(myObject);
// console.log(keyArray);

// myObject.number = 3;
// myObject.number++;

// console.log(myObject.number);

// myObject.pokemon = "Pikachu";
// console.log(myObject.pokemon);
// console.log(Object.keys(myObject));

// const entries = Object.entries(myObject);
// console.log(entries);

// const newObject = {};
// for (let i = 0; i < entries.length; i++) {
//   const entry = entries[i];
//   console.log(entry);
//   console.log(entry[0]);
//   console.log(entry[1]);
//   newObject[entry[0]] = entry[1];
// }

// console.log(newObject);

// newObject["Harry Potter"];

// // shallow copy with ...
// const shallowCopy = {
//   ...myObject,
//   hello: "Hello world",
//   pokemon: "Charmander",
// };

// shallowCopy.Albus.friend = "Mc Gonagall";

// console.log("My Object after creating and changing shallow copy", myObject);
// console.log(shallowCopy);

// separate example
const nestedObject = {
  // 123
  innerObject: {
    name: "Adryan", // <-- address1
    // ...
  },
};

const shallowCopyOfNestedObject = {
  ...nestedObject,
};

console.log(shallowCopyOfNestedObject);

shallowCopyOfNestedObject.innerObject.name = "Renato";
console.log(nestedObject);

shallowCopyOfNestedObject.innerObject.name2 = "Ernesto";

console.log("[a] === [a]? ", ["a"] === ["a"]);
const ourArray = ["a"];
const ourCopy = ourArray;
console.log("ourArray === ourCopy?", ourArray === ourCopy);
console.log({} === {});
console.log(shallowCopyOfNestedObject.innerObject === nestedObject.innerObject);

console.log(shallowCopyOfNestedObject);
console.log(nestedObject);
