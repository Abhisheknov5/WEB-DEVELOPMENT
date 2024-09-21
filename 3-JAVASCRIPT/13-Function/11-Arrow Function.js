/*
Arrow Function:-

- It is a short hand technique for writing a function expression.
- You can minify the function code snippet using arrow technique.

Syntax: Traditional Expression

        var  hello = function() {
            return "Hello ! JS";
        }

Syntax: Short Hand

        var hello = () => "Hello ! JS";

        ()        function
        =>        return and definition
        => { }    definition with multiple statements

*/
// Example
// Example Arrow Function = 1
console.log("Arrow Function = 1");

// Define the Arrow Function
let myFunction = (a, b) => a * b;

// Call the function and log the result to the console
console.log(myFunction(4 ,5));


// Example Arrow Function = 2
console.log("Arrow Function = 2");

const addition = function(a, b){
    return a + b;
};

// Arrow function equivalent
const additionArrow = (a,b) => a + b;
console.log(addition(2,3));
console.log(additionArrow(2,3));