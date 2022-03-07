const first = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First");
  }, 6000);
});

const second = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second");
  }, 2000);
});

const third = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third");
  }, 3000);
});

const raceResultPromise = Promise.race([first, second, third]);
raceResultPromise.then((valueOfWinner) => {
  console.log(valueOfWinner);
});
