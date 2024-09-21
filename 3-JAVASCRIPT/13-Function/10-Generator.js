/*
Function Generator:-

- A function generator is used as backend for an iterator function in JavaScript.
- It is used to configure iterators, that can access elements from a collection in seqential order.
- Iterator doesn't require an initialization, condition and counter, because it is designed with a generator that provides built in initialization, condition and counter.

- A generator function in JavaScript is a special type of function that allows you to pause and resume its execution.
  This is done using the yield keyword. When a generator function is called, it doesn't run its code immediately.
  Instead, it returns a special iterator object known as a generator.
  You can control the execution of the generator function by calling the next() method on this generator object.
Syntax:
        function*  Name()
        {
        }
   
        "*" is a meta character used to configure zero or more occurances.

- Generator uses "yield" statement that evaluates and returns a value.
- "yield" specifies that the return value is not the last value everytime.
- It uses "next()" method to move to next value in sequence.
- It uses "value" to read and return the value present in collection.
- It uses "done()" to check the status of values in collection, done() method returns true if there are no more values to read.

        var ref = Name();
        ref.next().value
        ref.next().done
*/
console.log("Example-1");
// Define the Generator Function
function* Collection(){
    yield "Hello!";
    yield ["Delhi","Hyderabaad"];
    yield{ Rate: 3.5, Count: 4500 };
}

// Create an iterator from the Generator Function
var list = Collection();

// Log the values returned by the Generator function to the cosnole

console.log(list.next().value); // Output: Hello!
console.log(list.next().value); // Output: [ 'Delhi', 'Hyderabaad' ]
console.log(list.next().value); // Output: { Rate: 3.5, Count: 4500 }
console.log(list.next().value); // undefined


console.log("Example-2");
// Define a Generator Function
function*myGenerator(){
    yield 'First yield';
    yield 'Second yield';
    yield 'Third yield';
}

// Call the generator function to create a generator object
const generator = myGenerator();

console.log(generator.next().value); // Output: First yield
console.log(generator.next().value); // Output: Second yield
console.log(generator.next().value); // Output: Third yield
//console.log(generator.next().value); // Output: undefined


/*
Example: Traffic Light System
Imagine a traffic light that cycles through green, yellow, and red lights. Each light stays on for a certain amount
of time before switching to the next. A generator function can simulate this cycle, allowing you to move through the different
states of the traffic light.
*/

console.log("Real World Example: Traffic Light System");

// Define the Generator Function for the the Traffic Light
function*trafficLight(){
    while(true){ // Infinite loop to keep the traffic light cycling
        console.log("Green Light - Go!");
        yield "Green";  // Yielding control after green light

        console.log("Yellow light - Slow down!");
        yield "Yellow"; // Yielding control after yellow light

        console.log("Red light - Stop!");
        yield "Red";  // Yielding control after red light

    }
}
// create a generator object
const lightCycle = trafficLight();

// Simulate the traffic light system
console.log(lightCycle.next().value); // Output: Green light - Go!  (Green)
setTimeout(() => console.log(lightCycle.next().value), 3000); // After 3s, Output: Yellow light - Slow down!  (Yellow)
setTimeout(() => console.log(lightCycle.next().value), 5000); // After 2s, Output: Red light - Stop!  (Red)
setTimeout(() => console.log(lightCycle.next().value), 8000); // After 3s, Output: Green light - Go!  (Green)

/*
Explanation:
Generator Function (trafficLight): This function simulates the traffic light system. It uses a while (true) loop to keep cycling through the lights indefinitely.
Yield Statements: Each light change (Green, Yellow, Red) is represented by a yield statement. After yielding, the function pauses until the next .next() call.
Generator Object (lightCycle): Created from the trafficLight generator function, this object controls the execution of the traffic light system.
setTimeout: Used to simulate the passage of time between light changes.
*/