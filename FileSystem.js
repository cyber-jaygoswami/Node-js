const fs = require('fs');

// fs.readFile('sample.txt', "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data);
//     }
// });

// console.log("Filerading completed");


// Synchronous
const data = fs.readFileSync("sample.txt", "utf-8"); //blocking code
console.log(data);
console.log("File reading completed");