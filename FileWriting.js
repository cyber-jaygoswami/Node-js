const fs = require('fs');

// fs.writeFile('random.txt', "myPassword : paAASS123", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("File writting done");
//     }
// });


fs.appendFile('random.txt', "\n something important", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("File writting done");
    }
});

console.log("Program done");