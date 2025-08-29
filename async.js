const fs = require('fs').promises;

async function readfile(){
    try{
        const data = await fs.readFile("sample.txt","utf-8");
        console.log(data);


    }catch(err){
        console.log(err);
    }
}

readfile();
console.log("After File");