// = means assignment.
// == is the loose equality operator which checks if two values are equal after converting them to a common data type. This conversion process is known as type coercion.
// === means comparison(strict equality comparison operator) which returns true only if both the value and the data type of the two operands are exactly the same.

let name = "Nimra";   // string
let age = 22;        // number
let isStudent = true; // boolean

console.log(typeof name);     // Output: "string"
console.log(typeof age);      // Output: "number"
console.log(typeof isStudent); // Output: "boolean"

// JS is dynamically typed, so we can change the type of a variable by assigning a different type of value to it:

name = 123; // Now 'name' is a number
age = "twenty-two"; // Now 'age' is a string
isStudent = "yes"; // Now 'isStudent' is a string

console.log(typeof name);     // Output: "number"
console.log(typeof age);      // Output: "string"
console.log(typeof isStudent); // Output: "string"

let x = 10;
x = "hello";
console.log(typeof x); // Output: "string"

let y = "hello";
y = 10;
console.log(typeof y); // Output: "number"

let n0 = "33";
let value = Number(n0);
console.log(typeof value);
console.log(value);

let number = "33abc";
let value1 = Number(number);
console.log(typeof value1);
console.log(value1);

let z = null;
let value2 = Number(z);
console.log(typeof value2);
console.log(value2); // Output: "object"

let n = "Nimra";
let value3 = Number(n);
console.log(typeof value3);
console.log(value3);

// "33" is a string that can be converted to the number 33, so Number("33") returns 33.

// "33abc" is a string that cannot be fully converted to a number, so Number("33abc") returns NaN (Not-a-Number).

// null is a special value in JavaScript that represents the absence of any object value. When you try to convert null to a number using Number(null), it returns 0.

// "Nimra" is a string that cannot be converted to a number, so Number("Nimra") returns NaN (Not-a-Number).

// In JavaScript, the Number() function is used to convert a value to a number. The behavior of this function depends on the type of the input value:
// - If the input is a string that can be parsed as a valid number (like "33"), it will return the corresponding number (33 in this case).
// - If the input is a string that cannot be parsed as a valid number (like "33abc" or "Nimra"), it will return NaN (Not-a-Number).
// - If the input is null, it will return 0.

// true and false are also converted to numbers, with true converting to 1 and false converting to 0.

let isLoggedIn = 1;
let booleanLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanLoggedIn);
console.log(booleanLoggedIn); // Output: true

isLoggedIn = 0;
booleanLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanLoggedIn);
console.log(booleanLoggedIn); // Output: false

isLoggedIn = "hello";
booleanLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanLoggedIn);
console.log(booleanLoggedIn);

isLoggedIn = "";
booleanLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanLoggedIn);
console.log(booleanLoggedIn);

// In JavaScript, the Boolean() function is used to convert a value to a boolean (true or false). The behavior of this function depends on the type of the input value:
// - If the input is a non-empty string (like "hello"), it will return true.
// - If the input is an empty string (""), it will return false.
// - If the input is a number, 0 will convert to false, while any non-zero number will convert to true.
// - If the input is null, undefined, or NaN, it will convert to false.
// - If the input is an object (including arrays), it will convert to true.

let someno = 22;
let stringNo = String(someno);
console.log(typeof stringNo);
console.log(stringNo);



// Two Main Categories of Data Types
// JavaScript divides types into two groups.


// 1. Primitive Types
// These store actual values.

// string
// number
// boolean
// undefined( value and space declared but not assigned value)
// null(empty value, but typeof null is "object" due to a historical bug in JavaScript)
// symbol(to make value unique)
// bigint


// 2. Reference Types (Objects) or on-primitive
// These store references (addresses in memory). Gives return type Object when we use typeof operator. They are mutable (can be changed after creation) and can have properties and methods. They include:

// Examples:
// Objects
// Arrays
// Functions
// Dates
// Maps/Sets

console.log(typeof []); // Output: "object"
// Array is a special Object.

// function return type is Object function. its a special type of object that can be called. it has properties and methods. it can be stored in a variable, passed as an argument to a function, and returned from a function.



// *********************************************

// Stack(Primitive types are stored in the stack, which is a simple data structure that operates in a last-in, first-out (LIFO) manner. When a primitive value is assigned to a variable, it is stored directly in the stack. When you access the variable, you get the value directly from the stack. 

// Heap(Reference types are stored in the heap, which is a more complex data structure that allows for dynamic memory allocation. When a reference value is assigned to a variable, the variable stores a reference (or pointer) to the location in the heap where the actual object is stored. When you access the variable, you get the reference, and you can use it to access the object in the heap.) 

let myYoutubeChannel = "hitesh choudhary"; // stored in stack
let myYoutubeChannel2 = myYoutubeChannel; // stored in stack
console.log(myYoutubeChannel2);
myYoutubeChannel2 = "code with harry"; // stored in stack, but it does not change the value of myYoutubeChannel because it is a primitive type and stored in stack. it creates a new copy of the value in the stack.
console.log(myYoutubeChannel);
console.log(myYoutubeChannel2);

let user1 = {
    name: "Hitesh", 
    age: 30
}; // stored in heap
let user2 = user1; // stored in stack, but it does not create a new copy of the object in the heap. it creates a new reference to the same object in the heap.
user2.name = "Harry"; // stored in heap, it changes the value of name property of the object in the heap because both user1 and user2 reference the same object in the heap.
console.log(user1.name); // Output: "Harry"
console.log(user2.name); // Output: "Harry"

// reference means original value me changes hoti not in copy. copy me changes nahi hoti. reference me changes hoti hai because both variables point to the same object in the heap. copy me changes nahi hoti because it creates a new copy of the value in the stack.