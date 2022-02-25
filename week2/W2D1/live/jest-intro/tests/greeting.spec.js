const greeting = require("../src/greeting");

describe("Testing the Greeting Function", () => {
  it("should be a function", () => {
    expect(typeof greeting).toBe("function");
  });

  // new test case -> expect return value to be "hello world"
  it("should return 'hello world'", () => {
    expect(greeting()).toBe("hello world");
  });
});
