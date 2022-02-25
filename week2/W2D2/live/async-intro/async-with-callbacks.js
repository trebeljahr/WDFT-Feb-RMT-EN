// callbacks, Promises, async/await
const id = setTimeout(() => {
  console.log("Hello but at a later point in time");
}, 5000);

clearTimeout(id);

const intervalId = setInterval(() => {
  console.log("Hello from the interval");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 11000);

let counter = 0;
setInterval(() => {
  const counterElement = document.querySelector("#counter h1");
  counterElement.innerText = counter++;
  const clockElement = document.querySelector("#clock h1");
  clockElement.innerText = new Date();
}, 1000);

// function ownSetTimeout(callback) {
//     for (let i = 0; i<10000000;i++) {
//     }
//     callback()
// }

// function callsthecallbackAtALaterTime(callback) {
//   const result = doSomethingElseThatTakesTime();
//   setTimeout(() => {
//     callback(result);
//   }, 5000);
// }

console.log("Hello");
