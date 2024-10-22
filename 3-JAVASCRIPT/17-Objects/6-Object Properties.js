/*
JavaScript Object Properties
(1) JavaScript Object.defineProperty()
(2) Changing a Property Value 
(3) Property Attributes
(4) Changing Meta Data 
(5) JavaScript getOwnPropertyNames()
(6) List all Object Properties
(7) Object.getOwnPropertyNames() will also list properties that is not enumerable
(8) JavaScript Object.keys()
(9) Adding Getters and Setters
(10) A Counter Example 
*/

/*
Property Management Methods :-
// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing a Property
Object.getOwnPropertyDescriptor(object, property)

// Accessing Properties
Object.getOwnPropertyDescriptors(object)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)

(1) JavaScript Object.defineProperty() :-
- The Object.defineProperty() method can be used to:

- Adding a new property to an object
- Changing property values
- Changing property metadata
- Changing object getters and setters
Syntax:

Object.defineProperty(object, property, descriptor)

Adding a new Property
- This example adds a new property to an object:

Example
*/
console.log('JavaScript Object Properties');
console.log('(1) JavaScript Object.defineProperty()');
console.log('Adding a new Property');

// Create an Object
const Person1 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    language: "En"
};

// Add a Property
Object.defineProperty(Person1, "year", {value: "2024"});
console.log(Person1.year);
// Op is = 2024

/*
(2) Changing a Property Value :-
- This example changes a property value:

Example
*/
console.log('(2) Changing a Property Value ');

// Create an Object
const Person2 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    language: "En"
};

// Change a Property
Object.defineProperty(Person2, "language", {value: "No"});
console.log(Person2.language);
// Op is = No

/*
(3) Property Attributes :-
- All properties have a name. In addition they also have a value.
- The value is one of the property's attributes.
- Other attributes are: enumerable, configurable, and writable.
- These attributes define how the property can be accessed (is it readable?, is it writable?)
- In JavaScript, all attributes can be read, but only the value attribute can be changed (and only if the property is writable).
- ( ECMAScript 5 has methods for both getting and setting all property attributes)
*/


/*
(4) Changing Meta Data :-
- The following property meta data can be changed:

writable : true      // Property value can be changed
enumerable : true    // Property can be enumerated
configurable : true  // Property can be reconfigured
writable : false     // Property value can not be changed
enumerable : false   // Property can be not enumerated
configurable : false // Property can be not reconfigured

Getters and setters can also be changed:-

// Defining a getter
get: function() { return language }
// Defining a setter
set: function(value) { language = value }
This example makes language read-only:

Object.defineProperty(person, "language", {writable:false});

This example makes language not enumerable:

Object.defineProperty(person, "language", {enumerable:false});
*/

/*
(5) JavaScript getOwnPropertyNames() :-
- The Object.getOwnPropertyNames() method can:

List object properties
Syntax
Object.getOwnPropertyNames(object)
*/

/*
(6) List all Object Properties :-
- This example gets all properties of an object:

Example
*/
console.log('(6) List all Object Properties');

// Create an Object
const Person3 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    language: "EN"
};
// Display all Properties
console.log(Object.getOwnPropertyNames(Person3));
// Op is = [ 'firstName', 'lastName', 'language' ]

/*
(7) Object.getOwnPropertyNames() will also list properties that is not enumerable :-

Example
*/
console.log('(7) Object.getOwnPropertyNames() will also list properties that is not enumerable ');

// Create an Objects
const Person4 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    language: "EN"
};
// Change Property
Object.defineProperty(Person4, "language", {enumerable: false});
console.log(Object.getOwnPropertyNames(Person4));
// Op is = [ 'firstName', 'lastName', 'language' ]

/*
(8) JavaScript Object.keys() :-
- The Object.keys() method can:
- List enumerable object properties
Syntax
Object.keys(object)

List Enumerable Object Properties :-
- This example uses Object.keys() insted of Object.getOwnPropertyNames():

Example
*/
console.log('(8) JavaScript Object.keys()');

// Create an Object
const Person5 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    language: "EN"
};
// Change the language Property to be non-enumerable
Object.defineProperty(Person5,"language", {enumerable: false});
console.log(Object.keys(Person5));
// Op is = [ 'firstName', 'lastName' ]

/*
Note
- The getOwnPropertyNames() method returns all properties.
- The Object.keys() method returns all enumerable properties.
- If you define object properties without enumerable:false, the two methods will return the same.
*/

/*
(9) Adding Getters and Setters :-
- The Object.defineProperty() method can also be used to add Getters and Setters:

Example
*/
console.log('(9) Adding Getters and Setters');

// Create an Object
const Person6 = { firstName: "Abhishek", lastName: "Kumar"};

// Define a Getter for fullName
Object.defineProperty(Person6, "fullName", {
    get: function () {
        return this.firstName + " " + this.lastName;
    }
});
console.log(Person6.fullName);
// OP is = Abhishek Kumar

/*
(10) A Counter Example :-
Example
*/
console.log('(10) A Counter Example ');
// Define an Object
const obj = { counter: 0 };

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
    get: function() {
        this.counter = 0;
    },
});

Object.defineProperty(obj, "increment", {
    get: function() {
        this.counter++;
    },
});

Object.defineProperty(obj, "decrement", {
    get: function() {
        this.counter--;
    },
});

Object.defineProperty(obj, "add", {
    set: function(value) {
        this.counter += value;
    },
});

// Change 'Subtraction' to 'subtract' for consistency
Object.defineProperty(obj, "subtract", {
    set: function(value) {
        this.counter -= value;
    },
});

// Play with counter:
obj.reset;           // Reset the counter to 0
obj.add = 5;         // Add 5 to the counter
obj.subtract = 1;    // Subtract 1 from the counter
obj.increment;       // Increment the counter by 1
obj.decrement;       // Decrement the counter by 1

// Display the final counter value in the console
console.log(`Current Counter Value: ${obj.counter}`);
