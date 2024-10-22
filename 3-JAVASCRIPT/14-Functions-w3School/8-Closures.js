// JavaScript Closures :- 
/*
- JavaScript variables can belong to the local or global scope.
- Global variables can be made local (private) with closures.

(1) Global Variables :- 
- A function can access all variables defined inside the function, like this:

Example
*/
console.log('(1) Global Variables ');

// Define the Function
function myFunction1() {
    let a = 4; // Define a Variable
    console.log(a * a); // Calculate and log the square of the variable
}
// Call the Function
myFunction1();
// Op is = 16

/*
- In the first example, a is a local variable.
- A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code.
- Global and local variables with the same name are different variables. Modifying one, does not modify the other.
*/

/*
- But a function can also access variables defined outside the function, like this:
Example
*/
// Declare a Variable
let a1 = 4;

// Define the function
function myFunction2() {
    console.log(a1 * a1); // Calculate and log the square of the variable
}
// call the function
myFunction2();
// Op is = 16

/*
- In the last example, a1 is a global variable.
- In a web page, global variables belong to the page.
- Global variables can be used (and changed) by all other scripts in the page.

*/

/*
Note:-
- Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
*/
// Call the Function
myFunction3();

// Log the result of the square of 'a'
console.log(a2 * a2);

// Define the function
function myFunction3() {
    a2 = 4;  // Assign value to 'a1' without declaration keyword
}
// Op is = 16

/*
Variable Lifetime :-
- Global variables live until the page is discarded, like when you navigate to another page or close the window.
- Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.
*/

/*
(2) A Counter Dilemma :-
- Suppose you want to use a variable for counting something, and you want this counter to be available to all functions.
- You could use a global variable, and a function to increase the counter:

Example
*/
console.log('(2) A Counter Dilemma ');

// Initiate Counter
let counter = 0;

// Function to Increment Counter
function add1() {
    counter += 1; // Increment the counter
}
// call add() 3 times
add1();
add1();
add1();

// The counter should now be 3
console.log('The counter is: ' + counter);
// Op is = The counter is: 3

/*
- There is a problem with the solution above: Any code on the page can change the counter, without calling add().
- The counter should be local to the add() function, to prevent other code from changing it:

Example
*/

// Initial Global Counter
let globalCounter = 0;

// Function to increment local counter
function add2(){
    let localCounter = 0; // Local Counter initialized
    localCounter +=1;     // Increment the Local Counter
    console.log('Local Counter inside add(): ' + localCounter);  // Log the local counter
}
// Call add() 3 times
add2();
add2();
add2();

// The global counter remains unchanged
console.log('The global counter is: ' + globalCounter);
// op is = The global counter is: 0

/*
- It did not work because we display the global counter instead of the local counter.
- We can remove the global counter and access the local counter by letting the function return it:
Example
*/
// Function to increment counter
function add3(){
    let counter = 0; // Local counter variable
    counter += 1;   // Increment the Local Counter
    return counter; // Return the current value of thr counter
}

// Trying to increment the counter and display the result in the console
function myFunction4(){
    console.log('Current Counter Value: ' + add3()); // Log the counter value returned by add()
}
// Simulating button clicks
myFunction4(); // Call the function to see the result
myFunction4(); // Call it again to show the counter again (will always be 1)
myFunction4(); // Call it again

// Op is=
// Current Counter Value: 1
// Current Counter Value: 1
// Current Counter Value: 1


/*
(3) JavaScript Nested Functions :-
- All functions have access to the global scope.  
- In fact, in JavaScript, all functions have access to the scope "above" them.
- JavaScript supports nested functions. Nested functions have access to the scope "above" them.
- In this example, the inner function plus() has access to the counter variable in the parent function:

Example
*/
console.log('(3) JavaScript Nested Functions ');

// Function to increment counter using closures
function add4(){
    let counter = 0; // Local counter Variable
    function plus(){
        counter += 1;  // Increment the local counter
    }
    plus(); // Call the inner function to increment counter
    return counter; // Return the current value of thee counter
}
// Log the counter value to the console
console.log("Counter value after first add call: " + add4()); // Outputs: Counter value after first add call: 1
console.log("Counter value after second add call: " + add4()); // Outputs: Counter value after second add call: 1
console.log("Counter value after third add call: " + add4()); // Outputs: Counter value after third add call: 1

// Op is = 
// Counter value after first add call: 1
// Counter value after second add call: 1
// Counter value after third add call: 1

/*
- This could have solved the counter dilemma, if we could reach the plus() function from the outside.
- We also need to find a way to execute counter = 0 only once.
- We need a closure.
*/

/*
(4) JavaScript Closures :-
Remember self-invoking functions? What does this function do?

Example
*/
// Clousre to create a counter Function
const add5 = (function(){
    let counter = 0;
    return function() {
        counter += 1;
        return counter;
    };
})();
// Simulate button clicks and log the counter value
console.log("Count after first click: " + add5()); // Outputs: 1
console.log("Count after second click: " + add5()); // Outputs: 2
console.log("Count after third click: " + add5()); // Outputs: 3

/*
Example Explained
The variable add is assigned to the return value of a self-invoking function.

The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

A closure is a function having access to the parent scope, even after the parent function has closed.
*/