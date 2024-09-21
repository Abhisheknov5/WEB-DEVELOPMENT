/*
Function with Return :-
- Every function is "void" by default.
- It will not return the memory allocated.
- Void disposes the memory allocated for function.
- Hence any action and result of a function is not accessible outside the function.
- You can configure a function to return its memory, so that we store values and access from any another location.

Syntax:
        function Name()
        {
           return  any;
        }
*/
//Example = 1
console.log("Example = 1");

// Declare a variable to store the result of the Addition.
let c;

// Function to perform Addition and store the result in c.
function Addition(a,b) {
    c = a + b;
}
// Call the Addition function with the values 40 and 50
Addition(40, 50);

// Function to Print the result to the console
function Print() {
    console.log("Addition=" + c);
}
// Call the Print function to output the result
Print(); // 90

// Example = 2
console.log("Example = 2");
// Function to perform addition and return the result
function Addition(a, b) {
    return a + b;
}
// Function to Print the Result of the Addition Function
function Print(){
    console.log("Addition=" + Addition(10, 20));
}
// Call the Print function to display the result
Print();

/*
FAQ: Can we use "return" in a void function?
Ans: Yes.

FAQ: What is the role of "return" is a void function?
Ans: It is used to add "stub", which configures un-reachable code.
*/

// Example = 3
console.log("Example = 3");

// Define The Print Function
function Print() {
    // Print the first statement to the console
    console.log("Statement-1");
    console.log("Statement-2");
    console.log("Statement-3");

    // Return from the Function Stopping further Execution
    return;

    // The following statements will not be executed
    console.log("Statement-4");
    console.log("Statement-5");

}
Print();
// Op is 
// tatement-1
// Statement-2
// Statement-3

/*
- A function return can be any type
    a) Primitive
    b) Non Primitive
    c) Function
*/
