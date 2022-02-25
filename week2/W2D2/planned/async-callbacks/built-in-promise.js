const nativePromise = new Promise((resolve) =>
  setTimeout(() => {
    resolve(1);
  }, 2000)
);

console.log("Resolving 1st...");

nativePromise
  .then((result) => {
    console.log("Resolved:", result);
    console.log("Resolving 2nd...");

    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(result + 1);
      }, 2000)
    );
  })
  .then((result) => console.log("Resolved:", result))
  .then(() => {
    new Promise((_, reject) => setTimeout(() => reject("Error Message"), 1000))
      .then((result) => console.log(result))
      .catch((error) => console.error(error))
      .finally(() => console.log("This happens last, no matter what"));

    new Promise((resolve) => setTimeout(() => resolve("Success Message"), 1000))
      .then((result) => console.log(result))
      .catch((error) => console.error(error))
      .finally(() => console.log("This happens last, no matter what"));
  });
