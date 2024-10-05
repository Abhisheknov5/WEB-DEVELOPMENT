/*
(1) JavaScript Maps :-
- A Map holds key-value pairs where the keys can be any datatype.
- A Map remembers the original insertion order of the keys.

(2) How to Create a Map :-

- You can create a JavaScript Map by:
- Passing an Array to new Map()
- Create a Map and use Map.set()

(3) The new Map() Method :-
- You can create a Map by passing an Array to the new Map() constructor:
*/
console.log('(1) JavaScript Maps ');
console.log('(2) How to Create a Map ');
console.log('(3) How to Create a Map ');

// Create a Map
const fruit1 = new Map([
    ["apples", 500],
    ["banans", 300],
    ["Oranges", 200]
]);

// Retrieve the number of apples
let num1 = fruit1.get("apples");

// Output the result to the console
console.log("There are " + num1 + " apples.");

// Op is = There are 500 apples.
/*
(4) The set() Method :-
- You can add elements to a Map with the set() method:

Example
*/
console.log('(4) The set() Method');

// Create a Map
const fruit2 = new Map();

// Set Map Values
fruit2.set("apples", 500);
fruit2.set("bananas", 300);
fruit2.set("Oranges", 200);

// Retrieve the number of Apples
let num2 = fruit2.get("apples");

// Output the result to the console
console.log('There are ' + num2 + " apples.");

// op is = There are 500 apples.

/*
The set() method can also be used to change existing Map values:
*/
// Create a Map
const fruit3 = new Map([
    ["apples", 400],
    ["banans", 300],
    ["Oranges",200]
]);
// Update the value of "apples"
fruit3.set("apples", 500);

// Retrieve the number of apples
let num3 = fruit3.get("apples");

// Output the result to the console
console.log('There are ' + num3 + " apples.");
// op is = There are 500 apples.

/*
(5) The get() Method :-
- The get() method gets the value of a key in a Map:

Example
*/
console.log('(5) The get() Method');

// Create a Map
const fruit4 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["Oranges", 200]
]);
// Retriev the value of "apples"
let applesCount = fruit4.get("apples");

// Output the reult to the console
console.log(applesCount);
// Op is 500

/*
(6) Maps are Objects :-
- typeof returns object:
*/
console.log('(6) Maps are Objects ');

// Create a Map
const fruit5 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["Oranges", 200]
]);

// Output the type of the map Object to the Console
console.log(typeof fruit5);
// Op is = object

/*
instanceof Map returns true:
*/
console.log('instanceof Map returns true:');

// Create a Map
const fruit6 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["Oranges", 200]
]);
// Check if 'fruits' is an Instance of map and log it to the console
console.log(fruit6 instanceof Map);
// Op is = true

/*
JavaScript Objects vs Maps
Differences between JavaScript Objects and Maps:

Object                                      Map
                            
Not directly iterable	            Directly iterable
Do not have a size property  	    Have a size property
Keys must be Strings (or Symbols)   Keys can be any datatype
Keys are not well ordered	         Keys are ordered by insertion
Have default keys	                 Do not have default keys
*/