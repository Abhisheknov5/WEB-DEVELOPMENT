/*
(1) JavaScript Sets :-
- A JavaScript Set is a collection of unique values.
- Each value can only occur once in a Set.
- The values can be of any type, primitive values or objects.

How to Create a Set :-
- You can create a JavaScript Set by:
- Passing an array to new Set()
- Create an empty set and use add() to add values

The new Set() Method :-
- Pass an array to the new Set() constructor:
*/
console.log('(1) JavaScript Sets');

// Create a Set from an Array
const letter1 = new Set(["a", "b", "c"]);

// Output the size of the Set to the console
console.log("The set has " + letter1.size + " values.");
// Op is = The set has 3 values.

/*
(2) Create a Set and add values :-
Example
*/
console.log('(2) Create a Set and add values:');

// Create a Set
const letter2 = new Set();

// Add values to the Set
letter2.add("a");
letter2.add("b");
letter2.add("c");

// Display the Size in the Console
console.log("The set has " + letter2.size + " values.");
// Op is = The set has 3 values.

/*
(3) Create a Set and add variables :-
Example
*/
console.log('(3) Create a Set and add variables');

// Create a Set
const letter3 = new Set();

// Create Variables
const a = 'a';
const b = 'b';
const c = 'c';

// Add Values as Variables to the Set
letter3.add(a);
letter3.add(b);
letter3.add(c);

// Display the Size in the Console
console.log("The set has " + letter3.size + " values.");
// Op is = The set has 3 values.

/*
(4) The add() Method :-
*/
console.log('(4) The add() Method');

// Create a  Set
const letter4 = new Set(["a", "b", "c"]);

// Add new Elements
letter4.add("d");
letter4.add("e");

// Display set.size in the console
console.log("The set has " + letter4.size + " values.");
// Op is = The set has 5 values.

/*
(5) If you add equal elements, only the first will be saved :-
*/
console.log('(5) If you add equal elements, only the first will be saved');

// Create a Set
const letter5 = new Set();

// Add Values to the Set
letter5.add("a");
letter5.add("b");
letter5.add("c");
letter5.add("c");
letter5.add("c");
letter5.add("c");
letter5.add("c");
letter5.add("c");

// Display the Size in the Console
console.log("the set has " + letter5.size + " values.");
// Op is = the set has 3 values.

/*
(6) Listing the Elements :-
- You can list all Set elements (values) with a for..of loop:
*/
console.log('(6) Listing the Elements ');

// Create a Set
const letter6 = new Set(["a", "b", "c"]);

// List all Elements
let text = "";
for(const x of letter6){
    text += x + "\n";
}
// Display the values in the console
console.log(text);
// Op is = 
// a
// b
// c

/*
(7) Sets are Objects :-
- typeof returns object:
- typeof letters;      // Returns object
*/
console.log('(7) Sets are Objects');

// Create a new Set
const letter7 = new Set(["a", "b", "c"]);

// Display typeof in the Console
console.log("The type of the set is " + typeof letter7);
// Op is = The type of the set is object

/*
(8) instanceof Set returns true :-
- letters instanceof Set;  // Returns true
*/
console.log('(8) instanceof Set returns true');

// Create a new Set
const letter8 = new Set(["a", "b", "c"]);

// Check if letters is an instance of Set and display result in the console
console.log(letter8 instanceof Set);
// Op is = true