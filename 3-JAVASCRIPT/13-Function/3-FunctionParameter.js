/*
Function Parameters:-
- A function can be parameter less or parameterized.
- Parameters are required to modify a function.

Syntax:
    function Name(param)
    {

    }
    Name(value);

- The parameter defined in declaration is known as "Formal Parameter".
- The parameter passed in the signature while calling function is known as "Acutal Parameter".

              FormalParameter = ActualParameter;
            [reference]        = [value]

- Formal parameter is just like a variable name in memory.
- You can store any type of value in a function parameter.
        a) Primitive
        b) Non Primitive
        c) Function
        d) Date
        e) Regular Expression etc..

*/
// Example= 1
console.log("Example-1");

function PrintNumbers(howMany){
    // Loop from 1 to the number specified by howMany
    for(let i = 1; i<= howMany; i++){
        console.log(i);
    }
}
PrintNumbers(10); // 1 2 3 4 5 6 7 8 9 10

// Example= 2
console.log("Example-2");

function Print(cities){
    // Iterate over eash city in the cities array
    cities.map(function(city){
        console.log(city); // Print each city to the console
    });
}
// call the function to print the name of the cities
Print(["Delhi", "Hyderabaad"]); // Delhi Hyderabaad

// Example= 3
console.log("Example-3");

function Print(product){
    // Loop through each property in the product object
    for(var property in product) {
        // Print the property name and its value to the console
        console.log(`${property} : ${product[property]}`);
    }
}
// Call the function to print the properties of the product object
Print({ Name: "Tv", Price: 55000.33, Stock: true});

// op is:-
// Name : Tv
// Price : 55000.33
// Stock : true

// Example= 4
console.log("Example-4");

function Print(success){
    // check if 'success' is a function before calling it
    if(typeof success === 'function') {
        success();
    } else {
        console.error("Provided argument is not a function");
    }
}

// Call Print with an anonymous function that logs "Login Success" to the console

Print(function(){
    console.log("Login Success");
});
// op is Login success

/*
- Every parameter that you defined in function declaration is mandatory to implement.
  [ Every parameter is required ]

- If value is not passed into parameter, then it returns "undefined".
- You have to explicity configure the functionality if value is undefined.
*/

// Example= 5
console.log("Example= 5");

// Function to print the manufactured date in a readable format
function Print(Mfd) {
    if (Mfd instanceof Date && !isNaN(Mfd)) {
        console.log(`Manufactured: ${Mfd.toDateString()}`);
    } else {
        console.log("Invalid date");
    }
}

// Call the Print function with a specific date
let date = new Date("2023-12-15");
Print(date); 
// Manufactured: Fri Dec 15 2023


/*
- A function can have multiple parameters.
- Every parameter is required and have order dependency.
*/

function Details(id, name, price, stock){
    // Display the details of the Product
    console.log(`
        id=${id}
        Name=${name}
        price=${(price !== undefined) ? price : "N/A"}
        Stock=${stock}
        `);
}
// Call the Details function with speecific arguments
Details(1,"Samsung TV", undefined, true);

// Output is =
// id=1
// Name=Samsung TV
// price=N/A
// Stock=true
        