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
