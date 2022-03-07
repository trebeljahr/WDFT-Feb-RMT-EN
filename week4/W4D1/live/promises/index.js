// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello");
//   }, 1000);
// });

// (new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello");
//   }, 5000);
// })).then(res => console.log(res))

// console.log(promise);

// setTimeout(() => {
//   console.log("Hello from Timeout");
//   console.log(promise);
// }, 3000);

// whatIsThis is a promise itself, so .then returns a promise
// const whatIsThis = promise.then((cat) => {
//   console.log(cat);
//   return cat + "!!!!!";
// });

// whatIsThis.then((pizza) => console.log("From second then:", pizza));

function createAPromise(resolveTimeout, whatItShouldResolveTo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(whatItShouldResolveTo);
    }, resolveTimeout);
  });
}

const myPromise = createAPromise(1000, "First");
const whatIsThis = myPromise
  .then((result) => {
    console.log(result);
    return createAPromise(2000, "Second");
  })
  .then((result2) => {
    console.log(result2);
  });
//   .then((result3) => {
//     console.log(result3);
//   });

setTimeout(() => {
  console.log(whatIsThis);
}, 4000);

// pending
// fulfilled -> result
// rejected -> rejected
