console.log("This is index.js");


// Multiple exports Handling
const mod = require('./tut68_mod');
console.log(mod)

console.log(mod.avg([1,2,3,4]));

// Single exports Handling
const sum = require('./tut68_sumModule');
console.log(sum([2,3,5]));
