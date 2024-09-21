/*
            Const
Const:- It Configures a block Scope variable.
-> It allows only Initialization.
-> It will not allow declaring and Assignment.
-> It is more restricted.

const x; // invalid
x=10;    // invalid
const x = 10; // valid
x = 20;   // invalid
-> It will not allow Shadowing and Hoisting.

*/

function demo() {
    const x = prompt("Enter Number"); // Prompt the user to enter a number
    console.log("x=" + x); // output the value to the console
}
demo(); // call the function

