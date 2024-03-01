// Arrays //
/*
1 Arrays:-
An array is a special variable, which can hold more than one value:
const cars = ["Saab", "Volvo", "BMW"];
*/
console.log('1 Arrays');
const car = ["Magnite", "XUV", "BMW"];
console.log(car);

/*
Why Use Arrays?
If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?
The solution is an array!
An array can hold many values under a single name, and you can access the values by referring to an index number.
*/
/*
2 Creating an Array:-
Using an array literal is the easiest way to create a JavaScript Array.
Syntax:
const array_name = [item1, item2, ...];   
*/
console.log('2 Creating an Array');
const car1 = ["Magnite", "XUV", "BMW"];
console.log(car1);

// Spaces and line breaks are not important. A declaration can span multiple lines:
console.log('multiple lines');
const car3 = [
    "Magnite",
    "XUV",
    "BMW"
];
console.log(car3);

// You can also create an array, and then provide the elements.
const car4 = [];
car4[0] = "Magnite";
car4[1] = "XUV";
car4[2] = "BMW";
console.log(car4);

/*
3 Using the JavaScript Keyword new:-
The following example also creates an Array, and assigns values to it:
*/
console.log('3 Using the JavaScript Keyword new');
const car5 = new Array("Magnite", "XUV", "BMW");
console.log(car5);

/*
The two examples above do exactly the same.
There is no need to use new Array().
For simplicity, readability and execution speed, use the array literal method.
*/

/*
4 Accessing Array Elements:-
You access an array element by referring to the index number:
Note: Array indexes start with 0.
[0] is the first element. [1] is the second element.

*/
console.log('4 Accessing Array Elements');
const car6 = ["Magnite", "XUV", "BMW"];
let cars = car6[0];
cars[1] = "Audi";
console.log(cars);

/*
5 Changing an Array Element:-
This statement changes the value of the first element in cars:
*/
console.log('5 Changing an Array Element');
const car7 = ["Magnite", "XUV", "BMW"];
car7[1] = "Audi";
console.log(car7);

/*
6 Converting an Array to a String:-
The JavaScript method toString() converts an array to a string of (comma separated) array values.
*/
console.log('6 Converting an Array to a String');
const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log("The toString() method returns an array as a comma separated string \n", fruit.toString());

/*
7 Access the Full Array:-
With JavaScript, the full array can be accessed by referring to the array name:
*/
console.log('7 Access the Full Array');
const car8 =  ["Magnite", "XUV", "BMW"];
console.log(car8);

/*
8 Arrays are Objects:-
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
But, JavaScript arrays are best described as arrays.
Arrays use numbers to access its "elements". In this example, person[0] returns John:
*/
console.log('8 Arrays are Objects');
const person = ["Abhishek", "Kumar", 25]
console.log(person);

/*
9 Objects use names to access its "members". In this example, person.firstName returns John:
*/
console.log('9 Objects use names ');
const person1 = {firstName:"Akash", lastName:"Kumar", age:24};
console.log(person1);

/*
Array Elements Can Be Objects.
JavaScript variables can be objects. Arrays are special kinds of objects.
Because of this, you can have variables of different types in the same Array.
You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
*/

/*
Array Properties and Methods
The real strength of JavaScript arrays are the built-in array properties and methods:
cars.length   // Returns the number of elements
cars.sort()   // Sorts the array
*/

/*
10 The length Property:-
The length property of an array returns the length of an array (the number of array elements).
The length property is always one more than the highest array index.
*/
console.log('10 The length Property');
const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
let length = fruit1.length;
console.log(length);

// 11 Accessing the First Array Element
console.log('11 Accessing the First Array Element');
const fruit2 = ["Banana", "Orange", "Apple", "Mango"];
let fruitss = fruit2[0];
console.log(fruitss);

// 12 Accessing the Last Array Element
console.log('12 Accessing the Last Array Element');
const fruit3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit3[fruit3.length-1]);

/* 
13 Looping Array Elements
One way to loop through an array, is using a for loop:
*/
console.log('13 Looping Array Elements');
const fruit4 = ["Banana", "Orange", "Apple", "Mango"];
let flen = fruit4.length;

let text = "";
for(let i = 0; i< flen; i++) {
    text += fruit4[i] + "\n";
}
console.log("Looping Array Elements\n", text);

/*
14 Adding Array Elements:-
The easiest way to add a new element to an array is using the push() method:
*/
console.log('14 Adding Array Elements');
const fruit5 =  ["Banana", "Orange", "Apple", "Mango"];
fruit5.push("Lemon");
console.log(fruit5);
// 15 Adding elements with high indexes can create undefined "holes" in an array:
console.log('15 Adding elements with high indexes can create undefined "holes" in an array:');
const fruit6 =  ["Banana", "Orange", "Apple", "Mango"];
fruit6[6] = "Lemon" // Creates undefined "holes" in fruits
let fleng = fruit6.length;
let texts = "";
for(i = 0; i < fleng; i++) {
    texts += fruit6[i] + "\n";
}
console.log(texts);

/*
16 Associative Arrays:-
Many programming languages support arrays with named indexes.
Arrays with named indexes are called associative arrays (or hashes).
JavaScript does not support arrays with named indexes.
In JavaScript, arrays always use numbered indexes. 
*/
console.log('16 Associative Arrays');
const person2 = [];
person2[0] = "Abhishek";
person2[1] = "Sharmma";
person2[2] = 25;
person2.length;
person2[0];
console.log(person2[0] + " " + person2.length);

/*
17 WARNING !!
If you use named indexes, JavaScript will redefine the array to an object.
After that, some array methods and properties will produce incorrect results.
*/
console.log('17 WARNING !!');
const person3 = [];
person3["firsName"] = "Abhishek";
person3["lastName"] = "kumar";
person3["age"] = 25;
console.log(person3[0] + " "+person3.length);

/*
The Difference Between Arrays and Objects ???
In JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes.
Arrays are a special kind of objects, with numbered indexes.

When to Use Arrays. When to use Objects ????
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.
*/

/*
18 JavaScript new Array():-
JavaScript has a built-in array constructor new Array().
But you can safely use [] instead.
These two different statements both create a new empty array named points:
const points = new Array();
const points = [];
*/
console.log('18 JavaScript new Array()');
const point = new Array(40, 100, 1, 5, 25, 10);
console.log(point[0]);
const points = [40, 100, 1, 5, 25, 10];
console.log(points[0]);

// 19 The new keyword can produce some unexpected results.
console.log('19 The new keyword can produce some unexpected results:');
// Create an array with three elements:
var pointss = new Array(40, 100, 1);
console.log(pointss);

// Create an array with two elements:
var pointss = new Array(40, 100, 1);
console.log(pointss);

// Create an array with one element ???
var pointss = new Array(40);
console.log(pointss);

/*
20 A Common Error
const points = [40];
is not the same as:

const points = new Array(40);
*/
console.log('20 A Common Error');
// Create an array with one element:
const a = [40];
console.log(a);

// Create an array with 40 undefined elements:
const b = new Array(40);
console.log(b);  

/*
21 How to Recognize an Array
A common question is: How do I know if a variable is an array?
The problem is that the JavaScript operator typeof returns "object":
*/
console.log('21 How to Recognize an Array');
const fruit7 =  ["Banana", "Orange", "Apple"];
console.log(typeof fruit7);

/*
22 The typeof operator returns object because a JavaScript array is an object.
Solution 1:
To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():
Array.isArray(fruits);

Solution 2:
The instanceof operator returns true if an object is created by a given constructor:

const fruits = ["Banana", "Orange", "Apple"];

fruits instanceof Array;
*/
console.log('22 Array.isArray() method');
const fruit8 =  ["Banana", "Orange", "Apple"];
console.log(Array.isArray(fruit8));

console.log('23 instance of Operator');
const fruit9 = ["Banana", "Orange", "Apple"];
console.log(fruit9 instanceof Array);