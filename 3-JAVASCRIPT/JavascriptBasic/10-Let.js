// let ///
/*
The let keyword was introduced in ES6 (2015).
Variables defined with let cannot be Redeclared.
Variables defined with let must be Declared before use.
Variables defined with let have Block Scope.
Cannot be Redeclared
Variables defined with let can not be redeclared.
You can not accidentally redeclare a variable declared with let.

With let you can not do this:-
let x = "John Doe";
let x = 0;

With var you can:
var x = "John Doe";
var x = 0;
*/

/*
Block Scope:-
Before ES6 (2015), JavaScript had Global Scope and Function Scope.
ES6 introduced two important new JavaScript keywords: let and const.
These two keywords provide Block Scope in JavaScript.
Variables declared inside a { } block cannot be accessed from outside the block:
Example
{
  let x = 2;
}
// x can NOT be used here

Variables declared with the var keyword can NOT have block scope.
Variables declared inside a { } block can be accessed from outside the block.
Example
{
  var x = 2;
}
// x CAN be used here
*/

/*
Redeclaring Variables:-
Redeclaring a variable using the var keyword can impose problems.
Redeclaring a variable inside a block will also redeclare the variable outside the block:
*/
console.log('Redeclaring Variables');
var x = 10; // Here x is 10
{
    var x = 2; // Here x is 2
}
console.log("Redeclaring Variables=", x);

/*
Redeclaring a variable using the let keyword can solve this problem.
Redeclaring a variable inside a block will not redeclare the variable outside the block.
*/

let y = 10;
{
    let y = 2;
}
console.log("Redeclaring Variables=", y);

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
Redeclaring:-
Redeclaring a JavaScript variable with var is allowed anywhere in a program.
*/
console.log('Redeclaring');
var x1 = 2;
var x1 = 3;
console.log('Redeclaring:', x1);

/*
With let, redeclaring a variable in the same block is NOT allowed.
Example
var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x = 2;   // Allowed
let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}
*/

/*
Redeclaring a variable with let, in another block, IS allowed.
*/
console.log('Redeclaring a variable with let, in another block, IS allowed:');
let x2 = 2; // Allowed
{
    let x2 = 3; // Allowed
}
{
    let x2 = 4; // Allowed
}
console.log(x2);

/*
Let Hoisting :-
Variables defined with var are hoisted to the top and can be initialized at any time.
Meaning: You can use the variable before it is declared.
*/
console.log('Let Hoisting');
nickName = "Appu";
console.log(nickName);
var nickName;
