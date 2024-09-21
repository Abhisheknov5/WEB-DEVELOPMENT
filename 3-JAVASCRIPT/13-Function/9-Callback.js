/*

Function Callback :-

CallBack:
- It is a technique of configuring functions, which execute automatically according to the state and situation.
- Callback is a "Synchronous Technique", which blocks all other tasks while executing the specified.
- Callbacks are slow in process and use a blocking technique.

- A callback in JavaScript is a function that is passed as an argument to another function and is executed after
  the completion of that function.
  Callbacks are commonly used for asynchronous operations like handling events, making API requests, or reading files, 
  where you need to wait for something to finish before executing the next line of code.

Syntax:
    function  Name(callback1, callback2)
    {
           if(condition) {
          callback1(response);
           }
           else {
          callback2(response);
        }
    }

*/

// Function that takes a callback as a Parameter
function doTask(callback){
    console.log("Task is being done...");
    callback(); // Call the callback Function after the task is done.
}

// Callback Function
function taskCompleted(){
    console.log("Task is Completed..");
}

// Calling the function with the callback
doTask(taskCompleted);
// Output is
// Task is being done...
// Task is Completed..

/*
Example: Ordering Food Online
Imagine you're ordering food online. After you place the order, the restaurant prepares the food,
and once it's ready, they notify you. In this scenario, the notification is like a callback function
that is executed after the food preparation (the main task) is done.
*/

console.log("Real World Example: Ordering Food Online");

// Function to simulate placing an Order
function placeOrder(order, callback) {
    console.log(`Order placed: ${order}`);
    console.log("Preparing Your Food..");

    // Simulate Food Preparation time with setTimeout
    setTimeout(function(){
        console.log("Food is Ready!");
        callback(); // Notify that the Food is ready by calling the callback
    }, 3000); // 3 seconds to simulate preparation time
}

// Callback function to Notify the user
function orderReady(){
    console.log("Notification: Your foof is ready for pickup!");
}

//Placing an Order and passing the callback Function
placeOrder("Pizza", orderReady);

// Output is :-
// Order placed: Pizza
// Preparing Your Food..
// Food is Ready!
// Notification: Your foof is ready for pickup!

/*
Explanation:
placeOrder: This function represents placing a food order and takes two arguments: the order (like "Pizza") and a callback function.
Inside placeOrder, setTimeout simulates the time it takes to prepare the food (3 seconds). After the time passes, it calls the callback function to notify the user that their food is ready.
orderReady: This is the callback function that represents the notification sent to the user when their food is ready.
When you call placeOrder("Pizza", orderReady);, it simulates ordering a pizza and, after 3 seconds, notifies you that the pizza is ready for pickup.
This example illustrates how callbacks allow you to handle tasks that take time (like food preparation) and respond once those tasks are completed (notifying the user).
*/