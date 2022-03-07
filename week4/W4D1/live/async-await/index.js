function sayHello() {
  return "Hello world";
}

function sleep(sleepTimer) {
  return new Promise((resolve) => {
    setTimeout(resolve, sleepTimer);
  });
}
// return promises
async function sayHelloAsync() {
  await sleep(3000);
  console.log("Waking up...");
  await sleep(1000);
  console.log("Waking up again...");
  await sleep(2000);
  return sayHello();
  //   return "Hello world";
}

// we could achieve that same "idea" with promises as well - so why bother?
function sayHelloAsync2() {
  return new Promise((resolve) => {
    resolve(sayHello());
  });
}

console.log(sayHello());
// console.log(sayHelloAsync());

sayHelloAsync().then((result) => {
  console.log("Inside then: ", result);
});
