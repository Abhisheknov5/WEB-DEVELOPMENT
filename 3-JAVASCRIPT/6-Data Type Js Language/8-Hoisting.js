/*
        Hoisting
Hoisting:- Hoisting is the process of configuring a Variable declaration or initialization after 
using the Variable.
-> There is no Order dependency for declaring and using.
-> Only var is allow to Hoist.
*/
"use strict";
function demo() {
    var x; // Declaring
    x = 10; // Assigning
    console.log("x=" + x); // Output of the console
}
demo() 
// Output  is =  10