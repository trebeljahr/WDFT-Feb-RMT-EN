function createAPromise(
  resolveTimeout,
  whatItShouldResolveTo,
  shouldReject = false
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(whatItShouldResolveTo);
    }, resolveTimeout);

    if (shouldReject) {
      reject("We reject the promise");
    }
  });
}

const promises = [];
for (let i = 0; i < 5; i++) {
  promises.push(createAPromise(i * 1000, "i: " + i));
}
// promises.push(createAPromise(2000, "we should never see this", true));
// console.log(promises);

const promiseAllOtherPromises = Promise.all(promises);

// console.log(promiseAllOtherPromises);
promiseAllOtherPromises
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
