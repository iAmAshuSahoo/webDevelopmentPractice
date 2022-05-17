const fs = require("fs");

let fileText = fs.readFileSync("testFs.txt", "ascii");   // utf-8 file format is best
fileText = fileText.concat(" and I am very happy to use Build in modules.");
console.log("Creating a new file...");
fs.writeFileSync("createdUsingNodeJS.txt",fileText)
