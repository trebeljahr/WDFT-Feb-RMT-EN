class MyPromise {
  constructor(fn) {
    this.resolve = (result) => {
      if (this.innerFn) {
        const innerFnReturn = this.innerFn(result);

        if (innerFnReturn instanceof MyPromise) {
          innerFnReturn.innerFn = (r) => r;
          innerFnReturn.resolveNext = this.resolveNext;
        } else {
          this.resolveNext(innerFnReturn);
        }
      }
    };
    fn(this.resolve);
  }

  then(fn) {
    this.innerFn = fn;
    this.nextPromise = new MyPromise((resolve) => {
      this.resolveNext = (result) => resolve(result);
    });
    return this.nextPromise;
  }
}

let now = new Date();

function timeIt() {
  const now2 = new Date();
  const time = "took " + (now2 - now) + " ms";
  now = new Date();
  return time;
}

const promise = new MyPromise((resolve) => {
  setTimeout(() => resolve(5), 2000);
});

const decrement = (prev) => prev - 1;
const asyncDecrement = (prev) => {
  return new MyPromise((resolve) => {
    setTimeout(
      () => resolve(prev - 1),
      Math.floor(Math.random() * 5 + 1) * 1000
    );
  });
};

promise
  .then((result) => {
    console.log("Step " + result + "...", timeIt());
    return asyncDecrement(result);
  })
  .then((result) => {
    console.log("Step " + result + "...", timeIt());
    return asyncDecrement(result);
  })
  .then((result) => {
    console.log("Step " + result + "...", timeIt());
    return asyncDecrement(result);
  })
  .then((result) => {
    console.log("Step " + result + "...", timeIt());
    return decrement(result);
  })
  .then((result) => {
    console.log("Step " + result + "...", timeIt());
    return decrement(result);
  });
