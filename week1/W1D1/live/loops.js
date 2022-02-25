for (let i = 0; i < 10; i++) {
  // ...
  console.log("Hello");
}

const wizard = "Albus Dumbledore";

// for (let i = 0; i < wizard.length; i++) {
//   console.log(wizard[i]);
// }

let reverse = "";
for (let i = wizard.length - 1; i >= 0; i--) {
  console.log(wizard[i]);
  reverse += wizard[i];
  //   if () {

  //   }
}
console.log(reverse);

let condition = true;
let counter = 0;

while (condition) {
  // ...
  console.log("True!");
  if (counter > 10) {
    condition = false;
  }
  counter++;
}

const array = ["hello", "world"];
for (let element of array) {
  console.log(element);
}

array.forEach((element, index) => {
  console.log("This is from forEach");
  console.log(element, index);
});

const someObject = {
  key1: "hello",
  key2: "world",
};

for (let key in someObject) {
  console.log(key);
  console.log(someObject[key]);
}

// this throws an error -> TypeError: someObject is not iterable
// for (let element of someObject) {
//   console.log(element);
// }
