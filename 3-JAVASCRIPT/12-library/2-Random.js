/*
(1) JavaScript Random Integers :-

- Math.random() used with Math.floor() can be used to return random integers.
- There is no such thing as JavaScript integers.
- We are talking about numbers with no decimals here.
- Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive).
-  Math.random() always returns a number lower than 1.
*/
console.log('1 JavaScript Random Integers');
console.log(Math.random()); // 0.26708522963269843

// Returns a random integer from 0 to 9:
console.log(Math.floor(Math.random() * 10)); //0

// Returns a random integer from 0 to 10:
console.log(Math.floor(Math.random() * 11)); // 11 anything

// Returns a random integer from 0 to 99:
console.log(Math.random() * 100); // 11.663429298575423

// Returns a random integer from 0 to 100:
console.log(Math.floor(Math.random() * 101)); // 93

// Returns a random integer from 1 to 10:
console.log(Math.floor(Math.random() * 10) + 1); // 7

// Returns a random integer from 1 to 100:
console.log(Math.floor(Math.random() * 100) + 1); //46

/*
(2) A Proper Random Function :-

- As you can see from the examples above, it might be a good idea to create a proper random function to use for all random integer purposes.
- This JavaScript function always returns a random number between min (included) and max (excluded):
*/
console.log('2 A Proper Random Function');

// Function to generate a random integer between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// Generate and log a random number between 0 to 9.
console.log(getRandomInteger(0, 10)); // 8

/*
This JavaScript function always returns a random number between min and max (both included):
*/
// Function to generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) +  min;
}
console.log(getRandomInt(1, 10)); // 6