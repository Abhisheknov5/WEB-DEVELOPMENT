// Const
/*
const:-
The const keyword was introduced in ES6 (2015).
Variables defined with const cannot be Redeclared.
Variables defined with const cannot be Reassigned.
Variables defined with const have Block Scope.

Cannot be Reassigned:-
A const variable cannot be reassigned.

console.log('A const variable cannot be reassigned.');
try {
    const PI = 3.141592653589793; // Declare and initialize a constant PI
    PI = 3.14; // Attempt to reassign a new value to PI (not allowed for const)
  } catch (err) {
    console.error(err); // Catch and log the error
  }
  o/p:- Assignment to constant variable.
*/

/*
Must be Assigned
JavaScript const variables must be assigned a value when they are declared.
const PI = 3.14159265359; // Correct

const PI;
PI = 3.14159265359;// Incorrect
*/

/*
When to use JavaScript const?
Always declare a variable with const when you know that the value should not be changed.
Use const when you declare:
A new Array
A new Object
A new Function
A new RegExp
*/

/*
Constant Objects and Arrays
The keyword const is a little misleading.
It does not define a constant value. It defines a constant reference to a value.
Because of this you can NOT:-

Reassign a constant value
Reassign a constant array
Reassign a constant object

But you CAN:-

Change the elements of constant array
Change the properties of constant object
Constant Arrays
You can change the elements of a constant array.
*/
console.log('You can change the elements of a constant array.');
// You can create a constant array
const cars = ["Magnite", "Volvo", "BMW"];

// You can change an element
cars[0] = "Verna";

// you can add an element
cars.push("Audi");
console.log(cars);

/*
But you can NOT reassign the array.
Example
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR
*/

/*
Constant Objects:-
You can change the properties of a constant object:
*/
console.log('Constant Object');
// You can create a const Object.
const carss = {type:"Fiat", model:"500", color:"white"};

// You can change a property
carss.color = "red";

// You can add a property
carss.owner = "John";
console.log("car owner is " + carss.owner);

/*
But you can NOT reassign the object:
Example
const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
*/

/*
What is Good?
let and const have block scope.
let and const can not be redeclared.
let and const must be declared before use.
let and const does not bind to this.
let and const are not hoisted.

What is Not Good?
var does not have to be declared.
var is hoisted.
var binds to this.
*/

/*
Block Scope :-
Declaring a variable with const is similar to let when it comes to Block Scope.
The x declared in the block, in this example, is not the same as the x declared outside the block.
*/
console.log('Block Scope');
const x = 10;
{
    const x = 2;
}
console.log("JavaScropt const variables has block scope:",x);

/*
Redeclaring :-
Redeclaring a JavaScript var variable is allowed anywhere in a program:
Example
var x = 2;     // Allowed
var x = 3;     // Allowed
x = 4;         // Allowed
Redeclaring an existing var or let variable to const, in the same scope, is not allowed:
Example
var x = 2;     // Allowed
const x = 2;   // Not allowed

{
let x = 2;     // Allowed
const x = 2;   // Not allowed
}

{
const x = 2;   // Allowed
const x = 2;   // Not allowed
}
Reassigning an existing const variable, in the same scope, is not allowed:

Example
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}
Redeclaring a variable with const, in another scope, or in another block, is allowed:

Example
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}
*/

/*
Hoisting :-
Variables defined with var are hoisted to the top and can be initialized at any time.
Meaning: You can use the variable before it is declared.
*/
console.log('Hoisting');
carName = "Magnite";
var carName;
console.log(carName);
