const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello world!");
  }, 1000);

  reject("We throw an error");
});

promise
  .then((result) => {
    console.log(result);
    return result + "!!!!";
  })
  .then((result2) => {
    console.log(result2);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Our promise is done.");
  });

setTimeout(() => {
  console.log(promise);
}, 2000);
