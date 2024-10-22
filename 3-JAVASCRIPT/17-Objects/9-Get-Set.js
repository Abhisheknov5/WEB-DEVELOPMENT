/*
JavaScript Object Accessors
JavaScript Accessors (Getters and Setters) 
(1) JavaScript Getter (The get Keyword)
(2) JavaScript Setter (The set Keyword) 
(3) JavaScript Function or Getter?
(4) Data Quality 
*/

/*
JavaScript Accessors (Getters and Setters) :-
- ECMAScript 5 (ES5 2009) introduced Getter and Setters.
- Getters and setters allow you to define Object Accessors (Computed Properties).

(1) JavaScript Getter (The get Keyword) :-
- This example uses a lang property to get the value of the language property.

Example
*/
console.log('JavaScript Object Accessors');
console.log('JavaScript Accessors (Getters and Setters)');

console.log('(1) JavaScript Getter (The get Keyword) ');

// Create an Object
const Person1 = {
     // Define properties of the person
    firstName: "Abhishek",
    lastName: "Kumar",
    language: "en",

    // Getter for the language Property
    get lang() {
        return this.language;  // Returns the value of the language property
    }
};
console.log(`Language: ${Person1.lang}`);
// Op is = Language: en

/*
(2) JavaScript Setter (The set Keyword) :-
- This example uses a lang property to set the value of the language property.

Example
*/
console.log('(2) JavaScript Setter (The set Keyword)');

// Create an Object 
const Person2 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    language: "NO",

    // Setter for thr language Property
    set lang(value) {
        this.language = value;  // Sets the value of the language property
    }
};
// Set the language Property using the Setter.
Person2.lang = "en"; // Changes the language Property
console.log(`Updated language: ${Person2.language}`);

// Op is = Updated language: en

/*
(3) JavaScript Function or Getter?
- What is the differences between these two examples?

Example 1
*/
console.log('(3) JavaScript Function or Getter?');
console.log('Example 1');

// Create an Object with properties and a method
const Person3 = {
    firstName: "Abhishek",
    lastName: "Kumar",

    // Method to return the full Name by combining first and last Names
    fullName: function(){
        return this.firstName + " " + this.lastName; // Concatenate first and last names
    }
};
console.log(`Full Name: ${Person3.fullName()}`);

// Op is = Full Name: Abhishek Kumar
/*
Example 1 access fullName as a function: person.fullName().
*/

// Example-2 
console.log('Example-2 ');

// Create an object with properties and a getter method
const Person4 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    
    // Getter Method to return the full name
    get fullName(){
        return this.firstName + " " + this.lastName; // Concatenate first and last names
    }
};
// Access the fullName using the getter and log it to the console
console.log(`Full Name: ${Person4.fullName}`);

// Op is = Full Name: Abhishek Kumar

/*
Example 2 access fullName as a property: person.fullName.
The second example provides a simpler syntax.
*/

/*
(4) Data Quality :-
- JavaScript can secure better data quality when using getters and setters.
- Using the lang property, in this example, returns the value of the language property in upper case:

Example
*/
console.log('(4) Data Quality ');
console.log('Example-1');

// Create an object with properties and a getter method
const Person5 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    language: "en",

    // Getter Method to return the language in Uppercase
    get lang(){
        return this.language.toUpperCase(); // Converts language to uppercase and returns it
    }
};

// Log the result of accessing the lang property using the getter to the console
console.log(`Language: ${Person5.lang}`);

// Op is = Language: EN

/*
- Using the lang property, in this example, stores an upper case value in the language property:

Example
*/
console.log('Example-2');


// Create an object with properties and a getter method
const Person6 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    language: "en",

     // Setter method to set the language property
     set lang(lang) {
        this.language = lang.toUpperCase(); // Converts language to uppercase and assigns it
     }
};
// Set the language Property using the Setter
Person6.lang = "en"; // The setter converts "en" to "EN" and stores it in the language property
console.log(`Language: ${Person6.language}`);

// The Op is = Language: EN

/*
Why Using Getters and Setters?
- It gives simpler syntax
- It allows equal syntax for properties and methods
- It can secure better data quality
- It is useful for doing things behind-the-scenes
*/

