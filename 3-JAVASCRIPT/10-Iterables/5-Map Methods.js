/*
(1) JavaScript Map Methods :-

(1) The new Map() Method :-
- You can create a map by passing an array to the new Map() constructor:

Example
*/
console.log('(1) JavaScript Map Methods');
console.log('(1) The new Map() Method');

// Create a Map
const fruit1 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  // Get the number of apples
  let num1 = fruit1.get("apples");
  console.log('There are ' + num1 + " apples.");

  // Op is = There are 500 apples.

/*
(2) Map.get() :-
- You get the value of a key in a map with the get() method

Example
*/
console.log('(2) Map.get()');
// Create a Map
const fruit2 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  // Get the value of apples
  console.log(fruit2.get("apples"));
  // op is = 500

  /*
(3) Map.set() :-
- You can add elements to a map with the set() method:

Example
  */
 console.log('(3) Map.set() ');

// Create a Map
const fruit3 = new Map();

// Set Map Values
fruit3.set("apples", 500);
fruit3.set("bananas", 300);
fruit3.set("oranges", 200);

// Get the value of "apples"
console.log('There are ' + fruit3.get("apples") + "  apples.");

// Op is = There are 500  apples.

/*
- The set() method can also be used to change existing map values:
Example
*/
console.log('The set() method can also be used to change existing map values:');

// Create a Map
const fruit4 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["Oranges", 200]
]);

// Update the value for Apples
fruit4.set("apples", 200);

// Get the Updated value of apples
console.log("There are " + fruit4.get("apples") + " apples.");
// Op is = There are 200 apples.

/*
(4) Map.size :-
- The size property returns the number of elements in a map:
Example
*/
console.log('(4) Map.size');

// Create a Map
const fruit5 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  // Get the size of the map
  console.log('The size of the fruits map is: ' + fruit5.size);
  // Op is = The size of the fruits map is: 3

  /*
(5) Map.delete() :-
- The delete() method removes a map element:

Example
  */
 console.log('(5) Map.delete()');

 // Create a Map
const fruit6 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  // Delete an Element
  fruit6.delete("apples");

  // Log the size of the map after Deletion
  console.log('The size of the fruits map after deletion is:' + fruit6.size);

  /*
(6) Map.clear() :-
- The clear() method removes all the elements from a map:

Example
  */
console.log('(6) Map.clear()');

// Create a Map
const fruit7 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  // Clear the Map
  fruit7.clear();

  // Log the size of the Map after clearing
  console.log('The size of the fruits map after clearing is: ' + fruit7.size);
  // Op is = The size of the fruits map after clearing is: 0
  
/*
(7) Map.has() :-
- The has() method returns true if a key exists in a map:

Example
*/
console.log('(7) Map.has()');

// Create a Map
const fruit8 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
// Check if the Map has a specific key
const hasApples = fruit8.has("apples");

// Log the Result
console.log("Does the fruits map have apples? " + hasApples);
// Op is = Does the fruits map have apples? true

console.log('Example');

// Create a Map
const fruit9 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  // Delete an Element
  fruit9.delete("apples");

  // Check if the Map has the key "apples"
  const hasAppless = fruit9.has("apples");

// Log the result
console.log("Does the fruits map have apples? " + hasAppless);

/* 
(8) Map.forEach() :-
- The forEach() method invokes a callback for each key/value pair in a map:

Example
*/
console.log('(8) Map.forEach()');

// Create a Map
const fruit10 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
// Initialize an empty string for output
let text1 = "";

// Use for Each to iterate over the Map
fruit10.forEach(function(value, key){
    text1 += key + ' = ' + value + "\n"; // Use \n for line breaks in console
});
// Log the result to the console
console.log(text1);

// Op is 
// pples = 500
// bananas = 300
// oranges = 200

/*
(9) Map.entries() :-
- The entries() method returns an iterator object with the [key,values] in a map:

Example
*/
console.log('(9) Map.entries() ');

// Create a Map
const fruit11 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
// Initialize an empty string for output
let text2 = "";

// Use entries() method to get an iterator for key-value pairs
for(const entry of fruit11.entries()){
    text2 += entry + "\n"; // Use \n for line breaks in console
}
console.log(text2);
// Op is =
// apples,500
// bananas,300
// oranges,200

/*
(10) Map.keys() :-
- The keys() method returns an iterator object with the keys in a map:

Example
*/
console.log('(10) Map.keys()');

// Create a Map
const fruit12 = new Map([
    ["apples",500],
    ["bananas",300],
    ["Oranges",200]
]);

// Initialize an empty string for output
let text3 = "";

// Use keys() method to get an iterator for the keys
for(const key of fruit12.keys()){
    text3 += key + "\n";
}
console.log(text3);
// Op is =
// apples
// bananas
// Oranges

/*
(11) Map.values() :-
- The values() method returns an iterator object with the values in a map:

Example
*/
console.log('(11) Map.values() ');

// Create a Map
const fruit13 = new Map([
    ["apples",500],
    ["bananas",300],
    ["Oranges",200]
]);
// Initialize an empty string for output
let text4 = "";

// Use values() method to get an iterator for the values
for(const value of fruit13.values()){
    text4 += value + "\n"; // Use \n for line breaks in console
}
// Log the result to the console
console.log(text4);
// Op  is =
// 500
// 300
// 200

/* You can use the values() method to sum the values in a map: */
console.log('You can use the values() method to sum the values in a map:');

// Create a Map
const fruit14 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
// Initialize total
let total = 0;

// Iterate over the values and sum them up
for(const value of fruit13.values()){
    total += value;
}
// Log to the total sum to the console
console.log("Total sum of all fruit values:", total);

// Op is = Total sum of all fruit values: 1000

/*
(12) Objects as Keys :-
- Being able to use objects as keys is an important Map feature.

Example
*/
console.log('(12) Objects as Keys');

// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const Oranges = {name: 'Oranges'};

// Create a Map
const fruit15 = new Map();

// Add the Objects to the Map
fruit15.set(apples,500);
fruit15.set(bananas,300);
fruit15.set(Oranges,200);

// Retrieve and log the value associated with 'apples'
console.log('Number of apples:', fruit15.get(apples));

// Op is = Number of apples: 500

/*
- Remember: The key is an object (apples), not a string ("apples"):

Example
*/
console.log('Remember: The key is an object (apples), not a string ("apples"):');

// Create Objects
const apple = { name: 'Apples' };
const banana = { name: 'Bananas' };
const orange = { name: 'Oranges' };

// Create a Map
const fruit16 = new Map();

// Add Elements to the Map
fruit16.set(apple, 500);
fruit16.set(banana, 300);
fruit16.set(orange, 200);

// Trying to Retrieve value using Incorrect KKey
console.log(fruit16.get("apples")); 
// Op is = // This will log 'undefined' because "apples" is not the key.

// Correct way to retrieve the value using the 'apples' object
console.log(fruit16.get(apple));
// This will log 500 as the key is the object 'apples'

/*
(13) JavaScript Map.groupBy() :-
- ES2024 added the Map.groupBy() method to JavaScript.
- The Map.groupBy() method groups elements of an object according to string values returned from a callback function.
- The Map.groupBy() method does not change the original object.
*/
console.log('(13) JavaScript Map.groupBy() ');
// Create an Array
const fruit17 = [
    {name: "apples", quantity: 300},
    {name: "bananas", quantity: 500},
    {name: "oranges", quantity: 200},
    {name: "kiwi", quantity: 150}
];

// Callback function to select low volumes
function myCallback({ quantity }) {
    return quantity > 200 ? "Ok" : "low"; // Make sure this returns "Ok" to match the Map key
}

// Group by ok and low
const result = new Map();
result.set("Ok", []);  // "Ok" matches the callback return value
result.set("low", []); // "low" remains unchanged

for (const fruit of fruit17) {
    const group = myCallback(fruit);  // Callback returns "Ok" or "low"
    result.get(group).push(fruit);    // Push fruit to the appropriate group
}

// Display Results in the console
console.log("These fruits are Ok:");
for (let x of result.get("Ok")) {  // Make sure to access "Ok"
    console.log(`${x.name} - ${x.quantity}`);
}

console.log("\nThese fruits are low:");
for (let x of result.get("low")) {
    console.log(`${x.name} - ${x.quantity}`);
}
// Op is =
// These fruits are Ok:
// apples - 300
// bananas - 500

// These fruits are low:
// oranges - 200
// kiwi - 150

/*
Object.groupBy() vs Map.groupBy() :-
- The difference between Object.groupBy() and Map.groupBy() is:
- Object.groupBy() groups elements into a JavaScript object.
- Map.groupBy() groups elements into a Map object.
*/
