/*
(1) JavaScript Display Objects :-
How to Display JavaScript Objects?

- Displaying a JavaScript object will output [object Object].

*/
console.log('(1) JavaScript Display Objects');

// Create an Object
const Person1 = {
    name: "Abhishek",
    age: 26,
    city: "Bihar"
};
// Display Object
console.log(Person1);
// Op is = { name: 'Abhishek', age: 26, city: 'Bihar' }

/*
Some solutions to display JavaScript objects are:-

- Displaying the Object Properties by name
- Displaying the Object Properties in a Loop
- Displaying the Object using Object.values()
- Displaying the Object using JSON.stringify()

(2) Displaying Object Properties :-
- The properties of an object can be displayed as a string:
*/
console.log('(2) Displaying Object Properties ');

// Create an Object

const Person2 = {
    name: "Abhishek",
    age: 26,
    city: "Darbhanga"
};

// Display Properties
console.log(Person2.name + " , " + Person2.age + " , "  +Person2.city);
// Op is = Abhishek , 26 , Darbhanga

/*
(3) Displaying Properties in a Loop :-
-The properties of an object can be collected in a loop:
*/
console.log('(3) Displaying Properties in a Loop');

// Create an Object
const Person3 = {
    name: "Abhishek",
    age: 26,
    city: "Darbhanga"
};
// Build a Text
let text1 = "";
for(let x in Person3){
    text1 += Person3[x] + " ";
}
console.log(text1.trim()); // Using trim() to remove any extra trailing space
// Op is = Abhishek 26 Darbhanga

/*
Note:
- You must use person[x] in the loop.
- person.x will not work (Because x is the loop variable).
*/

/*
(4) Using Object.values() :-
- Object.values() creates an array from the property values:
*/
console.log('(4) Using Object.values()');

// Create an Object
const Person4 = {
    name: "Abhishek",
    age: 30,
    city: "Darbhanga"
};
// Create an Array
const myArray = Object.values(Person4);
// Display the Array
console.log(myArray);
// Op is = [ 'Abhishek', 30, 'Darbhanga' ]

/*
(5) Using Object.entries() :-
- Object.entries() makes it simple to use objects in loops:
*/
console.log('(5) Using Object.entries()');

// Define an object with fruit names as keys and quantities as values
const fruits = {
    Banana: 300,
    Oranges: 200,
    Apples: 500
};

// Initialize an empty string to accumulate the formatted output
let text2 = "";

// Iterate over the object's entries using Object.entries()
// Object.entries() returns an array of [key, value] pairs
for(let [fruit, amount] of Object.entries(fruits)){

      // Append each key-value pair to the text2 string with a newline
    text2 += fruit + ": " + amount + "\n";

}
// Output the accumulated string to the console, trimming any trailing newline
console.log(text2.trim());
// OP is:-
// Banana: 300
// Oranges: 200
// Apples: 500

/*
(6) Using JSON.stringify() :-

- JavaScript objects can be converted to a string with JSON method JSON.stringify().
- JSON.stringify() is included in JavaScript and supported in all major browsers.

Note:-
The result will be a string written in JSON notation:

{"name":"John","age":50,"city":"New York"}
*/
console.log('(6) Using JSON.stringify() ');

// Create an Object
const Person5 = {
    name: "Abhishek",
    age: 30,
    city: "Darbhanga"
};
// Convert the object to a JSON string and log it to the console
console.log(JSON.stringify(Person5));

// op is = {"name":"Abhishek","age":30,"city":"Darbhanga"}



// JSON.stringify will not stringify functions.
// You have to convert functions to strings first:

const Person6 = {
    name: "Abhishek",
    age: function () { return 25;}
};
Person6.age = Person6.age.toString();

let myString3 = JSON.stringify(Person6);
console.log(myString3);

// Stringify Arrays
console.log('Stringify Arrays');

const arr = ["John", "Peter", "Sally", "Jane"];
let myString4 = JSON.stringify(arr);
console.log(myString4);