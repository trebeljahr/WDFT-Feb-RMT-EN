const globalHello = "Hello";
const wizard = "Voldemort";
var insideFunction = "hello from global scope";

function sayHello() {
  var insideFunction;
  console.log("inside function before defining it", insideFunction);
  const wizard = "Harry Potter";
  insideFunction = "hello";
  console.log(insideFunction);

  function innerFunction() {
    console.log(wizard);
    console.log(globalHello);
    const innerWizard = "Albus Dumbledore";
  }

  console.log(globalHello);
  console.log("Hello world");
  let hello = "hello";
  const hello2 = "hello";
  console.log(hello2);
  console.log(wizard);
}

// console.log(insideFunction);

// console.log(wizard);
sayHello();

if (true) {
  console.log(globalHello);
  console.log("Hello World");
}

for (let i = 0; i < 5; i++) {
  let insideForLoop = 5;
  var insideForLoop2 = 5;
}

for (let i = 0; i < 5; i++) {}

for (let i = 0; i < 5; i++) {}
console.log(i);
// console.log(insideForLoop2);
