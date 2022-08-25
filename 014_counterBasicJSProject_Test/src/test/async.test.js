// Jest need to know when the code it is testing has completed

// For example, let's say that fetchData returns a promise that is
// supposed to resolve to the string 'peanut butter'. We could test it with:

const { fetchData, fetchRejectData } = require("./async");
console.log(fetchData);
//test fetchData()
// function fetchData() {
//   return setTimeout(() => {
//     return "data is oil";
//   }, 1000);
// }
test("data is oil", () => {
  return fetchData().then((data) => {
    console.log(data);
    expect(data).toBe("data is oil");
  });
});

test("data is oil -> async", async () => {
  const data = await fetchData();
  expect(data).toBe("data is oil");
});

test("data is oil -> aync and resolve", async () => {
  await expect(fetchData()).resolves.toBe("data is oil");
});

test("data is oil -> async and reject", async () => {
  await expect(fetchRejectData()).rejects.toMatch("It failed");
});
