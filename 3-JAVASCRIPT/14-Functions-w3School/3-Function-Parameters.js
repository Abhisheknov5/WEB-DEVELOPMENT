// JavaScript Function Parameters

/*
(1) Function Parameters and Arguments :-
- Earlier in this tutorial, you learned that functions can have parameters:
- function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}
- Function parameters are the names listed in the function definition.
- Function arguments are the real values passed to (and received by) the function.

Parameter Rules:-
- JavaScript function definitions do not specify data types for parameters.
- JavaScript functions do not perform type checking on the passed arguments.
- JavaScript functions do not check the number of arguments received.
*/

/*
(2) Default Parameters:-
- If a function is called with missing arguments (less than declared), the missing values are set to undefined.
- Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:
*/
console.log('(2) Default Parameters');
function myFunction(x ,y) {
    // Check if the 'y' parameter is undefined.
    if(y === undefined) {
     // If 'y' is undefined, set it to a default value of 2.
        y = 2
    }
    return x * y;
}
console.log(myFunction(5)); // 15

/*
(3) Default Parameter Values:-
- ES6 allows function parameters to have default values.
*/
console.log('(3) Default Parameter Values');
// Define a function named myFunction with two parameters, x and y, where y has a default value of 10.
function myFunction(x, y = 10) {
    // Calculate the sum of x and y.
    return x + y;
}
// Call myFunction with x = 5 and no value provided for y (it will use the default value of 10).
console.log(myFunction(5)); // 15

/*
(4) Function Rest Parameter:-
The rest parameter (...) allows a function to treat an indefinite number of arguments as an array.
*/
console.log('(4) Function Rest Parameter');
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
console.log(x); // 150

/*
(5) The Arguments Object:-
JavaScript functions have a built-in object called the arguments object.
The argument object contains an array of the arguments used when the function was called (invoked).
This way you can simply use a function to find (for instance) the highest value in a list of numbers:
*/
console.log('5 The Arguments Object');

// Function to find the maximum Number among the Arguments
console.log("maximum Number");
function findMax(){
    let max = -Infinity; // Initialize the variable max to the smallest possible number
     // Loop through all the arguments passed to the function
    for(let i = 0; i < arguments.length; i++){
        // if the current argument is greater than max update max
        if(arguments[i]>max){
            max = arguments[i];
        }
    }
    // Return the Largest number found
return max;
}
// Call the findMax function with three arguments and log the result to the console
console.log(findMax(4,5,6)); // 6


/* Or create a function to sum all input values. */
 console.log("sum all input value:-");

 // Function to calculate the sum of all arguments passed to it
 function sumAll(){
    // Initialize thr sum variable to 0
    let sum = 0;

    // Loop through all the arguments passed to the function
    for(let i = 0; i < arguments.length; i++){
        // Add the current argument to the sum
        sum += arguments[i];
    }
    // Return the total sum of the arguments
    return sum;
 }

// Call the sumAll function with multiple arguments and log the result to the console
console.log(sumAll(1,2,3,4,5)); // 15

/*
(6) Arguments are Passed by Value :-
- The parameters, in a function call, are the function's arguments.
- JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
- If a function changes an argument's value, it does not change the parameter's original value.
- Changes to arguments are not visible (reflected) outside the function.
*/

/*
(7) Objects are Passed by Reference :-
- In JavaScript, object references are values.
- Because of this, objects will behave like they are passed by reference:
- If a function changes an object property, it changes the original value.
- Changes to object properties are visible (reflected) outside the function.
*/


