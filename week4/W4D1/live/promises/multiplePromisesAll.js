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

const promises2 = [];
for (let i = 5; i < 10; i++) {
  promises2.push(createAPromise(i * 1000, "i: " + i));
}

const promiseAllOtherPromises = Promise.all(promises);
const anotherPromiseAll = Promise.all(promises2);

const together = Promise.all([promiseAllOtherPromises, anotherPromiseAll]);
together.then((result) => {
  // [ [i:0, ....], [i: 5....]]
  console.log([...result[0], ...result[1]]);
});
const together2 = Promise.all([
  ...promiseAllOtherPromises,
  ...anotherPromiseAll,
]);
