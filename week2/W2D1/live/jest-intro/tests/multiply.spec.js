const multiply = require("../src/multiply");

describe("Testing the multiply function", () => {
  it("return value should be a number", () => {
    expect(typeof multiply()).toBe("number");
  });

  it("return value should be a multiple", () => {
    expect(multiply(5, 10)).toBe(50);
    expect(multiply(-5, 10)).toBe(-50);
  });

  // think about where code could break - and then write test cases to
  // to test these "edge" cases
  it("return value when only one argument is specified", () => {
    // expect(multiply(undefined, 10).toBe());
  });
});
