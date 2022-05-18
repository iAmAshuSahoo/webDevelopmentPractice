console.log("This is mod.js");

function average(arr) {
    let sum = 0;
    arr.forEach(item => {
        sum+=item;
    });
    return sum/arr.length
}

module.exports = {
    avg: average,
    name: "Ashu",
    brandName: "iAmAshuSahoo"
}