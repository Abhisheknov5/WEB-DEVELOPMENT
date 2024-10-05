/*
(1) JavaScript Set Methods :-
(1) The new Set() Method :-
- Pass an array to the new Set() constructor:
*/
console.log('(1) JavaScript Set Methods');
console.log('(1) The new Set() Method ');

// Create a Set from an Array
const letter1 = new Set(["a", "b", "c"]);

// Display set.size in the console
console.log("The set has " + letter1.size + " values.");
// Op is = The set has 3 values.

/*
(2) The add() Method :-
*/
console.log('(2) The add() Method ');

// Create a new Set
const letter2 = new Set(["a", "b", "c"]);

// Add Elements
letter2.add("d");
letter2.add("e");

// Display set.size in the console
console.log("The set has " + letter2.size + " values.");
// Op is = The set has 5 values.

/*
(3) If you add equal elements, only the first will be saved :-
*/
console.log('(3) If you add equal elements, only the first will be saved');

// Create a Set
const letter3 = new Set();

// Add Values to the Set
letter3.add("a");
letter3.add("b");
letter3.add("c");
letter3.add("c"); // Duplicates
letter3.add("c");
letter3.add("c");
letter3.add("c");
letter3.add("c");

// Display the Size in the Console
console.log("The set has " + letter3.size + " values.");
// Op is = The set has 3 values.

/*
(4) Listing Set Elements :-
- You can list all Set elements (values) with a for..of loop:
*/
console.log('(4) Listing Set Elements ');

// Create a Set
const letter4 = new Set(["a", "b", "c"]);

// List all Elements and Display them in console
for(const x of letter4) {
    console.log(x);
}
// Op is =
// a
// b
// c

/*
(5) The has() Method :-
- The has() method returns true if a specified value exists in a set.

Example
*/
console.log('(5) The has() Method');

// Create a new Set
const letter5 = new Set(["a", "b", "c"]);

// Check if the set contains "d"
const answer = letter5.has("d");

// Display the result in the console
console.log("The answer is " + answer);
// The answer is false

/*
(6) The forEach() Method :-
- The forEach() method invokes a function for each Set element:

Example
*/
console.log('(6) The forEach() Method');

// Create a Set
const letter6 = new Set(["a", "b", "c"]);

// Initialize an empty string to hold the concatenated results
let text = "";
// Use forEach to iterate over each element in the Set
letter6.forEach(function(value){
    // Append each value to the text string, followed by a newline character
    text += value + "\n";  // Use '\n' for new lines in console
}) 
// Display the result in the console
console.log(text);

// Op is 
// a
// b
// c

/*
(7) The values() Method :-
- The values() method returns an Iterator object with the values in a Set:
*/
console.log('(7) The values() Method ');
console.log('Example-1');

// Cretae a Set
const letter7 = new Set(["a", "b", "c"]);

// Create an Iterator
const myIterator = letter7.values();

// List all Elements
let text1 = "";
for(const x of myIterator){
    text1 += x + "\n"; // Using "\n" for line breaks in the console
}
// Display the result in the console
console.log(text1);

// Op is =
// a
// b
// c

console.log('Example-2');
// Create a Set
const letter8 = new Set(["a", "b", "c"]);

// List all Elements
let text2 = "";
for(const x of letter8.values()){
    text2 += x + "\n"; 
}
console.log("The values in the set are:\n" + text2);
// Op is = 
// a
// b
// c

/*
(8) The keys() Method :-
- The keys() method returns an Iterator object with the values in a Set:

Note
- A Set has no keys, so keys() returns the same as values().
- This makes Sets compatible with Maps.
*/
console.log('(8) The keys() Method ');
console.log('Example-1');

// Create a Set 
const letter9 = new Set(["a", "b", "c"]);

// Create an Iterator using Keys()
const myIterators = letter9.keys();

// List all Elements
let text3 = "";
for(const x of myIterators){
    text3 += x + "\n";
}
// Display the result in the console
console.log('The keys in the set are:\n' + text3);

console.log('Example-2');
// Create a Set
const letter10 = new Set(["a", "b", "c"]);

// List all Elements using the keys() method
let text4 = "";
for(const x of letter10.keys()){
    text4 += x + "\n";
}
// Output the result to the console
console.log("The Keys in the set are:\n" + text4);
// Op is =
// a
// b
// c

/*
(9) The entries() Method :-
- The entries() method returns an Iterator with [value,value] pairs from a Set.

Note
- The entries() method is supposed to return a [key,value] pair from an object.
- A Set has no keys, so the entries() method returns [value,value].
- This makes Sets compatible with Maps.
*/
console.log('(9) The entries() Method');
console.log('Example-1');

// Create a Set
const letter11 = new Set(["a", "b", "c"]);

// Get all Entries
const iterator = letter11.entries();

// List all Entries
let text5 = "";
for (const entry of iterator) {
  text5 += entry + "\n"; // Append each entry to the text, with a newline character
}

// Output the result to the console
console.log("The entries in the set are:\n" + text5);

// Op is
// a,a
// b,b
// c,c

console.log('Example-2');
// Create a Set
const letter12 = new Set(["a", "b", "c"]);

// List all Entries
let text6 = "";
for (const entry of letter12.entries()) {
  text6 += entry + "\n"; // Append each entry to the text, with a newline character
}

// Output the result to the console
console.log("The entries in the set are:\n" + text6);

// Op is =
// a,a
// b,b
// c,c