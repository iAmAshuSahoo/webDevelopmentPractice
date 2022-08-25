function fetchData() {
  //   console.log("Hi");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data is oil");
    }, 1000);
  });
}

function fetchRejectData() {
  //   console.log("Hi");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return "data is oil";
    }, 1000);

    reject("It failed");
  });
}

module.exports = { fetchData, fetchRejectData };
