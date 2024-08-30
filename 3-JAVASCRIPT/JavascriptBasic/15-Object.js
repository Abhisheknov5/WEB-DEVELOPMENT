/*
(1) JavaScript Objects:-
Real Life Objects, Properties, and Methods
In real life, a car is an object.
A car has properties like weight and color, and methods like start and stop:

Object	Properties	            Methods
	
        car.name = Fiat         car.start()
        car.model = 500         car.drive()
        car.weight = 850kg      car.brake()
        car.color = white	    car.stop()
        car.start()
        car.drive()
        car.brake() 
        car.stop()
All cars have the same properties, but the property values differ from car to car.
All cars have the same methods, but the methods are performed at different times.

JavaScript Objects:-
You have already learned that JavaScript variables are containers for data values.
This code assigns a simple value (Fiat) to a variable named car:
*/
// Create and Display a Variable
console.log("Object 1");

let car1 = "Fiat";
console.log(car1);

/*
(2) Objects are variables too. But objects can contain many values.
This code assigns many values (Fiat, 500, white) to a variable named car.

The values are written as name:value pairs (name and value separated by a colon).
*/
console.log("Object 2");

// Create an Object
const car2 = {type:"Magnite", model:"222",color:"White"};
// Display some data from Object
console.log("The Car type is " + car2.type); 

/*
(3) Object Definition
You define (and create) a JavaScript object with an object literal:
*/
console.log("Object 3");
// Create an Object
const Person = {firstName: "John", lastName:"Doe", age: 50, eyeColor:"blue"};
console.log(Person.firstName + " is " + Person.age + " Years old. ");

/*
Spaces and line breaks are not important. An object definition can span multiple lines.
*/
console.log("Object 4");
const Person1 = {
    firstName: "Mahesh",
    lastName: "Kumar",
    age: 50,
    eyeColor: "blue"
}
console.log(Person1.firstName + " is " + Person1.age + " years Old.. ");

/*
(4) Object Properties
The name:values pairs in JavaScript objects are called properties:

Property	Property Value

firstName	John
lastName	Doe
age     	50
eyeColor	blue
*/

/*
Accessing Object Properties:-
You can access object properties in two ways:

objectName.propertyName
or
objectName["propertyName"]
*/
console.log("Object 5");
const Person2 = {
    firstName: "Rakesh",
    lastName: "Kumar",
    id: 5566
}
console.log(Person2.firstName + "  " + Person2.lastName);

console.log("Object 6");
const Person3 = {
    firstName: "Akash",
    lastName: "Kumar",
    id: 5566
}
console.log(Person3["firstName"] + " "+ Person3["lastName"]);

/*
(5) Object Methods:-
Objects can also have methods.
Methods are actions that can be performed on objects.
Methods are stored in properties as function definitions.

Property	Property Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}
A method is a function stored as a property.

Example
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
In the example above, this refers to the person object:
this.firstName means the firstName property of person.
this.lastName means the lastName property of person.
*/

/*
(6) What is this?
In JavaScript, the this keyword refers to an object.
Which object depends on how this is being invoked (used or called).
The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
Note
this is not a variable. It is a keyword. You cannot change the value of this.
*/

/*
(7) The this Keyword
In a function definition, this refers to the "owner" of the function.
In the example above, this is the person object that "owns" the fullName function.
In other words, this.firstName means the firstName property of this object.

Accessing Object Methods:-
You access an object method with the following syntax:

objectName.methodName()
*/
console.log("Object 7");
// Create an object
const Person4 = {
    firstName:"Alok",
    lastName:"Kumar",
    id:5555,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
// Display data from the object
console.log(Person4.fullName());

/*
(8) Do Not Declare Strings, Numbers, and Booleans as Objects!
When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object
Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.


*/
