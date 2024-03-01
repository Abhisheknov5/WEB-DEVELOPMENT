// Sorting an Array //
/*
1 Sorting an Array:-
The sort() method sorts an array alphabetically:
*/
console.log('1 Sorting an Array');
const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit1);
console.log("The sort() method sorts an array alphabetically\n", fruit1.sort());

/*
2 Reversing an Array:-
The reverse() method reverses the elements in an array.
You can use it to sort an array in descending order:
*/
console.log('2 Reversing an Array');
const fruit2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit2);
// First sort the array alphabetically
console.log("First sort the array alphabetically\n", fruit2.sort());
// Then, reverse the sorted array to get it in descending order.
console.log("By combining sort() and reverse() you can sort an array in descending order\n", fruit2.reverse());

/*
3 Numeric Sort:-
By default, the sort() function sorts values as strings.
This works well for strings ("Apple" comes before "Banana").
However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce incorrect result when sorting numbers.
You can fix this by providing a compare function:
*/
// Ascending Order 
console.log('3 Numeric Sort on Ascending Order ');
const point1 = [40, 100, 1, 5, 25, 10];
console.log(point1);
// Sort the array in Ascending Order
point1.sort(function(a, b){
    return a - b
});
console.log("Sort the array in ascending order\n", point1);

// Descending Order
console.log('3 Numeric Sort on Descending Order');
const point2 = [40, 100, 1, 5, 25, 10];
console.log(point2);
// Sort the array in Descending Order
point2.sort(function(a, b){
    return b - a
});
console.log("Sort the array in descending order\n", point2);

/*
4 The Compare Function:-
The purpose of the compare function is to define an alternative sort order.
The compare function should return a negative, zero, or positive value, depending on the arguments:
function(a, b){return a - b}
When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
If the result is negative, a is sorted before b.
If the result is positive, b is sorted before a.
If the result is 0, no changes are done with the sort order of the two values.
Example:
The compare function compares all the values in the array, two values at a time (a, b).
When comparing 40 and 100, the sort() method calls the compare function(40, 100).
The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
You can use this code snippet to experiment with numerically and alphabetically sorting:
*/
console.log('4 The Compare Function');
const point3 = [40, 100, 1, 5, 25, 10];
console.log(point3);

function myFunction1() {
    point3.sort();
    console.log(point3);
}
function myFunction2() {
    point3.sort(function(a, b) {
        return a - b
    });
    console.log(point3);
}

/*
5 Sorting an Array in Random Order:-
*/
console.log('5 Sorting an Array in Random Order');
const point4 = [40, 100, 1, 5, 25, 10];
function myFunction3() {
    point4.sort(function(){
        return 0.5 - Math.random()
    });
    console.log(point4);
}
myFunction3();



