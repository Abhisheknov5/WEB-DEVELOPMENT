/*
JavaScript Functions:- 

- Function is used to "refactor" the code.
- Refactor is the process of extracting a set of lines and storing under one reference. So that you can reuse the lines. [code snippet]
- A function can be configured in 2 ways

        1. Function Declaration
        2. Function Expression

Function Declaration:

    function  Name()
    {
    }

Function Expression:

    var Name = function(){

    }

- A function declaration configure memory to handle specific functionality always.
- A function expression configures memory that changes the functionality according to state and situation.

*/

// Function Declaration
function Hello(){
    console.log("Hello! JavaScript");
}

// Function Expression
var welcome = function(){
    console.log("Welcome to JavaScript");
}

// Call the Function
Hello();
welcome();

var password = prompt("Enter Password"); // Prompt user to enter a password
var result;

if (password === "admin") {
    result = function() {
        console.log("Verified successfully.."); // Print success message to console
    };
} else {
    result = function() {
        console.log("Invalid password"); // Print error message to console
    };
}

result(); // Call the function to display the result

/*
 Configuring Declaration:-

- A function is configured using "function" keyword.
- It have 3 phases

        a) Declaration
        b) Signature
        c) Definition

    function  Print()
    {

    }

    function Print()        => Declaration
    Print()                => Signature
    { }                    => Definition



*/