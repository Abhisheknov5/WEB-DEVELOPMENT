// Array Method
console.log("Array Method");

// 1 sort
console.log("Sort Method");

const fruits1 = ["Mango","Guava","Apple","Orange","pineapple"];
console.log(fruits1);
console.log(fruits1.sort());

// 2 reverse
console.log("Reverse Method");

const fruits2 = ["Mango","Guava","Apple","Orange","pineapple"];
console.log(fruits2);
console.log(fruits2.sort());
console.log(fruits2.reverse());

// 3 pop
console.log("pop Method");

const fruits3 = ["Mango","Guava","Apple","Orange","pineapple"];
console.log(fruits3);
console.log(fruits3.pop());
console.log(fruits3);

 //The pop() method returns the value that was popped out. 

// const car1 = ["Swift","Magnite","xuv","kia"];
// let cars = car1.pop();
// console.log(car1);
// console.log(cars);

// 4 push
console.log("push Method");

const fruits4 = ["Mango","Guava","Apple","Orange","pineapple"];
console.log(fruits4);
fruits4.push("Litchi");
console.log(fruits4);

fruits4.push("Grapes");
console.log(fruits4);

//The push method  return the new Array length.

// const car2 = ["Swift","Magnite","xuv","kia"];
// let length = car2.push("bolero");
// console.log(car2);
// console.log(length);

// 5 shift
console.log("shift Method");

const fruits5 = ["Mango","Guava","Apple","Orange","pineapple"];
console.log(fruits5);
console.log(fruits5.shift());
console.log(fruits5);

 // The shift() method returns the value that was "shifted out".

// const car3 =  ["Swift","Magnite","xuv","kia"];
// let  car = car3.shift();
// console.log(car3);
// console.log(car);

//6 unshift
console.log("unshift method");

const fruits6 = ["Mango","Guava","Apple","Orange","pineapple"];
console.log(fruits6);
console.log(fruits6.unshift("Litchi"));
console.log(fruits6);



// 7 Concat 
console.log("Concat Method");

const a1 = ["Abhishek","Aman","Sumit"];
const b1 = a1.concat("Vikash","Nishant");
console.log(b1);

// Another method for concat
 const x1 = [1,2,3,4.5];
 const y1 = [6,7,8,9,10];
 const c = x1.concat(y1);
 console.log(c);

 // Merging three Arrays
 const aa =[1,2,3,4,5];
 const bb = [6,7,8,9,10];
 const cc = [11,12,13,14,15];
 const dd = aa.concat(bb,cc);
 console.log(dd);

 // Converting an Array of Strings into Strings in Javascript
 console.log("Converting an Array of Strings into Strings in Javascript");

 const StringArray = ["Abhishk","Alok","Mohit","Ram"]
 console.log(StringArray.toString());

// Converting an Array of Numbers into a String in Javascript
console.log("Converting an Array of Numbers into a String in Javascript");

const IntArray = [1,2,3,4,5];
console.log(IntArray.toString());

// Converting Mix Arrays (both numbers and string) into Strings in Javascript
console.log("Converting Mix Arrays (both numbers and string) into Strings in Javascript");

const MixArray = ['Apple',0,1,2];
console.log(MixArray.toString());

// Converting String Back to the Array In Javascript
console.log("Converting String Back to the Array In Javascript");

const MixedArray = [ 'Bill',0,1,2];
const string = MixedArray.toString()
const ans_array = string.split(',');
console.log(ans_array);

// Nested Arrays 
console.log("Nested Array");

const NestedArr = [1,"Abhishek",["Aman",2]];
console.log(NestedArr.toString());



 // 8 Join
 console.log("join Method");
 
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits7);
console.log(fruits7.join("*"));

// Another method
const aaa = ["Abhishek","Aman","Mohan"];
const bbb = ["Rahul","Sumesh"];
const ccc = aaa.concat(bbb);
const ddd = ccc.join("   ")
console.log(ddd);

 
// 9 Slice
console.log("slice Method");

const fruits8 = ["Mango","Guava","Apple","Orange","pineapple"];
console.log(fruits8.slice(1));
console.log(fruits8.slice(-2));
console.log(fruits8.slice(-4,-1));
console.log(fruits8.slice(1,5));

// 10 Splice
console.log("splice Method");
// The splice method can be used to add new items to an Array.

const fruits9 = ["Mango","Guava","Apple","Orange","pineapple"];
console.log(fruits9);
console.log(fruits9.splice(2,0,"Lemon","Kiwi"));
console.log(fruits9);

// Array replacing or Removing an existing element and Add New element at that place

const fruits10 = ["Mango","Guava","Apple","Orange","pineapple"];
console.log(fruits10);
console.log(fruits10.splice(2,0,"Lemon","Kiwi"));
console.log(fruits10);

//Changing Elements
console.log("Changing Elements")
const fruits11 = ["Mango","Guava","Apple","Orange","pineapple"];
console.log(fruits11);
console.log(fruits11[1]);

// 11 delete 
//Use pop() or shift() instead.
// const fruits12 = ["Mango","Guava","Apple","Orange","pineapple"];
// console.log(fruits12);
// console.log(fruits12.delete[0]);

// 12 length
console.log("length Method");

const fruits12 = ["Mango","Guava","Apple","Orange","pineapple"];
fruits12[fruits12.length] = "Kiwi";
console.log(fruits12);

// 13 isArray
console.log("isArray Method");

const fruits13 = ["Mango","Guava","Apple","Orange","pineapple"];
console.log(Array.isArray(fruits13));

const boy = ["Ak","Bk","Ck"];
let results = Array.isArray(boy);
console.log(results);

// Condition
console.log("Condition");

const z = "Rahul";
//const a =["Abhishek","Amit","Akah","Aman"];
console.log(Array.isArray(z));

if(Array.isArray(z)) {
    console.log("This is an Array");
}else{
    console.log("This is not an Array");
}

// 14 indexOf
console.log("indexOf Method");

const fruits14 = ["Mango","Guava","Apple","Orange","pineapple"];
console.log(fruits14.indexOf("Apple"));
console.log(fruits14.indexOf("Apple",2));

const fruits15 = ["Mango","Guava"];
let resultss = fruits15.indexOf("Apple",3);
console.log(resultss);

// 15 lastIndex
console.log("lastIndex Method");

const fruits16 = ["Mango","Guava","Apple","Orange","pineapple"];
console.log(fruits16.lastIndexOf("Orange"));
console.log(fruits16.lastIndexOf("Orange",2));

// 16 includes
console.log("includes Method");

const fruits17 = ["Mango","Guava","Apple","Orange","pineapple"];
console.log(fruits17.includes("Mango"));
console.log(fruits17.includes("pea"));

// 17 some
console.log("some method");

const ages = [10,13,18,20];
console.log(ages);

console.log(ages.some(checkAdult));
// const b = ages.some(checkAdult);
// console.log(b);

function checkAdult(age){
    return age >= 18;
}

// 18 every
console.log("every method");

const ages1 = [100,19,25,20];
console.log(ages1);

console.log(ages1.every(checkAdult));
function checkAdult(age){
    return age >= 18;
}

// 19 find
console.log("find Method");

const ages2 = [10,23,19,20];
console.log(ages2);

console.log(ages2.find(checkAdult));
function checkAdult(age) {
    return age >= 18;
}

// 20 findIndex
console.log("findIndex Method");

const ages3 = [10,23,19,20];
console.log(ages3);

console.log(ages3.findIndex(checkAdult));
function checkAdult(age) {
    return age >= 18;
}

// 21 filter
console.log("filter Method");

const ages4 = [50,12,19,20];
console.log(ages4);

console.log(ages4.filter(checkAdult));
function checkAdult(age) {
    return age >= 18;
}

// 22  Array to Strings, valueOf
console.log(" Array to Strings, valueOf");

const fruits18 = ["Apple","Mango","Pineapple","Litchi"];
console.log(fruits18.toString());
console.log(fruits18.valueOf());

// 23 fill 
console.log("fill method");

const fruits19 = ["Apple","Mango","Pineapple","Litchi"];
console.log(fruits19.fill("Orange"));

// 24 forEach
// console.log("forEach method");

const fruits20 = ["Apple","Mango","Pineapple","Litchi"];
fruits20.forEach(function(value,index){
    console.log(index + " : "+value);
})


// const fruits20 = ["Apple","Mango","Pineapple","Litchi"];
// fruits20.forEach(loop);

// function loop(value,index){
//     console.log(index + " : "+value);
// }
