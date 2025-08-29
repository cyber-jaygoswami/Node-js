// IIFE : Immediately Invoken Function Expressions
(function(){
    console.log("I am from function")
})();


const data = {
    // Properties
    'name': 'Jay Goswami',
    'First_name' : 'Jay',

    // Methods
    greet(){
        console.log("Hello  "+ this.First_name)
    }
};

console.log(data.name);
data.greet();