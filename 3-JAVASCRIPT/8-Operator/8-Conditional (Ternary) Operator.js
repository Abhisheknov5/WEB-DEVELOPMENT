/*
Conditional (Ternary) Operator :-

- JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

Syntax
variablename = (condition) ? value1:value2 
Example
*/
// console.log('Conditional (Ternary) Operator ');

// function checkVotingEligibility() {
//     let age = prompt("Please enter your age:");
//     let voteable = (age < 18) ? "Too young" : "Old enough";
//     console.log(voteable + " to vote.");
//   }
  
//   checkVotingEligibility();
  

/*
Comparing Different Types :-
- Comparing data of different types may give unexpected results.
- When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN which is always false.

Case	  Value	
2 < 12	   true	
2 < "12"	true	
2 < "John"	false	
2 > "John"	false	
2 == "John"	false	
"2" < "12"	false	
"2" > "12"	true	
"2" == "12"	false
*/
console.log('Comparing Different Types');

console.log('2 < 12:', 2 < 12);               // true
console.log('2 < "12":', 2 < "12");           // true
console.log('2 < "John":', 2 < "John");       // false
console.log('2 > "John":', 2 > "John");       // false
console.log('2 == "John":', 2 == "John");     // false
console.log('"2" < "12":', "2" < "12");       // false
console.log('"2" > "12":', "2" > "12");       // true
console.log('"2" == "12":', "2" == "12");     // false

/*
The Nullish Coalescing Operator (??) :-
- The ?? operator returns the first argument if it is not nullish (null or undefined).

-Otherwise it returns the second argument.
Example
*/
console.log('The Nullish Coalescing Operator (??)');

let name = null;  // Declare a variable with a null value
let text = "missing";  // Declare a variable with the string "missing"

// Use the nullish coalescing operator to check for null or undefined
let result = name ?? text;  

// Log the result to the console
console.log("The name is " + result); 
// OP is = The name is missing

/*
The Optional Chaining Operator (?.) :-
- The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

Example
*/
console.log('The Optional Chaining Operator (?.) ');

// Define a car object with some properties
const car = { type: "Fiat", model: "500", color: "white" };

// Use the optional chaining operator to access the 'name' property
let names = car?.names;  // This will return undefined since 'name' does not exist

// Log the result to the console
console.log("Car name is:", names);

// op is = Car name is: undefined
