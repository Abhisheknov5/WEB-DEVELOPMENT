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
(1) The For Of Loop :-
- The JavaScript for..of statement loops through the elements of an iterable object.

Syntax
for (variable of iterable) {
  // code block to be executed
}

Iterating :-

- Iterating is easy to understand.

- It simply means looping over a sequence of elements.

-Here are some easy examples:

Iterating over a String
Iterating over an Array

*/
/*
Iterating Over a String :-

You can use a for..of loop to iterate over the elements of a string.
*/
console.log(' The For Of Loop');
console.log('1 Iterating Over a String');

// Create a String
const name = "Abhishek";

// List all Elements
for(const x of name) {
        console.log(x);
}
// Op is Abhishek

/*
Iterating Over an Array:-

- You can use a for..of loop to iterate over the elements of an Array.
*/
console.log('2 Iterating Over an Array 1');

const letters = ["a","b","c","d"];

for(const x of letters){
        console.log(x);
}
// Op is a b c d

console.log('2 Iterating Over an Array 2');

// Create an Array
const numbers = [2,4,6,8];

for(const x of numbers) {
        console.log(x);
}
// Op is 2 4 6 8

/*
Iterating Over a Set :-

You can use a for..of loop to iterate over the elements of a Set:
*/
console.log('3 Iterating Over a Set');

// Create a set
const a = new Set(["a","b","c","d","e","f"]);

for(const x of a){
        console.log(x);
}

/*
Iterating Over a Map:-

You can use a for..of loop to iterate over the elements of a Map:
*/

console.log('4 Iterating Over a Map');

// Create a Map
const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["Oranges", 200]
]);
// List all Entries
let text = "";
for(const x of fruits){
        
        //console.log(x);
        console.log(x[0] + "," + x[1]);  // Logs in key,value format
}
// Op is 
// apples,500
// bananas,300
// Oranges,200

/*
In short, console.log(x[0] + "," + x[1]); does the following:

x[0] is the key from the Map (e.g., "apples").
x[1] is the value (e.g., 500).
The + operator concatenates the key, a comma ,, and the value into a single string (e.g., "apples,500").
console.log() then prints this string to the console.
It outputs each map entry in the key,value format.
*/





