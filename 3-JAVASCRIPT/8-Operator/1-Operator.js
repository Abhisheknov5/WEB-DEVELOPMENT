//Operator
/*
Operator :-
Javascript operators are used to perform different types of mathematical and logical computations.

Examples:
The Assignment Operator = assigns values

The Addition Operator + adds values

The Multiplication Operator * multiplies values

The Comparison Operator > compares values
*/
console.log("Operator in Js");

// 1 Arithmetic Operator
console.log("1 Arithmetic Operator");
let a = 450;
let b = 15;
console.log("a + b=",a+b); // 465
console.log("a - b=",a-b); // 435
console.log("a / b=",a/b); // 30
console.log("a * b=",a*b); // 6750
console.log("a ** b=",a**b); // 6.283298708943145e+39
console.log("a % b=",a%b); // 0
console.log("a ** b=",a**b); // 6.283298708943145e+39
//Increment or decrement 
console.log("++a=",++a); // 451
console.log("a++=",a++); // 451

console.log("--a=",--a); // 450
console.log("a--=",a--); // 450

console.log("a=",a);
console.log("a--=",a--);

// 2 Assignment Operator
console.log("2 Assignment Operator");
let a1 =10;
let b1=10;
console.log(a1); // 10
console.log("a1+=",a1+b1); // 20
console.log("a1-=",a1-b1); // 0
console.log("a1*=",a1*b1); // 100
console.log("a1/=",a1/b1); // 1
console.log("a1%=",a1%b1); // 0
console.log("a1**=",a1**b1); // 10000000000


// 3 Comparison Operator

/* 5==5 => True
  6==5 => False
  5=='5' => True Here wee ignore the Data type.
  5==='5 => False
   === Equal value and equal type :- compare data type and compare their value
   
  # != not      
   8!=5 => True
   5!=5 => False // Means data type is not matched
   5!==8 => True
   
   # > Greater than
     5>8 => False
     5<8 => True
     8>=8 => True
     8<=8 =>True 
*/
console.log("3 Comparison Operator");
let comp1 = 6;
let comp2 = 7;
//let comp2 ="6"
console.log("comp1 == comp2 is", comp1 == comp2); // false
console.log("comp1 == comp2 is", comp1 != comp2); // true
console.log("comp1 === comp2 is", comp1 === comp2); // false
console.log("comp1 !== comp2 is", comp1 !== comp2); // true
console.log("comp1 > comp2 is", comp1 > comp2); // false

// 4 Logical Operator
/*
 && and Logical operator  # ||or ! not
   (5<10 && 6>1) => True       (5==5 || 6==5) => true      !(6==5) => true
   (5>10 && 6>1)=> False       (7==5 || 6==5) => false
 
*/
console.log("4 Logical Operator")
let x=5;
let y=6;
console.log(x<y && x==5); // true
console.log(x>y || x==5); // true
console.log(!false); // true
console.log(!true); // false

/*
5 JavaScript nullish coalescing operator :-

JavaScript nullish coalescing operator (??) that accepts two values 
and returns the second value if the first one is null or undefined.
value1 ?? value2


const result = value1;
 if(result === null || result === undefined){
    result = value2;
 }
A nullish value is a value that is either null or undefined.
*/

console.log('5 coalescing operator ')
const name = null ?? 'Abhishek';
console.log(name); // Abhishek

const age  = undefined ?? 28;
console.log(age); // 28

//Why nullish coalescing operator
//When assigning a default value to a variable, you often use the logical OR operator (||). For example:
let count;
let result = count ||1;
console.log(result); // 1

//The nullish coalescing operator is short-circuited
let r = undefined ?? console.log('Hii'); // Hii

//Chaining with the AND or OR operator
const m =(null || undefined) ?? 'Ok';
console.log(m); // ok



// 6 Exponentiation Operator :- 
//To raise a number to the power of an exponent, you often use the static method Math.pow() with the following syntax:
//Math.pow(base, exponent)
console.log('6 Exponentitation Operator')
let results = Math.pow(2,2); 
console.log(result); // 4

result = Math.pow(2,3);
console.log(results); // 8

let resultss = 2 ** 2;
console.log(results); // 4

let res = 2n ** 2n;
console.log(res); // 4n (BigInt Value)

let a2 = 2;
a1 **= 4;
console.log(a2); // 16

//The exponentiation operator ** raises a number to the power of an exponent.
//The exponentiation operator ** accepts values of the type number or bigint.

console.log('Ternary Operator');
// Ternary Operator
// let y = ((Condition) ? (expression) : (expression));
// Example

let y1 = ((10 > 5) ? (10) : (7));
console.log(y1); // 10

let x1 = ((10 < 5) ? (10) : (7));
console.log(x1); // 7

let a3 = ((true) ? (2 + 3) : (2 - 3));
console.log(a3); // 5

let c1 = 10;
let b2 = ((3 < 1) ? (2 - 3) : (++c1))
console.log(b2); // 11