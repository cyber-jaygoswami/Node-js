
// String literals
var a = "Hello";
let b = "Something here";
const c = "Random123";

console.log("Value of A : " + a);


// Numbers literals
const x = 21;
const y = 21.22;

console.log("Value of X : " + x);
console.log("Value of Y : " + y);

var is_eligble = true;

console.log("Use eligble to vote " + is_eligble);

// console.log(clear());

let Person = {
    first_name : "Jay",
    last_name : "Goswami"
}


console.log(Person.first_name);

Person.first_name = "Ajay";
console.log(Person.first_name);

Person["first_name"] = "Raj";
console.log(Person.first_name);


const arr = [33,44,22,"Jay Goswami"];
console.log(arr[3]);

var name = "Jay goswami";
name = "Ajay"
const print_name = `Hello ${name}`;
console.log(print_name);


var something = null;
console.log(something);

let var1;
console.log(var1);

let var2 = undefined;
console.log(var2);


function greet(){
    console.log("Hello, Good morning");
}

greet();