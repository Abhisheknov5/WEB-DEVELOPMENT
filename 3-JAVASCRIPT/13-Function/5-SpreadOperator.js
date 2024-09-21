/*
Spread Operator:-
- ES5+ version introduced the spread operator syntax for various collections, which allows to configure one argument that can spread into multiple parameters.
- The spread operator (...) in JavaScript is used to unpack elements from an iterable object (such as an array) and spread them out into individual elements.
Syntax:
    function Name(a, b, c, d)
    {
    }
    var val = [10, 20, 30, 40];
    Name(...val);
*/
//Example = 1
console.log("Example 1");

// Define the Details Function to Display Product Information
function Details(id, name, price, stock){
    // Output Product Details to the console
    console.log(`
        Id = ${id};
        Name = ${name};
        Price = ${(price !== undefined) ? price : "N/A"}
        Stock = ${stock}
        `);
}
// Array containing Product Details
var values = [101, "Nike Casuals", 5000.44, true];

// Call the Details function with array as arguments using spread operator
Details(...values);

// Output is:
// Id = 101;
// Name = Nike Casuals;
// Price = 5000.44
// Stock = true

// Example=2
console.log("Example 2");

var one = ["A", "B", "C", ]; // Array with elements "A","B","C"
var two = "D"; // Single String "D"
var result = [...one, two]; // Spread the array "one" and then add "two"
console.log(result); // Output the Result

// Op is [ 'A', 'B', 'C', 'D' ]

var one = ["A", "B", "C", "D"]; // Array with elements "A", "B", "C", "D"
var two = ["E", "F", "G", "H"]; // Array with elements "E", "F", "G", "H"
var result = [...one, ...two];  // Spread the elements of both arrays into a new array
console.log(result);           // Output the result array

// op is [
//   'A', 'B', 'C',
//   'D', 'E', 'F',
//   'G', 'H'
// ]



// Key Uses
console.log("KEY USES");
/*
Key Uses:
Function Calls:-

Spread Arguments: Pass elements of an array as individual arguments to a function.
*/
console.log("Function Calls");

function sum(a, b, c){
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

/*
Array Literals:-

Combining Arrays: Create a new array by combining elements of existing arrays.
*/
console.log("Array Literals");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [ 1, 2, 3, 4, 5, 6 ]

/*
Object Literals:-

Merging Objects: Merge properties from multiple objects into one.
*/
console.log("Object Literals");
const obj1 = { a: 1, b: 2};
const obj2 = { b: 3, c: 4};
const merged = { ...obj1, ...obj2};
console.log(merged);

// { a: 1, b: 3, c: 4 }