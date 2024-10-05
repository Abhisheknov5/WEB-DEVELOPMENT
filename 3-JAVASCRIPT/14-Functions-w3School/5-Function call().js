/*
(1) JavaScript Function call() :-

Method Reuse :-
- With the call() method, you can write a method that can be used on different objects.

All Functions are Methods :-
- In JavaScript all functions are object methods.
- If a function is not a method of a JavaScript object, it is a function of the global object (see previous chapter).
- The example below creates an object with 3 properties, firstName, lastName, fullName.

Example
*/
console.log('(1) JavaScript Function call()');

// Create an object 'myObject' with properties 'firstName', 'lastName', and a method 'fullName'
const myObject = {
    firstName: "Abhishek",
    lastName: "Kumar",

      // Method that returns the full name by combining firstName and lastName
      fullName: function() {
        return this.firstName + " " + this.lastName;
      }
}
console.log(myObject.fullName());
// Op is = Abhishek Kumar

/*
- In the example above, this refers to the person object.
- this.firstName means the firstName property of this.
Same as:
- this.firstName means the firstName property of person.
*/

/*
(2) The JavaScript call() Method :-
- The call() method is a predefined JavaScript method.
- It can be used to invoke (call) a method with an owner object as an argument (parameter).
- With call(), an object can use a method belonging to another object.
- This example calls the fullName method of person, using it on person1:

Example
*/
console.log('(2) The JavaScript call() Method');

// Define an object 'person' with a method 'fullName' that returns the full name
const Person = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
// Define two objects 'person1' and 'person2' with firstName and lastName properties
const Person1 = {
    firstName: "Abhishek",
    lastName: "Kumar"
}
const Person2 = {
    firstName: "Akash",
    lastName: "Kumar"
}
// Use the 'call' method to invoke 'person.fullName' with 'person1' as the 'this' context
console.log(Person.fullName.call(Person1)); // op is = Abhishek Kumar

// Optionally, you can call it with 'person2' as well
console.log(Person.fullName.call(Person2)); // op is Akash Kumar

/*
(3) The call() Method with Arguments :-
- The call() method can accept arguments:
*/
console.log('(3) The call() Method with Arguments');

// Define an object 'person' with a method 'fullName' that returns the full name along with city and country
const Persons = {
    fullName: function(city, country){
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;

    }
}
// Define two objects 'person1' and 'person2' with firstName and lastName properties
const Persons1 = {
    firstName: "Abhishek",
    lastName: "Kumar"
}

const Persons2 = {
    firstName: "Akash",
    lastName: "Kumar"
}
// Use the 'call' method to invoke 'person.fullName' with 'person1' as the 'this' context
// and pass additional arguments for city and country
console.log(Persons.fullName.call(Persons1, "Darbhanga", "Bihar")); // Output: Abhishek Kumar, Darbhanga, Bihar

// Optionally, you can call it with 'person2' as well
console.log(Persons.fullName.call(Persons2, "Patna", "Bihar")); // Output: Akash Kumar, Patna, Bihar