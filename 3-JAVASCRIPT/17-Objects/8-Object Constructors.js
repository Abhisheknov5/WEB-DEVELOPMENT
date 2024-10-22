/*
(1) Object Constructor Functions 
(2) Property Default Values 
(3) Adding a Property to an Object
(4) Adding a Property to a Constructor 
(5) Constructor Function Methods
(6) Adding a Method to an Object
(7) Built-in JavaScript Constructors
*/


/*
(1) Object Constructor Functions :-
- Sometimes we need to create many objects of the same type.
- To create an object type we use an object constructor function.
- It is considered good practice to name constructor functions with an upper-case first letter.
*/

console.log('(1) Object Constructor Functions ');
// Constructor Function for Person Objects
function Person1(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create a Person Object
const myName = new Person1("Abhishek","Kumar",26,"black");

// Display age in the console
console.log('My Name is ' + myName.firstName + ".");

// op is = My Name is Abhishek.

/*
Note:
- In the constructor function, this has no value.
- The value of this will become the new object when a new object is created.

-  Now we can use new Person() to create many new Person objects:
*/
console.log(' we can use new Person()');

// Constructor function for Person objects
function Person2(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
// Create two Person Objeccts
const boy1 = new Person2("Vikash", "Kumar", 28,"black");
const girl1 = new Person2("Rani", "Kumari",23, "black");

// Display age in console
console.log('The boy1 is ' + boy1.age + ".\nThe girl1 is " + girl1.age + ".");

// OP is =
// The boy1 is 28.
// The girl1 is 23.

/*
(2) Property Default Values :-
- A value given to a property will be a default value for all objects created by the constructor:
*/
console.log('(2) Property Default Values');

// Constructor function for Person objects 
function Person3(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";
}
// Create 2 Person Objects
const boy2 = new Person3("Amit","Kumar",29,"black");
const girl2 = new Person3("Anamika","Kumari",24,"black");

// Log nationality to console
console.log('The boy2 is ' + boy2.nationality + ".\nThe girl1 is " + girl2.nationality + ".");
// Op is =
// The boy2 is English.
// The girl1 is English.

/*
(3) Adding a Property to an Object:-
- Adding a property to a created object is easy:
*/
console.log('(3) Adding a Property to an Object');

function Person4 (first, last, age,eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create  two Person Object
const boy3 = new Person4("Rakesh","Kumar",28,"brown");
const girl3 =  new Person4("Sweta","Jha",22,"brown");

// Add nationality to first object
boy3.nationality = "Indian";
girl3.nationality = "Amercian";


// Display age
console.log("Rakesh nationality is ",boy3.nationality);
console.log("Sweta nationality is ",girl3.nationality);

// op is
// Rakesh nationality is  Indian
// Sweta nationality is  Amercian

/*
(4) Adding a Property to a Constructor :-
- You can NOT add a new property to an object constructor:
*/
console.log('(4) Adding a Property to a Constructor');

// Constructor function for Person Objects
function Person5(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
// Create 2 Person Objects
const boy4 = new Person5("Rakesh","Kumar",28,"brown");
const girl4 =  new Person5("Sweta","Jha",22,"brown");

// will not work
Person5.nationality = "English";

console.log("Rakesh nationality is ",boy4.nationality);
// op is =
// Rakesh nationality is  undefined

/*
To add a new property, you must add it to the constructor function prototype.
*/
console.log('To add a new property, you must add it to the constructor function prototype:-');

// Constructor function for Person Objects
function Person6(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
// Create 2 Person Objects
const boy5 = new Person6("Rakesh","Kumar",28,"brown");
const girl5 =  new Person6("Sweta","Jha",22,"brown");

// Add a new Property
Person6.prototype.nationality = "Indian";

console.log("Rakesh nationality is ",boy5.nationality);
// op is =
// Rakesh nationality is  Indian

/*
(5) Constructor Function Methods :-
- A constructor function can also have methods:
*/
console.log('(5) Constructor Function Methods');


// Constructor function for Person Objects
function Person7(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullNamee = function(){
        return this.firstName + " " + this.lastName;
    };
}

// Create a Person Object
const boy6 = new Person7("Abhishek","Kumar",26,"black");

// Display full name in the console
console.log("My Name is " + boy6.fullNamee());
// Op is =
// My Name is Abhishek Kumar

/*
(6) Adding a Method to an Object :-
- Adding a method to a created object is easy.
- Example

Person.changeName = function (name) {
  this.lastName = name;
}

myMother.changeName("Doe");
 TypeError: myMother.changeName is not a function
*/
console.log('(6) Adding a Method to an Object');


function Person8 (first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
// Create 2 Person Objects
const boy7 = new Person8("Mohan","Kumar",33,"black");
const girl7 = new Person8("Mohini","Kumar",40,"black");

// Add a name method to first Object
boy7.name = function() {
    return this.firstName + " " + this.lastName;
};
// Display Full Name
console.log("boy name is",boy7.name());
// Op is = 
// boy name is Mohan Kumar

/*
(7) Built-in JavaScript Constructors :-
- JavaScript has built-in constructors for all native objects:

new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object
*/
console.log('(7) Built-in JavaScript Constructors');

// Displayb the type in the console
// Display the Type in the console
console.log("The typeof new Object() is " + typeof new Object()); // Op is = Object
console.log("The typeof new Array() is " + typeof new Array());
console.log("The typeof new Map() is " + typeof new Map());
console.log("The typeof new Set() is " + typeof new Set());
console.log("The typeof new Date() is " + typeof new Date());
console.log("The typeof new RegExp() is " + typeof new RegExp());
console.log("The typeof new Function() is " + typeof new Function());// Op is = function

/*
Note:
The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.
*/

/*
Did You Know?
- Use object literals {} instead of new Object().
- Use array literals [] instead of new Array().
- Use pattern literals /()/ instead of new RegExp().
- Use function expressions () {} instead of new Function().

Example
"";           // primitive string
0;            // primitive number
false;        // primitive boolean

{};           // object object
[];           // array object
/()/          // regexp object
function(){}; // function
*/
console.log('Did You Know?');

// Display the type of all in the console
console.log('The typeof "" is ' + typeof ""); // string
console.log('The typeof 10 is ' + typeof 10); // number
console.log('The typeof false is ' + typeof false); // boolean
console.log('The typeof {} is ' + typeof {}); // object
console.log('The typeof [] is ' + typeof []); // object
console.log('The typeof /()/ is ' + typeof /()/); // object
console.log('The typeof function(){} is ' + typeof function(){}); // function
