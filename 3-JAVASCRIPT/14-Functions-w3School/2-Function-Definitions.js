// JAVASCRIPT FUNCTION DEFINITIONS
/*
(1) Function Declaration
(2) Function Expressions
(3) The Function() Constructor 
(4) Function Hoisting 
(5) Self-Invoking Functions
(6) Functions Can Be Used as Values 
(7) Functions are Objects  
(8) Arrow Functions 
*/
/*
(1) Function Declaration :-
- JavaScript functions are defined with the function keyword.
- You can use a function declaration or a function expression.

- Earlier in this tutorial, you learned that functions are declared with the following syntax:
function functionName(parameters) {
  // code to be executed
}
- Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
*/
console.log('(1) Function Declaration');
// Declare a variable 'x' and assign the result of a multiplication function
let x = myFunction1(4, 3); 
console.log(x);
// Define a multiplication function
function myFunction1(a, b) {
    return a * b;
}
// Output is = 12

/*
(2) Function Expressions :-
- A JavaScript function can also be defined using an expression.
- A function expression can be stored in a variable:
*/
console.log('(2) Function Expressions');
const x1 = function (a, b) {
    return a * b;
} 

// After a function expression has been stored in a variable, the variable can be used as a function.

// Declare a constant variable x2 and assign it a function that takes two parameters a and b.
const x2 = function (a, b) {
    return a * b;
}
// Declare a variable x3 and assign it the result of calling the x2 function with arguments 4 and 3.
let x3 = x2(4, 3);
console.log(x3);
// Output is = 12

/*
(3) The Function() Constructor :-
- As you have seen in the previous examples, JavaScript functions are defined with the function keyword.
- Functions can also be defined with a built-in JavaScript function constructor called Function().
*/
console.log('(3) The Function() Constructor');
// Declare a variable x4 and assign it a new Function object.
const x4 = new Function("a", "b", "return a * b");
// Declare a variable x5 and assign it the result of calling the x4 function with arguments 4 and 3.
let x5 = x4(4, 3);
console.log(x5); // Output is = 12

// You actually don't have to use the function constructor. The example above is the same as writing.
// Most of the time, you can avoid using the new keyword in JavaScript.
const x6 = function (a, b) {
    return a * b;
}
let x7 = x6(4, 3);
console.log(x7); // Output is = 12

/*
(4) Function Hoisting :-
- Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
- Hoisting applies to variable declarations and to function declarations.
- Because of this, JavaScript functions can be called before they are declared:
*/
console.log('(4) Function Hoisting');
// Call the function myFunction with an undefined variable x (works due to hoisting).
myFunction(x);
// Declare a function named myFunction that squares its input.
function myFunction(x) { 
    return x * x;
}
// Call myFunction with 5 and store the result in the variable result.
let result = myFunction(5); 
console.log(result); 
// Ouput is NAN

/*
(5) Self-Invoking Functions :-

- Function expressions can be made "self-invoking".
- A self-invoking expression is invoked (started) automatically, without being called.
- Function expressions will execute automatically if the expression is followed by ().
- You cannot self-invoke a function declaration.
- You have to add parentheses around the function to indicate that it is a function expression.
*/
console.log('(5) Self-Invoking Functions');
(function () { // Start of a self-invoking (immediately invoked) anonymous function.
    let x8 = "Hello! I called myself";
    console.log(x8);
}) ();
// Output is = Hello! I called myself

// The function above is actually an anonymous self-invoking function (function without name).

/*
(6) Functions Can Be Used as Values :-
- JavaScript functions can be used as values:
*/
console.log('(6) Functions Can Be Used as Values');
function myFunction(a, b) {
    return a * b;
}
let x9 = myFunction(4, 3);
console.log(x9); // 12

// JavaScript functions can be used in expressions.
function myFunction(a ,b) {
    return a * b;
}
let x10 = myFunction(4, 3) * 2;
console.log(x10); // 24

/*
(7) Functions are Objects :-
- The typeof operator in JavaScript returns "function" for functions.
- But, JavaScript functions can best be described as objects.
- JavaScript functions have both properties and methods.
- The arguments.length property returns the number of arguments received when the function was invoked:
*/
console.log('7 Functions are Objects');
function myFunction(a, b) {
    return arguments.length;
}
console.log(myFunction(5, 5)); // 25

// The toString() method returns the function as a string.
function myFunction(a, b) {
    return a * b;
}
let x11 = myFunction.toString();
console.log("The toString() method returns the function as a string",x11);
// Output is = The toString() method returns the function as a string function myFunction(a, b) { return a * b;

/*
(8) Arrow Functions :-
- Arrow functions allows a short syntax for writing function expressions.
- You don't need the function keyword, the return keyword, and the curly brackets.
- Arrow functions do not have their own this. They are not well suited for defining object methods.
- Arrow functions are not hoisted. They must be defined before they are used.
- Using const is safer than using var, because a function expression is always constant value.
*/
console.log('8 Arrow Functions');

// ES5
var x12 = function(x, y) {
    return x * y;
}
console.log(x12(5, 5)); // 25

// ES6
const x13 = (x, y) => x * y;
console.log(x13(5, 5)); // 25

// You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them.
const x14 = (x, y) => { return x * y}
console.log(x14(5, 5)); // 25
