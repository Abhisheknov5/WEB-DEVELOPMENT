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

- Iterating over a String
- Iterating over an Array

*/
/*
(1) Iterating Over a String :-

You can use a for..of loop to iterate over the elements of a string.
*/
console.log(' The For Of Loop');
console.log('(1) Iterating Over a String');

// Create a String
const name = "Abhishek";

// List all Elements
for(const x of name) {
        console.log(x);
}
// Op is Abhishek

/*
(2) Iterating Over an Array:-

- You can use a for..of loop to iterate over the elements of an Array.
*/
console.log('(2) Iterating Over an Array 1');

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
(3) Iterating Over a Set :-

- You can use a for..of loop to iterate over the elements of a Set:
*/
console.log('(3) Iterating Over a Set ');

// Create a set
const a = new Set(["a","b","c","d","e","f"]);

for(const x of a){
        console.log(x);
}
// Op is = a b c d e f
/*
(4) Iterating Over a Map:-

- You can use a for..of loop to iterate over the elements of a Map:
*/

console.log('(4) Iterating Over a Map');

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
(5) JavaScript Iterators :-
- The iterator protocol defines how to produce a sequence of values from an object.
- An object becomes an iterator when it implements a next() method.
- The next() method must return an object with two properties:

- value (the next value)
- done (true or false)

value :- The value returned by the iterator
(Can be omitted if done is true)

done :-	true if the iterator has completed
false if the iterator has produced a new value

Note:-
- Technically, iterables must implement the Symbol.iterator method.
- String, Array, TypedArray, Map and Set are all iterables, because their prototype objects have a Symbol.iterator method.

(6) Home Made Iterable :-
- This iterable returns never ending: 10,20,30,40,.... Everytime next() is called:
*/
console.log('(5) JavaScript Iterators');
console.log('(6) Home Made Iterable');

// Home iterable
// This function returns an object with a `next()` method that generates numbers
function myNumbers(){
    // Initialize the number at 0
    let n = 0;
    return {
        // The next method increments n by 10 and returns the new value
        next: function() {
            n += 10;
            // Return object with the current value and done set to false
            return {value: n, done: false};

        }
    };
}
// Create an Instance of the Iterables
const n = myNumbers();

// Calling the next() method and logging the result to the console
console.log(n.next().value); // Op is = 10
console.log(n.next().value); // Op is = 20
console.log(n.next().value); // Op is = 30
console.log(n.next().value); // Op is = 40
/*
/*
- The problem with a home made iterable:
- It does not support the JavaScript for..of statement.

(7) Symbol.iterator :-
- A JavaScript iterable is an object that has a Symbol.iterator.
- The Symbol.iterator is a function that returns a next() function.
- An iterable can be iterated over with the code: for (const x of iterable) { }
*/
console.log('(7) Symbol.iterator ');
/*
// Create an empty object
const myNumbers = {};

// Make the object iterable by assigning the Symbol.iterator method
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  let done = false;
  
  // Return the iterator object with the next() method
  return {
    next() {
      // Increment n by 10
      n += 10;
      
      // When n reaches 100, set done to true to stop iteration
      if (n == 100) {
        done = true;
      }
      
      // Return the current value of n and the status of 'done'
      return {value: n, done: done};
    }
  };
};

// Using a for..of loop to iterate over the iterable object
for (const num of myNumbers) {
  console.log(num); // Outputs the current value of num
}
 // Op is : 10 20 30 40 50 60 70 80 90
*/

/*
- The Symbol.iterator method is called automatically by for..of.
- But we can also do it "manually":

// Create an Object
const myNumbers = {};

// Make the object iterable by assigning the Symbol.iterator method
myNumbers[Symbol.iterator] = function() {
  let no = 0;
  let done = false;
  
  // Return an iterator object with the next() method
  return {
    next() {
      // Increment no by 10
      no += 10;
      
      // When no reaches 100, set done to true to stop iteration
      if (no == 100) {
        done = true;
      }
      
      // Return the current value of no and the status of 'done'
      return { value: no, done: done };
    }
  };
};

// Create an Iterator
let iterator = myNumbers[Symbol.iterator]();

// Use a while loop to iterate until done is true
while (true) {
  const result = iterator.next();
  
  // Break the loop if done is true
  if (result.done) break;
  
  // Output the value of result to the console
  console.log(result.value);  // Outputs 10, 20, 30, ... up to 90
}
// Op is : 10 20 30 40 50 60 70 80 90
*/





