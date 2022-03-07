// pending
// fulfilled -> result
// rejected -> rejected

// example of creating a promise that resolves after 1 second with the value hello
const promise = new Promise((res) => {
  setTimeout(() => {
    res("Hello");
  }, 1000);
});

// can you do it inline?
// (new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello");
//   }, 5000);
// })).then(res => console.log(res))

console.log(promise);

setTimeout(() => {
  console.log("Hello from Timeout");
  console.log(promise);
}, 3000);

// whatIsThis is a promise itself, so .then returns a promise
const whatIsThis = promise.then((cat) => {
  console.log(cat);
  return cat + "!!!!!";
});

whatIsThis.then((pizza) => console.log("From second then:", pizza));
