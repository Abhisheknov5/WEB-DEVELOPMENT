/*
(1) The JavaScript apply() Method :-
- The apply() method is similar to the call() method (previous chapter).

Method Reuse :-
- With the apply() method, you can write a method that can be used on different objects.
*/
console.log('(1) The JavaScript apply() Method');

// Define the Person Object with the fullName Method
const Person = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
// Create a new Object Person1 with the firstName and lastName Properties
const Person1 = {
    firstName: "Abhishek",
    lastName: "Kumar"
};
// Use the apply method to call fullName with Person1 as the context
const fullNameOfPerson1 = Person.fullName.apply(Person1);

// Log the result to the console
console.log(fullNameOfPerson1);
// Op is = Abhishek Kumar

/*
(2) The Difference Between call() and apply() :-
The difference is:

- The call() method takes arguments separately.
- The apply() method takes arguments as an array.

- The apply() method is very handy if you want to use an array instead of an argument list.
*/

/*
(3) The apply() Method with Arguments :-
- The apply() method accepts arguments in an array:

Example
*/
console.log('(3) The apply() Method with Arguments');

// Define an object Person with a method fullName
const Persons = {
     // 'fullName' method that takes city and country as parameters
     fullName: function(city,country) {
         // Return a formatted string with first name, last name, city, and country
         return this.firstName + " " + this.lastName + ", " + city + ", " + country;
     }
}
// Define another object 'Person2' with first name and last name
const Person2 = {
    firstName: "Abhishek",
    lastName: "Kumar"
}

// Use 'apply' to call 'fullName' method of 'person' with 'person2' as context
// The second argument is an array containing the city and country
const result = Persons.fullName.apply(Person2, ["Darbhanga", "India"]);
console.log(result);

// Op is = Abhishek Kumar, Darbhanga, India


console.log('(4) Compared with the call() method:');
/*
(4) Compared with the call() method:
// Define an object 'person' with a method 'fullName'
const person = {
    // 'fullName' method that takes city and country as parameters
    fullName: function(city, country) {
        // Return a formatted string with first name, last name, city, and country
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
}

// Define an object 'person1' with first name and last name
const person1 = {
    firstName: "John",
    lastName: "Doe"
}

// Define another object 'person2' with first name and last name
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

// Use 'call' to invoke the 'fullName' method of 'person' with 'person1' as context
const result1 = person.fullName.call(person1, "Oslo", "Norway");

// Output the result to the console
console.log(result1); // Output: John Doe, Oslo, Norway

// Use 'call' to invoke the 'fullName' method of 'person' with 'person2' as context
const result2 = person.fullName.call(person2, "New York", "USA");

// Output the result to the console
console.log(result2); // Output: Mary Doe, New York, USA

// Op is
// John Doe, Oslo, Norway
// Mary Doe, New York, USA
*/

/*
(5) Simulate a Max Method on Arrays :-
- You can find the largest number (in a list of numbers) using the Math.max() method:

Example
*/
console.log('(5) Simulate a Max Method on Arrays ');

// Use Math.max to find the highest number among the provided arguments
const highestNumber = Math.max(1, 2, 3);
console.log("The Highest Number is:",highestNumber);

// Op is = The Highest Number is: 3

/*
(6) Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.

Example
*/
console.log('(6) Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.');

// Define an array of numbers
const number1 = [1, 2, 3];

// Use Math.max with apply to find the highest number in the array 
const HighestNumber = Math.max.apply(null,number1);
console.log('The Highest number is:',HighestNumber);

// Op is = The Highest number is: 3

/*
(7) The first argument (null) does not matter. It is not used in this example.

These examples will give the same result:
*/
console.log('(7) The first argument (null) does not matter. It is not used in this example.');

// Define an array of numbers
const number2 = [1,2,3];

// Use Math.max with apply to find the highest number in the array
const HighestNumberr = Math.max.apply(Math, number2);
console.log("The highest number is:", highestNumber);

// op is = The highest number is: 3

/*
// Define an array of numbers
const numbers = [1, 2, 3];

// Use Math.max with apply to find the highest number in the array
// The first argument can be any object; here, we're using an empty string,
// but it can be omitted or passed as null as well.
const highestNumber = Math.max.apply(" ", numbers);

// Log the highest number to the console
console.log("The highest number is:", highestNumber);

// OP is = The highest number is: 3

*/

/*
// Define an array of numbers
const numbers = [1, 2, 3];

// Use Math.max with apply to find the highest number in the array
// The first argument can be any value; here, we're using 0.
const highestNumber = Math.max.apply(0, numbers);

// Log the highest number to the console
console.log("The highest number is:", highestNumber);

// OP is = The highest number is: 3

*/

/*
JavaScript Strict Mode :-
- In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.
*/

