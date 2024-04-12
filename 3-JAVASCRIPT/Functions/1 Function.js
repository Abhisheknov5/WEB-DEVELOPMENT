// FUNCTIONS
/*
FUNCTIONS:-
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).
*/
console.log('Function');
// Function to compute the product of p1 and p2.
function myFunction(p1, p2) {
    return p1 * p2;
}
let result = myFunction(4, 5);
console.log("Call a function which performs a calculation and returns the result:\n", result);

/*
JavaScript Function Syntax :-
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)
The code to be executed, by the function, is placed inside curly brackets: {}

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
Function parameters are listed inside the parentheses () in the function definition.
Function arguments are the values received by the function when it is invoked.
Inside the function, the arguments (the parameters) behave as local variables.
*/

/*
Function Invocation :-
The code inside the function will execute when "something" invokes (calls) the function.
When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)
*/

/*
Function Return :-
When JavaScript reaches a return statement, the function will stop executing.
If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
Functions often compute a return value. The return value is "returned" back to the "caller".
*/
// Q Calculate the product of two numbers and return the result.
// Function is called, the return value will end up in x
let x = myFunctions(4, 3);
console.log("product of two numbers=", x);
function myFunctions(a, b) {
    // Function returns the product of a and b
    return a * b;
}
/*
Why Functions?
With functions you can reuse code
You can write code that can be used many times.
You can use the same code with different arguments, to produce different results.
*/

/*
The () Operator:-
The () operator invokes (calls) the function.
*/
// Q Convert Fahrenheit to Celsius ?
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32)
}
let value = toCelsius(77);
console.log(value);