/*
Iterator Statements :-

- Iterables are iterable objects (like Arrays).
- Iterables can be accessed with simple and efficient code.
- Iterables can be iterated over with for..of loops

- Iterator is a software design pattern, which is used to access elements from a collection in sequential order.
- It doesn't require initialization, condition and counter.
- Iterator uses a function generator, which allows to read and return a collection.
- Generator is a function that comprises of
        a) next()        => for counter
        b) done        => for condition
        c) value        => for reading values from collection
- JavaScript explicit iterators are

        for..in        => reads and returns all properties
        for..of        => reads and returns all values

Syntax:
    for (var property in collection)
    {
    }
   
    for (var value of collection)
    {
    }

*/
console.log('Iterator Statements');

/*
The For In Loop:-

- The JavaScript for in statement loops through the properties of an Object:

Syntax
for (key in object) {
  // code block to be executed
}
*/
console.log('For In');

// Create an Object
const person = {
        fname : "Abhishek",
        lname : "Kumar",
        age : 26
};

// Iterable over the properties of the Object
for(let x in person) {
        console.log(person[x]);
}
// Op is
// Abhishek
// Kumar
// 26

/*
Example Explained
- The for in loop iterates over a person object
- Each iteration returns a key (x)
- The key is used to access the value of the key
- The value of the key is person[x]

*/

/*
For In Over Arrays :-

- The JavaScript for in statement can also loop over the properties of an Array:

Syntax
for (variable in array) {
  code
}
*/
console.log('For In Over Arrays');

// Create an Array
const numbers = [45, 4, 9, 16, 25];

// Iterate Over the array using for ..in loop
for(let x in numbers){
        console.log(numbers[x]);
}
// Op is = 45 4 9 16 25

/*
Note:-
- Do not use for in over an Array if the index order is important.

- The index order is implementation-dependent, and array values may not be accessed in the order you expect.

- It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
*/

/*
Array.forEach() :-

-forEach is a method in JavaScript that is used to iterate over elements in an array.
 It executes a provided function once for each array element.
Unlike for...in or for...of loops, forEach is specifically designed to operate on arrays, and it provides a more functional approach to iteration.

- The forEach() method calls a function (a callback function) once for each array element.

Syntax :-
array.forEach(function(currentValue, index, array) {
  // code to be executed for each element
});
*/

console.log('forEach()');

// create an Array
const number = [45, 4, 9, 16, 25];

// Use the forEach method to iterate over the array
number.forEach(myFunction);

// Define the function that will be called for each element
function myFunction(value, index, array){
        console.log(`Index: ${index}, value: ${value}`);
}
// Op is 
// Index: 0, value: 45
// Index: 1, value: 4
// Index: 2, value: 9
// Index: 3, value: 16
// Index: 4, value: 25
/*
Note that the function takes 3 arguments:

The item value
The item index
The array itself
The example above uses only the value parameter. It can be rewritten to:
*/

// Example 2 
const num = [45, 4, 9,16,25];
num.forEach(myFunctions);

function myFunctions(value){
        console.log(value);
}
// op is 
// 45
// 4
// 9
// 16
// 25


/*
The For Of Loop :-

- The JavaScript for of statement loops through the values of an iterable object.

- It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

Syntax
for (variable of iterable) {
  // code block to be executed
}
*/

console.log('For Of ');

// Looping over an Array
console.log('Looping over an Array');

// Create an Array
const cars = ["BMW", "Volvo", "Mini"];

// Use the for of loop to iterate over the array
for(let x of cars){
        console.log(x);
}
// Op is :-
// BMW
// Volvo
// Mini

// Looping over a String
console.log('Looping over a String');

// Create a String
let language = "Abhishek";

// Use the for of loop to iterate over the string
for(let x of language){
        console.log(x);
}
// Op is A b h i s h e k