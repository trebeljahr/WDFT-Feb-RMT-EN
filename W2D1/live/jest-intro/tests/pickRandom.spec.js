const pickRandom = require("../src/pickRandom");

describe("testing pickRandom function", () => {
  const mockMath = Object.create(global.Math);
  mockMath.random = () => {
    return 0;
  };
  global.Math = mockMath;

  beforeEach(() => {
    console.log("Hello running a new test");
  });

  const array = [1, 2, 3];
  it("should pick something from the array", () => {
    expect(Math.random()).toBe(0.99);
    expect(pickRandom(array)).toBe(3);
    expect(pickRandom(array)).toBe(3);
    expect(pickRandom(array)).toBe(3);
    expect(pickRandom(array)).toBe(3);
    expect(pickRandom(array)).toBe(3);
  });

  it("should pick something from the array", () => {
    expect(Math.random()).toBe(0.99);
    expect(pickRandom(array)).toBe(3);
    expect(pickRandom(array)).toBe(3);
    expect(pickRandom(array)).toBe(3);
    expect(pickRandom(array)).toBe(3);
    expect(pickRandom(array)).toBe(3);

    // expect([1, 2, 3]).toContain(3);
  });
});
