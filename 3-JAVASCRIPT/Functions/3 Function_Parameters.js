// JavaScript Function Parameters

/*
1 Function Parameters and Arguments:-
Earlier in this tutorial, you learned that functions can have parameters:
function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}
Function parameters are the names listed in the function definition.
Function arguments are the real values passed to (and received by) the function.

Parameter Rules:-
JavaScript function definitions do not specify data types for parameters.
JavaScript functions do not perform type checking on the passed arguments.
JavaScript functions do not check the number of arguments received.
*/

/*
2 Default Parameters:-
If a function is called with missing arguments (less than declared), the missing values are set to undefined.
Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:
*/
console.log('2 Default Parameters');
function myFunction(x ,y) {
    // Check if the 'y' parameter is undefined.
    if(y === undefined) {
     // If 'y' is undefined, set it to a default value of 2.
        y = 2
    }
    return x * y;
}
console.log(myFunction(5));

/*
3 Default Parameter Values:-
ES6 allows function parameters to have default values.
*/
console.log('3 Default Parameter Values');
// Define a function named myFunction with two parameters, x and y, where y has a default value of 10.
function myFunction(x, y = 10) {
    // Calculate the sum of x and y.
    return x + y;
}
// Call myFunction with x = 5 and no value provided for y (it will use the default value of 10).
console.log(myFunction(5));

/*
4 Function Rest Parameter:-
The rest parameter (...) allows a function to treat an indefinite number of arguments as an array.
*/
console.log('4 Function Rest Parameter');
// Define a function named sum that accepts a variable number of arguments using the rest parameter syntax (...args).
function sum(...args) {
     // Initialize a variable named sum to store the total sum of the arguments.
    let sum = 0;
    // Iterate through each argument using a for...of loop.
    for (let arg of args)
    // Add the current argument (arg) to the running total (sum).
    sum += arg;
     // Return the final sum.
    return sum;
}
// Call the sum function with multiple arguments (10, 20, 30, 40, 50).
let x = sum(10, 20, 30, 40, 50);
console.log(x);

/*
5 The Arguments Object:-
JavaScript functions have a built-in object called the arguments object.
The argument object contains an array of the arguments used when the function was called (invoked).
This way you can simply use a function to find (for instance) the highest value in a list of numbers:
*/
console.log('5 The Arguments Object');
