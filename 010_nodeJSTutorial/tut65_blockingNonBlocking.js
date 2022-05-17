// Syncronous or Blocking
// - executes code line by line
const fs = require("fs");

let fileText = fs.readFileSync("testFs.txt", "ascii"); 

// Asynchronous or non-Blocking
// - executes line at its own pace if response is not fetched in sync it executes callback 
// - callback are fired 
const fsAsync = require("fs");

fsAsync.readFile("testFs.txt", "ascii", (err, data) => {
    console.log(err, data)
}); 

console.log("This line is written after readFile");

// The line gets executes first and the data is printed as and when available