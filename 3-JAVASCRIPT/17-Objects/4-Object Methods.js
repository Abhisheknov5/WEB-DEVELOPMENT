/*
(1) JavaScript Object Methods
(1) General Methods
(2) JavaScript Object.entries()
(3) JavaScript Object.fromEntries()
(4) JavaScript Object.values()
(5) JavaScript Object.groupBy()
(6) JavaScript Object.keys()
(7) JavaScript for...in Loop
*/

/*
(1) JavaScript Object Methods :-
- JavaScript Object Methods can be grouped into:

(1) General Methods 
(2) Property Management Methods
(3) Object Protection Methods

*/
/*
(1) General Methods :-

// Copies properties from a source object to a target object
Object.assign(target, source)

// Creates an object from an existing object
Object.create(object)

// Returns an array of the key/value pairs of an object
Object.entries(object)

// Creates an object from a list of keys/values
Object.fromEntries()

// Returns an array of the keys of an object
Object.keys(object)

// Returns an array of the property values of an object
Object.values(object)

// Groups object elements according to a function
Object.groupBy(object, callback)
*/
console.log('(1) JavaScript Object Methods');
console.log('(1) General Methods');

/*
(1) JavaScript Object.assign() :-
- The Object.assign() method copies properties from one or more source objects to a target object.
*/
console.log('(1) JavaScript Object.assign() ');

// Create Target Object
const Person1 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    age: 25,
    eyeColor: "black"
};

// Create Source Object
const Person2 = { firstName: "Akash", lastName:"Kumar"};

// Assign Source to Target
Object.assign(Person1, Person2);

// Display Target in the consle
const text1 = Object.entries(Person1);
console.log(text1);

// Op is =
// [
//     [ 'firstName', 'Akash' ],
//     [ 'lastName', 'Kumar' ],
//     [ 'age', 25 ],
//     [ 'eyeColor', 'black' ]
//   ]

/*
(2) JavaScript Object.entries() :-
- ECMAScript 2017 added the Object.entries() method to objects.

- Object.entries() returns an array of the key/value pairs in an object:

*/
console.log('(2) JavaScript Object.entries() ');

const Person3 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    age: 25,
    eyeColor: "black"
};

// Get the key/value pairs as an array
let entries = Object.entries(Person3);

// Display the entries in the console
console.log(entries);

// Op is =
// [
//     [ 'firstName', 'Abhishek' ],
//     [ 'lastName', 'Kumar' ],
//     [ 'age', 25 ],
//     [ 'eyeColor', 'black' ]
//   ]

/*
Object.entries() makes it simple to use objects in loops:
*/
console.log('Object.entries() makes it simple to use objects in loops:');

// Create an object to store fruit quantities
const fruit1 = { Apple: 300, Oranges: 200, Bananas: 100};
// Initialize an empty string to accumulate the output
let text2 = ""; 

// Loop through each key/value pair in the fruits object
for(let [fruit, amount] of Object.entries(fruit1)){
       // Append the fruit and its amount to the text string, followed by a newline
      text2 += fruit + ":" + amount + "\n";
}
// Displaying the accumulated results in the console
console.log(text2);

// Op is =
// Apple:300
// Oranges:200
// Bananas:100

/*
Object.entries() also makes it simple to convert objects to maps:
*/
console.log('Object.entries() also makes it simple to convert objects to maps:');

// Create an object to store fruit quantities
const fruit2 =  { Apple: 300, Oranges: 200, Bananas: 100};

// Convert the Object to a map
const myMap = new Map(Object.entries(fruit2));

// Display the Map in the console
console.log(myMap);

// Op is =
// Object.entries() also makes it simple to convert objects to maps:
// Map(3) { 'Apple' => 300, 'Oranges' => 200, 'Bananas' => 100 }


/*
(3) JavaScript Object.fromEntries() :-
- The fromEntries() method creates an object from a list of key/value pairs.
*/
console.log('(3) JavaScript Object.fromEntries()');

// Array of key and value Pairs Representing fruits and their quantites
const fruit3 = [
    ["apples", 300],
    ["bananas", 100],
    ["PineApple", 500]
];

// Convert the Array of a key-value pairs into an Object
const myObj = Object.fromEntries(fruit3);

// Log the value associated with "pears" from the newly created object
console.log('The number of PineApple are:' + myObj.PineApple);

// Op is = The number of PineApple are: 500

/*
(4) JavaScript Object.values() :-
- Object.values() is similar to Object.entries(), but returns a single dimension array of the object values:
- Object.values() is supported in all modern browsers since March 2017:
*/
console.log('(4) JavaScript Object.values()');

// Define an Object Representing a Person
const Person4 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    age: 26,
    eyeColor: "black"
};
// Get an Array of the values fro the Person Object
let values = Object.values(Person4);

// Log the array of values to the console
console.log(values);

// Op is = [ 'Abhishek', 'Kumar', 26, 'black' ]

/*
(5) JavaScript Object.groupBy() :-
- ES2024 added the Object.groupBy() method to JavaScript.
- The Object.groupBy() method groups elements of an object according to string values returned from a callback function.
- The Object.groupBy() method does not change the original object.
*/
console.log('(5) JavaScript Object.groupBy() ');

// Create an Array of fruit objects
const fruits = [
    {name: "apples", quantity: 300},
    {name: "bananas", quantity: 500},
    {name: "oranges", quantity: 200},
    {name: "kiwi", quantity: 150}
  ];
  
  // Callback function to group by quantity (ok or low)
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
  // Function to group objects by condition
  function groupBy(arr, callback) {
    return arr.reduce((grouped, item) => {
      const key = callback(item);
      grouped[key] = grouped[key] || [];
      grouped[key].push(item);
      return grouped;
    }, {});
  }
  
  // Group the fruits array using the callback function
  const result = groupBy(fruits, myCallback);
  
  // Display grouped results in the console
  console.log("These fruits are Ok:");
  result.ok.forEach(fruit => {
    console.log(fruit.name + " " + fruit.quantity);
  });
  
  console.log("\nThese fruits are Low:");
  result.low.forEach(fruit => {
    console.log(fruit.name + " " + fruit.quantity);
  });

// op is =
// These fruits are Ok:
// apples 300
// bananas 500

// These fruits are Low:
// oranges 200
// kiwi 150

/*
Object.groupBy() vs Map.groupBy() :-

- The difference between Object.groupBy() and Map.groupBy() is:
- Object.groupBy() groups elements into a JavaScript object.
- [Map.groupBy() groups elements into a Map object.
*/

/*
(6) JavaScript Object.keys() :-
- The Object.keys() method returns an array with the keys of an object.
*/

console.log('(6) JavaScript Object.keys() ');
// Create an Object
const Person5 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    age: 25,
    eyeColor:"black"
};

// Get the keys of the Object using object.keys()
const keys = Object.keys(Person5);

// Log the keys Array to the console
console.log('Object.keys() returns the keys of the person object:');
console.log(keys);

// op is = [ 'firstName', 'lastName', 'age', 'eyeColor' ]

/*
(7) JavaScript for...in Loop :-
- The JavaScript for...in statement loops through the properties of an object.

Syntax
for (let variable in object) {
  // code to be executed
}
- The block of code inside of the for...in loop will be executed once for each property.
- Looping through the properties of an object:
*/
console.log('(7) JavaScript for...in Loop');

const Person6 = {
    fname: "ABhishek",
    lname: "Kumar",
    age: 25
};

// Initialize an empty string to store property values
let text3 = "";

// Loop through each property in the objects using for...in loop

for(let x in Person6){
    text3 += Person6[x] + " ";  // Append each property value to the `txt` string
}
// Log the result in the console
console.log('Person object values:');
console.log(text3);

// Op is = ABhishek Kumar 25 
