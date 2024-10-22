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

// Op is = Rakesh Kumar

/*
(2) Preserving this :-
- Sometimes the bind() method has to be used to prevent losing this.
- In the following example, the person object has a display method. In the display method, this refers to the person object:

Example
*/
console.log('(2) Preserving this ');

// Define a Person Object
const Person2 = {
    firstName: "Abhishek",
    lastName: " Kumar",
    // Method to display the full Name
    display: function(){
        console.log(this.firstName + " " + this.lastName);
    }
};

// Create a Separate Function
function showFullName(){
    this.display(); // Call the display method of the bound context
}
// Bind the Person Object to the showFullName function
const boundShowFullName = showFullName.bind(Person2);

// Call the bound Function 
boundShowFullName();

// Op is = Abhishek Kumar

/*
(3) When a function is used as a callback, this is lost.
- This example will try to display the person name after 3 seconds, but it will display undefined instead:

Example
*/
console.log('(3)');

// Define a Person Object
const Person3 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    // Method to display the full Name
    display: function(){
        console.log(this.firstName + " " + this.lastName);
    }
};
// Use setTimeout with bind to ensure 'this' refers to the person object
setTimeout(Person3.display.bind(Person3), 3000);

// Op is = Abhishek Kumar

/*

(4) The bind() method solves this problem.
- In the following example, the bind() method is used to bind person.display to person.
- This example will display the person name after 3 seconds:

Example
*/
console.log('(4)');
// Define a Person Object
const Person4 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    // Method to display the full Name
    display: function(){
        console.log(this.firstName + " " + this.lastName);
    }
};
// Use bind to set the correct context for the display method
let display = Person4.display.bind(Person4);

// Set a timeout to call the display method after 3 seconds
setTimeout(display, 3000);

// Op is =  Abhishek Kumar

