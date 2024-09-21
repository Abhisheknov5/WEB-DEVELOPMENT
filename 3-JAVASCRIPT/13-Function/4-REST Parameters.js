/*
REST Parameters:-
[ ES 5+ ]

- A single rest parameter can allow multiple arguments.
- A rest parameter is defined by using "...paramName".
- Rest parameter is array type.

Syntax:
        function Name(...args)
        {
        }

        Name(value1, value2, value3, ...);
*/
// Example 
console.log("Example=1");

// Define a function named 'Details' that accepts a variable number of arguments using the rest parameter syntax
function Details(...args){
    // Destructure the arguments array into individual variables
    var[id, name, price, stock] = args;

    // Output the Product Details to the console
    console.log(`
        // Display the Product Id
        Id = ${id};

        // Display the Product Name
        Name = ${name};

        // Display the Product Price. If Price is undefined, Show "N/A"
        Price = ${(price !== undefined) ? price : "N/A"}

        // Display the stock status (true or false)
        Stock = ${stock}
        `);
}
// Call the " Details" Function with Specific Arguments
Details(101, "Nike Causuals", 5000.44, true);

// Op is = // id=101, name="Nike Causuals", price=5000.44, and stock=true

/*
- Every function can have only one rest parameter.
- You can define other parameters along with rest parameter.
- But the rest parameter must be the last parameter in formal list.

FAQ: Why a rest parameter must be last?
Ans : It uses an implicit iterator that reads upto end, hence there can't be a value after the last occurance.
*/
console.log("Example=2");
// Define a function named 'Details' that takes a title and a variable number of additional arguments
function Details(title, ...args){
    // Destructure the arguments array into individual Variables
    var[id, name, price, stock] = args;

     // Output the Product Details to the console
     console.log(`
        // Display the Title of the Product Details Section
         Title: ${title};

        // Display the Product ID
        Id = ${id};

        // Display the Product Name
        Name = ${name};

        // Display the Product Price. If Price is Undefined, Show "N/A"
        Price = ${(price !== undefined) ? price : "N/A"};

        // Display the Stock status (true or false)
        Stock = ${stock};

        `);
}
// Call the 'Details' function with a title and specific arguments: 
Details("Product Details", 101, "Nike Causuals", 5000.44, true);

// Op is = // title="Product Details", id=101, name="Nike Causuals", price=5000.44, and stock=true
