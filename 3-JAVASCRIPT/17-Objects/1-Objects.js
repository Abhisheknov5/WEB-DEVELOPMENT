/*
(1) JavaScript Objects
(1) JavaScript Variables
(2) JavaScript Objects
(3) JavaScript Object Definition 
(4) Accessing Object Properties
(5)JavaScript Object Methods
(6) JavaScript Objects are Mutable
*/

/*
(1) JavaScript Objects:-
- In real life, objects are things like: houses, cars, people, animals, or any other subjects.
- Here is a car object example:

Object	Properties	            Methods
	
        car.name = Fiat         car.start()
        car.model = 500         car.drive()
        car.weight = 850kg      car.brake()
        car.color = white	    car.stop()
        car.start()
        car.drive()
        car.brake() 
        car.stop()

Object Properties :-

- A real life car has properties like weight and color:
- car.name = Fiat,
  car.model = 500, 
  car.weight = 850kg, 
  car.color = white.
- Car objects have the same properties, but the values differ from car to car.

Object Methods :-

- A real life car has methods like start and stop.
- car.start(),
  car.drive(),
  car.brake(),
  car.stop().

- Car objects have the same methods, but the methods are performed at different times.
*/

/*
(1) JavaScript Variables :-

- JavaScript variables are containers for data values.
- This code assigns a simple value (Fiat) to a variable named car:
*/
console.log('(1) JavaScript Variables');

let car1 = "Fiat";
console.log(car1);
// Op is = Fiat

/*
(2) JavaScript Objects :-

- Objects are variables too. But objects can contain many values.
- This code assigns many values (Fiat, 500, white) to an object named car:
*/
console.log('(2) JavaScript Objects');

// Create Objects
const car2 = {
    type: "Fiat",
    model: "500",
    color: "White"
};
console.log("The car type is " + car2.type);
// Op is = The car type is Fiat

/*
(3) JavaScript Object Definition :-

How to Define a JavaScript Object:-

(a) Using an Object Literal
(b) Using the new Keyword
(c) Using an Object Constructor

*/
console.log('(3) JavaScript Object Definition ');
/*
(a)JavaScript Object Literal :-

- An object literal is a list of name:value pairs inside curly braces {}.

{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

Note:
- name:value pairs are also called key:value pairs.
- object literals are also called object initializers.
*/
/*
Creating a JavaScript Object :-

- These examples create a JavaScript object with 4 properties:
*/
console.log("(a)JavaScript Object Literal ");

// create an Object
const Person1 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    age: "25",
    eyecolor: "blue"
};

// Display Data from the Object
console.log(Person1.firstName + " is " + Person1.age + " years old.");

// Abhishek is 25 years old.

/*
Spaces and line breaks are not important. An object initializer can span multiple lines:
const Person1 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    age: "25",
    eyecolor: "blue"
};

// Display Data from the Object
console.log(Person1.firstName + " is " + Person1.age + " years old.");

// Abhishek is 25 years old.
*/

/*
This example creates an empty JavaScript object, and then adds 4 properties:
*/
console.log('creates an empty JavaScript object, and then adds 4 properties:');

// Create an Empty Object
const Person2 = {};

// Add Properties
Person2.firstName = "Abhishek";
Person2.lastName = "Kumar";
Person2.age = 25;
Person2.eyecolor = "black"

// Display Data from Object
console.log(Person2.firstName + " is " + Person2.age + " years old");

// Op is = Abhishek is 25 years old

/*
(b) Using the new Keyword :-

-This example create a new JavaScript object using new Object(), and then adds 4 properties:
*/

console.log('(b) Using the new Keyword');

// Create an Object using the new keyword
const Person3 = new Object();
Person3.firstName = "Abhishek";
Person3.lastName = "Kumar";
Person3.age = 25;
Person3.eyecolor = "black";

// Display Object content
console.log(Person3.firstName + " is " + Person3.age + " years old");

// Op is = Abhishek is 25 years old.

/*
Note:
- The examples above do exactly the same.
- But, there is no need to use new Object().
- For readability, simplicity and execution speed, use the object literal method.
*/

/*
Object Properties :- 

- The named values, in JavaScript objects, are called properties.

Property	Value
firstName	John
lastName	Doe
age	50
eyeColor	blue

- Objects written as name value pairs are similar to:

- Associative arrays in PHP
- Dictionaries in Python
- Hash tables in C
- Hash maps in Java
- Hashes in Ruby and Perl

*/

/*
(4) Accessing Object Properties :-

- You can access object properties in two ways:

objectName.propertyName
objectName["propertyName"]
*/

console.log('(4) Accessing Object Properties ');
console.log('objectName.propertyName');

// Create an Object
const Person4 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    id : 5566
};
// Display lastName fro the Object
console.log("The last name is " + Person4.lastName);

// Op is = The last name is Kumar

console.log('objectName["propertyName"]');

// Create an Object
const Person5 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    id : 5566
}
// Display lastName from the Object:
console.log("The last name is " + Person5["lastName"]);

// Op is = The last name is Kumar

/*
(5)JavaScript Object Methods :-

- Methods are actions that can be performed on objects.

- Methods are function definitions stored as property values.

Property	Property Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}
*/
console.log('(5)JavaScript Object Methods :-');

const Person6 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    id: 5566,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
// Display the Full name from the Object
console.log(Person6.fullName());
// Op is = Abhishek Kumar

/*
- In the example above, this refers to the person object:
- this.firstName means the firstName property of person.
- this.lastName means the lastName property of person.
*/

/*
- In JavaScript, Objects are King.
- If you Understand Objects, you Understand JavaScript.
- Objects are containers for Properties and Methods.
- Properties are named Values.
- Methods are Functions stored as Properties.

- Properties can be primitive values, functions, or even other objects.

In JavaScript, almost "everything" is an object.

- Objects are objects
- Maths are objects
- Functions are objects
- Dates are objects
- Arrays are objects
- Maps are objects
- Sets are objects
All JavaScript values, except primitives, are objects.
*/

/*
JavaScript Primitives :-

- A primitive value is a value that has no properties or methods.
- 3.14 is a primitive value
- A primitive data type is data that has a primitive value.

JavaScript defines 7 types of primitive data types:

string
number
boolean
null
undefined
symbol
bigint
*/

/*
Immutable :-
- Primitive values are immutable (they are hardcoded and cannot be changed).
- if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.

Value	Type	Comment
"Hello"	string	"Hello" is always "Hello"
3.14	number	3.14 is always 3.14
true	boolean	true is always true
false	boolean	false is always false
null	null (object)	null is always null
undefined	undefined	undefined is always undefined
*/

/*
(6) JavaScript Objects are Mutable :-
Objects are mutable: They are addressed by reference, not by value.

If person is an object, the following statement will not create a copy of person:

const x = person;
The object x is not a copy of person. The object x is person.

The object x and the object person share the same memory address.

Any changes to x will also change person:
*/
console.log('(6) JavaScript Objects are Mutable :- ');

// Create an Object
const Person7 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    age: 25,
    eyecolor: "blue"
};

// Create a Copy
const x = Person7;

// Change Age
x.age = 26;

// Display the Update age from the Object
console.log(Person7.firstName + " is " + Person7.age + " Years Old.");

// Op is = Abhishek is 26 Years Old.