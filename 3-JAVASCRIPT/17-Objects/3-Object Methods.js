/*
(1) JavaScript Object Methods
(2) Accessing Object Methods
(3) Using JavaScript Methods
*/

/*
(1) JavaScript Object Methods :-

- Object methods are actions that can be performed on objects.
- A method is a function definition stored as a property value.

Property	Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}
*/
console.log('(1) JavaScript Object Methods');

// Define a Javascript Object with a Method
const Person1 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
// Log the result of calling the method to the console
console.log(Person1.fullName());
// Op is = Abhishek Kumar 

/*
- In the example above, this refers to the person object:
- this.firstName means the firstName property of person.
- this.lastName means the lastName property of person.
*/

/*
(2) Accessing Object Methods :-
-You access an object method with the following syntax:

objectName.methodName()
- If you invoke the fullName property with (), it will execute as a function:
*/
console.log('(2) Accesing Object Methods');

const Person2 = {
    firstName: "Akash",
    lastName: "Kumar",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(Person2.fullName());
// Op is = Akash Kumar

/*
If you access the fullName property without (), it will return the function definition:
*/
// Create an object with a method
const Person3 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Access the method without calling it (i.e., without parentheses)
  // This will display the function definition
  console.log(Person3.fullName);
  // Op is = [Function: fullName]
  
  // To display the result of calling the method, you should use parentheses
  console.log(Person3.fullName());
  // Op is = Abhishek Kumar

  /*
(3) Using JavaScript Methods :-
- This example uses the JavaScript toUpperCase() method to convert a text to uppercase:
  */
 console.log('(3) JavaScript Methods toUpperCase()');

 // Create an Object
 const Person4 = {
    firstName: "Abhishek",
    lastName: "Kumar",
    id: 5566,
 };

 // Add a method to the Object
 Person4.name = function(){
    return (this.firstName + " " + this.lastName).toUpperCase();
 };
 // Display Object Data
 console.log("My Name is " + Person4.name());
// Op is = My Name is ABHISHEK KUMAR