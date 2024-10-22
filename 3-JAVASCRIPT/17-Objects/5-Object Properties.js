/*
(1) JavaScript Object Properties 
(2) Adding New Properties 
(3) Deleting Properties
(4) Nested Objects
*/

/*
(1) JavaScript Object Properties :-

- An Object is an Unordered Collection of Properties
- Properties are the most important part of JavaScript objects.
- Properties can be changed, added, deleted, and some are read only.

Accessing JavaScript Properties :-
The syntax for accessing the property of an object is:

// objectName.property
let age = person.age;
or

//objectName["property"]
let age = person["age"];
or

//objectName[expression]
let age = person[x];

*/

/*
(a) dot notation :-
// objectName.property
let age = person.age;
*/
console.log('(1) JavaScript Object Properties :-');
console.log('Accessing JavaScript Properties ');

console.log('(a) dot notation');
const Person1 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    age: 25,
    eyecoloe: "blue"
};

// Access Properties using dot notation and dispaly data
console.log(Person1.firstName + " is " + Person1.age + " years Old.");

// Op is = Abhishek is 25 years old.

/*
(b) bracket notation:-
 //objectName["property"]
let age = person["age"];
*/
console.log('(b) bracket notation:-');

const Person2 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    age: 25,
    eyecolor: "blue"
};
// Access Properties using bracket Notation and Display data
console.log(Person2["firstName"] + " is " + Person2["age"] + " years old.");

// Op is = Abhishek is 25 years old.

/*
(c) Access properties using variables and display data :-
//objectName[expression]
let age = person[x];

*/
console.log('(c) Access properties using variables and display data:-');

const Person3 = {
    firstName: "Abhishek",
    lastName: "Kuamr",
    age: 25
};

let x = "firstName";
let y = "age";

// Access properties using variables and display data
console.log(Person3[x] + " is " + Person3[y] + " years old.");

// Op is = Abhishek is 25 years old.

/*
(2) Adding New Properties :-
- You can add new properties to an existing object by simply giving it a value:
*/
console.log('(2) Adding New Properties :-');
const Person4 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    age: 25,
    eyecolor: "black"
}
Person4.nationality = "Indian";
console.log(Person4.firstName + " is " + Person4.nationality + ".");
// Op is = Abhishek is Indian.

/*
(3) Deleting Properties :-
- The delete keyword deletes a property from an object:

Note:
- The delete keyword deletes both the value of the property and the property itself.
- After deletion, the property cannot be used before it is added back again.
*/
console.log('(3) Deleting Properties :-');
const Person5 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    age: 25,
    eyecolor: "black"
}
delete Person5.age;
console.log(Person5.firstName + " is " + Person5.age + " years old.");
// Op is = Abhishek is undefined years old.

const Person6 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    age: 25,
    eyecolor: "black"
}
delete Person6["age"];
console.log(Person6.firstName + " is " + Person6.age + " years old.");
// Op is = Abhishek is undefined years old.

/*
(4) Nested Objects :-
- Property values in an object can be other objects:
*/
console.log('(4) Nested Objects :-');
const myobj = {
    name: "Abhishek",
    age: 25,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}
let p1 = "cars";
let p2 = "car2"
// Access and log the value of car2 from the nested object
console.log(myobj.cars.car2); // Output: BMW
console.log(myobj.cars["car2"]); // Output: BMW
console.log(myobj["cars"]["car2"]); // Output: BMW
console.log(myobj[p1][p2]); // Output: BMW