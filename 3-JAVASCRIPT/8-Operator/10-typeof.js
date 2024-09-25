/*
(1) JavaScript typeof :-
- The typeof Operator
- The typeof operator returns the data type of a JavaScript variable.

Primitive Data Types :-
- In JavaScript, a primitive value is a single value with no properties or methods.

- JavaScript has 7 primitive data types:

string
number
boolean
bigint
symbol
null
undefined
- The typeof operator returns the type of a variable or an expression.
*/
console.log('(1) JavaScript typeof ');
console.log(typeof "John");            // Returns "string"
console.log(typeof ("John" + "Doe"));  // Returns "string"
console.log(typeof 3.14);              // Returns "number"
console.log(typeof 33);                // Returns "number"
console.log(typeof (33 + 66));         // Returns "number"
console.log(typeof true);              // Returns "boolean"
console.log(typeof false);             // Returns "boolean"
console.log(typeof 1234n);             // Returns "bigint"
console.log(typeof Symbol());          // Returns "symbol"
console.log(typeof null);              // Return "Object"

/*
Note:
- In JavaScript, null is a primitive value. However, typeof returns "object".
- This is a well-known bug in JavaScript and has historical reasons.

*/
/*
(2) Complex Data Types :-
- A complex data type can store multiple values and/or different data types together.
- JavaScript has one complex data type:
object
All other complex types like arrays, functions, sets, and maps are just different types of objects.

- The typeof operator returns only two types:
object
function
*/
console.log('(2) Complex Data Types');
console.log(typeof {name: 'Abhishek'});   // Returns object
console.log(typeof[1,2,3,4]);            // Returns object
console.log(typeof new Map());           // Returns object
console.log(typeof new Set());           // Returns object
console.log(typeof function(){});        // Returns Function

/*
Note:
- The typeof operator returns object for all types of objects:

objects
arrays
sets
maps
- You cannot use typeof to determine if a JavaScript object is an array or a date.
*/

/*
(3) How to Recognize an Array :-
How to know if a variable is an array?

- ECMAScript 5 (2009) defined a new method for this: Array.isArray():

Example
*/
console.log('(3) How to Recognize an Array ');

// Create an Array
const fruit1 = ["apples","bananas","Oranges"];
console.log(Array.isArray(fruit1));
// Op is = True

/*
(4) The instanceof Operator :-
- The instanceof operator returns true if an object is an instance of a specified object type:

Examples
*/
console.log('(4) The instanceof Operator');

// Create a Date
const time = new Date();
console.log(time instanceof Date);
// Op is = True

// Create an Array 
const fruit2 = ["apples","bananas","Orange"];
console.log(fruit2 instanceof Array);
// Op is = True

// Ceate a map
const fruit3 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["Oranges", 200]
])
console.log(fruit3 instanceof Map);
// Op is = True

// Ceate a Set
const fruit4 = new Set(["apples","bananas","Oranges"]);
console.log(fruit4 instanceof Set);
// Op is = True

/*
(5) Undefined Variables :-
- The typeof of an undefined variable is undefined.
*/
console.log('(5) Undefined Variables');
console.log('The typeof car is ' + typeof car1);
// Op is = The typeof car is undefined

/*
- The typeof of a variable with no value is undefined. The value is also undefined.
Example
*/
let car2;
console.log("The value of car is " + car2);   // Output will be "undefined"
console.log("The typeof car is " + typeof car2); // Output will be "undefined"

/*
- Any variable can be emptied, by setting the value to undefined.
- The type will also be undefined.
*/
let car3 = "Volvo";
car3 = undefined;

console.log("The value of car is " + car3);        // Output will be "undefined"
console.log("The typeof car is " + typeof car3);   // Output will be "undefined"

/*
(6)Empty Values :-
- An empty value has nothing to do with undefined.
- An empty string has both a legal value and a type.
*/
console.log('(6)Empty Values ');
let car4 = "";
console.log("The value is: " + car4);              // Output will be an empty string
console.log("The type is: " + typeof car4);        // Output will be "string"

/*
(6) Null :-
- In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
- Unfortunately, in JavaScript, the data type of null is an object.
- You can empty an object by setting it to null:
Example
*/
console.log('(6) Null');
// Create an Object
let Person1 = {firstName: "Abhishek", lastName: "Kumar", age:25, eyeColor:"black"};

/* Set the Object to null (empties the Object) */
Person1 = null;
console.log('The typeof person is ' + typeof Person1);
// Op is = The typeof person is object

/* You can also empty an object by setting it to undefined: */
let Person2 = {firstName: "Abhishek", lastName: "Kumar", age:25, eyeColor:"black"};

// Set the object to undefined (empties the object)
Person2 = undefined;
console.log('The typeof Person is ' + typeof Person2);
// Op is The typeof person is undefined


/*
(7) Difference Between Undefined and Null :-
- undefined and null are equal in value but different in type:
*/
console.log('(7) Difference Between Undefined and Null ');

console.log("The typeof undefined is " + typeof undefined);  // Output: "undefined"
console.log("The typeof null is " + typeof null);            // Output: "object"
console.log("(null === undefined) is " + (null === undefined)); // Output: false (strict equality, different types)
console.log("(null == undefined) is " + (null == undefined));   // Output: true (loose equality, equal in value)

/*
(8) The constructor Property :-
- The constructor property returns the constructor function for all JavaScript variables.
*/
console.log('(8) The constructor Property');
console.log("john".constructor);      // [Function: String]
console.log(3.14.constructor);        // [Function: Number]
console.log(false.constructor);       // [Function: Boolean]
console.log(123n.constructor);        // [Function: BigInt]
console.log({}.constructor);          // [Function: Object]
console.log([].constructor);          // [Function: Array]
console.log(new Date().constructor);  // [Function: Date]
console.log(new Set().constructor);   // [Function: Set]
console.log(new Map().constructor);   // [Function: Map]
console.log(function() {}.constructor); // [Function: Function]

// With the constructor, you can check if an object is an Array:
// Example
const fruit5 = ["Banana","Orange","Apple","Mango"];
console.log(fruit5.constructor === Array); // Op is true

// With the constructor, you can check if an object is a Date:
const times = new Date();
console.log(times.constructor === Date); // Op is true

// (9) All Together Example :-
console.log('(9) All Together Example');

console.log(typeof "Abhishek");           // Return string
console.log(typeof ("Abhishek"+"Kumar")); // Return string
console.log(typeof 3.14);                 // Return number
console.log(typeof (33 + 66));           // Return number
console.log(typeof NaN);                // Return number
console.log(typeof 123n);               // Return bigint
console.log(typeof true);               // Return boolean
console.log(typeof false);              // Return boolean
console.log(typeof {name: 'Abhishek'}); // Return Object
console.log(typeof [1,2,3,4]);          // Return Object
console.log(typeof {});                 // Return Object
console.log(typeof []);                 // Return Object
console.log(typeof new Object());       // Return Object
console.log(typeof new Array());       // Return Object
console.log(typeof new Date());        // Return Object
console.log(typeof new Set());         // Return Object
console.log(typeof new Map());        // Return Object
console.log(typeof function() {});   // Return function
console.log(typeof x);               // Return undefined
console.log(typeof null);           // Return Object

/*
Note:
- The data type of NaN (Not a Number) is number !
*/

/*
(10) The void Operator :-
- The void operator evaluates an expression and returns undefined. This operator is often used to obtain the undefined primitive value, using "void(0)" (useful when evaluating an expression without using the return value).
*/
console.log('(10) The void Operator');
let result = void(0);  
console.log(result);   // Output: undefined