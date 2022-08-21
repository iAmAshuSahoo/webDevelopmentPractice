const sum = require("./sum");

test("add 1+2 equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// Matchers
test("Check 2+2 equals 4", () => {
  expect(2 + 2).toBe(4);
});
// How it works
// expect returns expectation object and tobe is matcher

// to check the value of object we use toEqual
test("Test values for a object", () => {
  const data = { name: "Kami" };
  data.class = "A";
  const abc = { name: "Kami", class: "A" };
  expect(data).toEqual(abc);
});
// toEqual recursively checks every field of an object or array.

// also test for the opposite of a matcher:
test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
