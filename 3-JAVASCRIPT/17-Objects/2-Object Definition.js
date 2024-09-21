/*
JavaScript Object Definition :-

Methods for Defining JavaScript Objects:-

- Using an Object Literal
- Using the new Keyword
- Using an Object Constructor
- Using Object.assign()
- Using Object.create()
- Using Object.fromEntries()

*/
/*
(1) JavaScript Object Literal :-

- An object literal is a list of property names:values inside curly braces {}.

{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

Note:
- An object literal is also called an object initializer.
- Creating a JavaScript Object
Examples:-

- Create an empty JavaScript object using {}, and add 4 properties:

*/
console.log('JavaScript Object Definition ');
console.log('(1) JavaScript Object Literal ');
/*
Creating a JavaScript Object
Examples
Create an empty JavaScript object using {}, and add 4 properties:
*/

//Create an Object
const Person1 = {};

// Add Properties 
Person1.firstName = "Abhishek";
Person1.lastName = "Kumar";
Person1.age = 25;
Person1.eyeColor = "black";

// Display Data from Object in the console
console.log(Person1.firstName + " is " + Person1.age + " years old.");

// Op is = Abhishek is 25 years old.

/*
(2) Create an empty JavaScript object using new Object(), and add 4 properties:
*/

console.log('(2) Create an empty JavaScript object using new Object()');
// Create an Object using the new keyword
const Person2 = new Object();
Person2.firstName = "Abhishek";
Person2.lastName = "Kumar";
Person2.age = 25;
Person2.eyeColor = "black";

// Display Object Content in the console
console.log(Person2.firstName + " is " + Person2.age + " years old.");

// Op is = Abhishek is 25 years old.

/*
Note:
- The examples above do exactly the same.
- But, there is no need to use new Object().
- For readability, simplicity and execution speed, use the object literal method.
*/

/*
(3) Object Constructor Functions :-
- Sometimes we need to create many objects of the same type.
- To create an object type we use an object constructor function.
- It is considered good practice to name constructor functions with an upper-case first letter.
*/
console.log('(3) Object Constructor Functions ');

// Constructor Function for Person objects
function Person3(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create a Person Object
const boy1 = new Person3("Abhishek","Kumar",25,"black");

// Display age in the console
console.log("Boy1 is " + boy1.age + ".");

// Op is = Boy1 is 25.

/*
Note:
- In the constructor function, this has no value.
- The value of this will become the new object when a new object is created.
*/

/*
Now we can use new Person() to create many new Person objects:
*/

// Constructor function for Person objects
function Person4(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create two Person Objects
const boy2 = new Person4("Abhishek","Kumar",25,"black");
const girl2 = new Person4("Anamika","Kumari",30,"blue");

// Display the age in the console
console.log("boy2 is " + boy2.age +".\ngirl2 is " + girl2.age + ".");

// Op is =
// boy2 is 25.
// girl2 is 30.

/*
(4) Property Default Values :-
A value given to a property will be a default value for all objects created by the constructor:
*/

console.log('(4) Property Default Values');

// Constructor function for Person objects
function Person5(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";
  }
  
  // Create 2 Person objects
  const boy3 = new Person5("John", "Doe", 50, "blue");
  const girl3 = new Person5("Sally", "Rally", 48, "green");
  
  // Display nationality in the console
  console.log("boy " + boy3.nationality + ".\ngirl is " + girl3.nationality + ".");
// Op is =
// boy English.
// girl is English.