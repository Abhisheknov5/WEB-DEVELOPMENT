/*
(1) JavaScript Object Protection
(2) JavaScript Object.preventExtensions()
(3) Since arrays are objects, arrays can be prevented from extensions too:
(4) JavaScript Object.isExtensible() 
(5) JavaScript Object.seal()
(6) JavaScript Object.isSealed()
(7) JavaScript Object.freeze()
(8) JavaScript Object.isFrozen()
*/

/*
(1) Object Protection Methods :-
// Prevents re-assignment
const car = {type:"Fiat", model:"500", color:"white"};

// Prevents adding object properties
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents adding and deleting object properties
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)
*/

/*
Using const :-
- The most common way to protect an object from being changed is by using the const keyword.
- With const you can not re-assign the object, but you can still change the value of a property, delete a property or create a new property.
*/
/*
(2) JavaScript Object.preventExtensions() :-
- The Object.preventExtensions() method prevents adding properties to an object.

Example
*/
console.log('(2) JavaScript Object.preventExtensions()');

// "use strict";  // Enable strict mode for better error handling

// Create an Object
const Person1 = {
    firstName: "Abhishek",  // First name property
    lastName: "Kumar"      //  Last name property
};
// Prevent extensions to the object (no new properties can be added)
Object.preventExtensions(Person1);

// Test for an error when trying to add a new Property
let text = ""; // Variable to store the Result

try {
    Person1.nationality = "English";
}
catch(err) {
    text = err;
}
console.log(text);
// TypeError: Cannot add property nationality, object is not extensible

/*
(3) Since arrays are objects, arrays can be prevented from extensions too:
Example
*/
console.log('(3) Since arrays are objects, arrays can be prevented from extensions too:');

// Create an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Prevent extensions to the array (no new elements can be added)
Object.preventExtensions(fruits);

// Test for an Error when trying to add a new element to the array
let text1 = ""; // Variable to store the result

try {
    // Atttempt to push a new Element (this will fail)
    fruits.push("kiwi");
}
catch(err) {
    text1 = err;
}
console.log(text1);

// Op is = TypeError: Cannot add property 4, object is not extensible

/*
(4) JavaScript Object.isExtensible() :-
- You can use Object.isExtensible() to check if an object is extensible.
- The Object.isExtensible() returns true if an object is extensible.

Examples
*/
console.log('(4) JavaScript Object.isExtensible() ');
console.log('Example-1');

// Create an Object
const Person2 = { firstName: "Abhishek", lastName:"Kumar"};

// Prevent Extensions
Object.preventExtensions(Person2);

// Check if the Object is extensible (this will return false)
let answer = Object.isExtensible(Person2);
console.log(answer);
// Op is = false

// Example-2
console.log('Example-2');

// Create an Array
const fruit1 = ["Banana","Orange","Apple","Mango"];

// Prevent Extensions
Object.preventExtensions(fruit1);

// Check if the array is extensible (this will return false)
let answer1 = Object.isExtensible(fruit1);
console.log(answer1);
// Op is = false

/*
(5) JavaScript Object.seal() :-
- The Object.seal() method prevents additions or deletions of new properties.
- The Object.seal() method makes existing properties non-configurable.
- The Object.isSealed() method can be used to check if an object is sealed.

Note
- The Object.seal() method will fail silently in non-strict mode and throw a TypeError in strict mode.
Example
*/
console.log('(5) JavaScript Object.seal()');
console.log('Example-1');

"use strict";

// Create an Object
const Person3 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    age: 26,
    eyeColor: "black"
};
// Seal Object
Object.seal(Person3);

// Test Error
let text2 = "";
try {
    delete Person3.age;  // This will fail since the object is sealed
    text2 = Object.values(Person3); // This will give the values of the object

} catch (err){
    text2 = err; // Catch any error that occurs
}
console.log(text2);
// Op is = TypeError: Cannot delete property 'age' of #<Object>

// Since arrays are objects, arrays can be sealed too:
// Example = 2
console.log('Exampple-2');

// Create an Array
const fruit2 = ["Banana","Orange","Apple","Mango"];

// Seal the Array
Object.seal(fruit2);

// Test Error
let text3 = "";
try {
    // Try to add a new element to the sealed array
    fruit2.push("kiwi");
} catch(err){
    text3 = err;
}
console.log(text3);

// Op is =  Cannot add property 4, object is not extensible

/*
(6) JavaScript Object.isSealed() :-

- The Object.isSealed() method can be used to check if an object is sealed.
- The Object.isSealed() returns true if an object is sealed.

Examples
*/
console.log('(6) JavaScript Object.isSealed() ');
console.log('Example = 1');

// Example = 1

// Create an Object
const Person4 = {
    firstName: "Abhishek",
    lastName: "Kumar"
};
// Sseal the Object
Object.seal(Person4);

// Check if the Object is sealed
let answer2 = Object.isSealed(Person4);
console.log(answer2);
// Op is = true

// Example = 2
console.log('Example = 2');

// Create an Array
const fruit3 = ["Apple","Banana","Orange","Mango"];

// Seal Array
Object.seal(fruit3);

// This will return true
let answer3 = Object.isSealed(fruit3);
console.log(answer3);
// Op is = true

/*
(7) JavaScript Object.freeze() :-
- The Object.freeze() method prevents any changes to an object.
- Frozen objects are read-only.
- No modification, addition or deletion of properties are allowed.
Note
- The Object.freeze() method will fail silently in non-strict mode and throw a TypeError in strict mode.

Example
*/

"use strict";
// Create an Object
const Person5 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    age: 26,
    eyeColor: "black"
};
// Freeze Object
Object.freeze(Person5);

// Test Error
let text4;
try {
    Person5.age = 27;  // Attempt to modify the frozen object
    text4 = Object.values(Person5); // Get object values
} catch(err){
    text4 = err; // Catch and store error if modification fails
}
console.log(text4);
// Op is = [ 'Abhishek', 'Kumar', 26, 'black' ]

/*
- Since arrays are objects, arrays can be frozen too:
Example
*/
"use strict";
// Create an Array
const fruit4 = ["Apple","Banana","Orange","Mango"];

// Freeze Array
Object.freeze(fruit4);

// Test Error
let text5;
try {
    fruit4.push("kiwi"); // This will not work, as the array is frozen
    text5 = fruit4;
} catch(err){
    text5 = err;
}
console.log(text5);
// Op is = TypeError: Cannot add property 4, object is not extensible

/*
(8) JavaScript Object.isFrozen() :-
- The Object.isFrozen() method can be used to check if an object is frozen.
- The Object.isFrozen() returns true if an object is frozen.

Examples
*/
console.log('(8) JavaScript Object.isFrozen()');
console.log('Example=1');

"use strict";
// Create an Object
const Person6 = {
    firstName: "ABhishek",
    lastName: "kumar"
};
// Freeze Object
Object.freeze(Person6);

// Check if Object is Frozen
let answer4 = Object.isFrozen(Person6);
console.log(answer4);
// Op is = true

// Example=2
console.log('Example = 2');

"use strict";
// Create an Array
const fruit5 = ["Apple","Banana","Mango","Orange"];

// Freeze Array
Object.freeze(fruit5);

// Check if Array is Frozen
let answer5 = Object.isFrozen(fruit5);
console.log(answer5);
// Op is = true






