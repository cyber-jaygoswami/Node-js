// function add(a,b){
//     return a + b;
// }

// const add = function(a,b){
//     return a + b;
// }

// const add = (a,b) => {
//     return a  + b;
// }

const add = (a,b) => {return a  + b};


const ans = add(4,3);
// console.log(ans)





// setTimeout(()=>{
//     console.log("Timeout Buddy :)");
// },5000);


const fs = require('fs');

fs.readFile('sample.text','utf-8',(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
    console.log(data);
    }
});
