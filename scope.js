// Global
var x = 32;

function good(){
    console.log(x);

    var x = 22;
    console.log(x);
}

// good();
// console.log(x);


// local scope
function run(){
    let a = 10;
    console.log(a);
}
if(true){
    let b = 45;
    console.log(b);
}

// run();
// console.log(a);
// console.log(b);


// local scope
function run2(){
    var m = 10;
    console.log(m);
}
if(true){
    var n = 45;
    console.log(n);
}

// console.log(m);
console.log(n);