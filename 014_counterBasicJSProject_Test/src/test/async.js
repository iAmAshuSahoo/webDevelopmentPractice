function fetchData() {
  //   console.log("Hi");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data is oil");
    }, 1000);
  });
}

module.exports = fetchData;
