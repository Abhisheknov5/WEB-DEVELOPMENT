/*
Variable Naming

Variable Naming:- Variable Name must start with an Alphabet.
-> You can start with "_" but not recommended to use Special Characters.
-> It can have alpha numeric name.
-> It can not be a Keyword.
var Sales2023; // valid
var 2023Sales; // invalid
var _2023; // Valid
var for; // invalid
var class; //invalid
-> It can be max 255 char long[ECMA].
-> It must speak what it is
var userName;
var userAge;


Global Scope for Variable :-

Global Scope for Variable:- It refers to Variable, which is accessible to all functions.
-> To make a Variable global in scope, You have to declare or initialize at module level.
-> module level means 
     <script>           index.js
        // module       //module
     </script>
-> You can declare  or initialize global variables using var, let and const.


*/
// Module
var x = 10;   // Function-scoped variable
let y = 20;  // Block-scoped variable
let z = 30;  // Block-scoped constant

// Function to print variable values
function f1() {
    console.log("Function-1");
    console.log("x=" + x); // 10
    console.log("y=" + y); // 20
    console.log("z=" + z); // 30
}

// Function to print variable values
function f2() {
    console.log("Function-2");
    console.log("x=" + x); // 10
    console.log("y=" + y); // 20
    console.log("z=" + z); // 30
}
f1();
f2();

