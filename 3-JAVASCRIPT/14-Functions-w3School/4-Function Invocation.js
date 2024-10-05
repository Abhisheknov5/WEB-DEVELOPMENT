/*
(1) JavaScript Function Invocation 
(2) What is this?
(3) The Global Object
(4) Invoking a Function as a Method
(5) Invoking a Function with a Function Constructor 
*/

/*
(1) JavaScript Function Invocation :-
- The code inside a JavaScript function will execute when "something" invokes it.

Invoking a JavaScript Function :-
- The code inside a function is not executed when the function is defined.
- The code inside a function is executed when the function is invoked.
- It is common to use the term "call a function" instead of "invoke a function".
- It is also common to say "call upon a function", "start a function", or "execute a function".
- In this tutorial, we will use invoke, because a JavaScript function can be invoked without being called.

Invoking a Function as a Function :-
Example
*/
console.log('(1) JavaScript Function Invocation ');

// Define a function named myFunction that takes two arguments 'a' and 'b'
function myFunction(a, b) {
    // Define a function named myFunction that takes two arguments 'a' and 'b'
    return a * b;
}
// Call the function myFunction with arguments 10 and 2
console.log(myFunction(10, 2)); // Op is = 20


/*
- The function above does not belong to any object. But in JavaScript there is always a default global object.
- In HTML the default global object is the HTML page itself, so the function above "belongs" to the HTML page.
- In a browser the page object is the browser window. The function above automatically becomes a window function.
*/

/*
Note
- This is a common way to invoke a JavaScript function, but not a very good practice.
- Global variables, methods, or functions can easily create name conflicts and bugs in the global object.

myFunction() and window.myFunction() is the same function:
// Define a global function named myFunction that takes two arguments 'a' and 'b'
function myFunction(a, b) {
  // The function returns the product of a and b
  return a * b;
}

// Call the global function using the window object and log the result to the console
console.log(window.myFunction(10, 2)); // Output: 20

*/

/*
(2) What is this?
- In JavaScript, the this keyword refers to an object.
- The this keyword refers to different objects depending on how it is used:

- In an object method, this refers to the object.
- Alone, this refers to the global object.
- In a function, this refers to the global object.
- In a function, in strict mode, this is undefined.
- In an event, this refers to the element that received the event.
- Methods like call(), apply(), and bind() can refer this to any object.
Note
- this is not a variable. It is a keyword. You cannot change the value of this.
*/

/*
(3) The Global Object :-
- When a function is called without an owner object, the value of this becomes the global object.
- In a web browser the global object is the browser window.
- This example returns the window object as the value of this:
*/
console.log('(3) The Global Object');

// Define the Global Function my Function1
function myFunction(){
    // The function returns the value of 'this' which is the window Object in the global context
    return this;    
}
// Call the Function and store the result in x
let x = myFunction();
console.log(x);
// Output: window object (global object in browser environment)

/*
- Invoking a function as a global function, causes the value of this to be the global object.
Using the window object as a variable can easily crash your program.
*/

/*
(4) Invoking a Function as a Method :-
- In JavaScript you can define functions as object methods.
- The following example creates an object (myObject), with two properties (firstName and lastName), and a method (fullName):

Example
*/
console.log('(4) Invoking a Function as a Method ');

// Create an object 'myObject' with properties 'firstName' and 'lastName', and a method 'fullName'
const myObject = {
    firstName: "Abhishek",
    lastName: "Kumar",

    // Method that returns the full Name using 'this' to access Object Properties
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
// Call the fullName method and log the result to the console
console.log(myObject.fullName());
// Op is = Abhishek Kumar

/*
- The fullName method is a function. The function belongs to the object. myObject is the owner of the function.
- The thing called this, is the object that "owns" the JavaScript code. In this case the value of this is myObject.
*/
/*
Test it! Change the fullName method to return the value of this:
*/
console.log('Test it! Change the fullName method to return the value of this:');

// Create an Object 'myObject' with properties 'firstName', 'lastName' and a method 'fullName'
const myObject1 = {
    firstName: "Abhishek",
    lastName: "Kumar",

    // Method that return 'this', which refers to the owner Object
    fullName: function(){
        return this; // 'this' refers to the owner object
    }
}
// Call the fullName method and log the reult to the console
console.log(myObject1.fullName());

// Op is
// {
//     firstName: 'Abhishek',
//     lastName: 'Kumar',
//     fullName: [Function: fullName]
//   }

/*
(5) Invoking a Function with a Function Constructor :-
- If a function invocation is preceded with the new keyword, it is a constructor invocation.
- It looks like you create a new function, but since JavaScript functions are objects you actually create a new object:

Example
*/
console.log('(5) Invoking a Function with a Function Constructor');

// Define a Function constructor 'myFunction' which assigns values to firstName and lastName
function myFunction(arg1, arg2){
    this.firstName = arg1; // Assigns the first argument to 'firstName'
    this.lastName = arg2; // Assigns the second argument to 'lastName'
}
// Create a new Object 'myobj' using the 'myFunction' constructor
const myObj = new myFunction("Abhishek", "Kumar");

console.log(myObj.firstName);
// Op is = Abhishek

/*
- A constructor invocation creates a new object. The new object inherits the properties and methods from its constructor.
- The this keyword in the constructor does not have a value.
- The value of this will be the new object created when the function is invoked.
*/