/*
JavaScript Function bind()

(1) Function Borrowing :-
- With the bind() method, an object can borrow a method from another object.
- The example below creates 2 objects (person and member).
- The member object borrows the fullname method from the person object:

Example
*/
console.log('JavaScript Function bind()');
console.log('(1) Function Borrowing :-');

// Define the person object with firstName, lastName, and a method fullName
const Person1 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
// Define the member object with firstName and lastName
const member = {
    firstName: "Rakesh",
    lastName: "Kumar",
}
// Use bind() to borrow the fullName method from the person object
let fullName = Person1.fullName.bind(member);

// Call the borrowed method and log the result to the console
console.log(fullName());

// Op is = Abhishek Kumar

/*
(2) Preserving this :-
- Sometimes the bind() method has to be used to prevent losing this.
- In the following example, the person object has a display method. In the display method, this refers to the person object:

Example
*/