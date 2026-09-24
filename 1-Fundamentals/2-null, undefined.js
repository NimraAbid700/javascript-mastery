// + with string → concatenation
// -, *, / → convert to number


// null => standalone Value, represents the absence of any object value, null means "no value" or "empty value". It is a primitive value and a falsy value. It is often used to indicate that a variable should have no value or that an object property is intentionally left empty.

// undefined => represents the absence of a value or an uninitialized variable. It is a primitive value and a falsy value. A variable that has been declared but not assigned a value will have the value undefined. It can also be used to indicate that a function does not return a value or that an object property does not exist.

// Example of null
let myVariable = null;
console.log(myVariable); // Output: null

// Example of undefined
let anotherVariable;
console.log(anotherVariable); // Output: undefined

// Example of a function that returns undefined
function myFunction() {
  // No return statement, so it returns undefined by default
}
console.log(myFunction()); // Output: undefined

// Example of an object property that is undefined
let myObject = {};
console.log(myObject.someProperty); // Output: undefined

// Example of a variable that is assigned null
let yetAnotherVariable = null;
console.log(yetAnotherVariable); // Output: null

// Example of a variable that is assigned undefined
let yetAnotherVariable2 = undefined;
console.log(yetAnotherVariable2); // Output: undefined

console.log(typeof null); // Output: "object"
console.log(typeof undefined); // Output: "undefined"
typeof null === typeof undefined; // Output: false
console.log(typeof myVariable);
console.log(typeof anotherVariable);
console.log(typeof myObject);
console.log(typeof yetAnotherVariable);
console.log(typeof yetAnotherVariable2);

console.log(typeof null);
console.log(typeof (null)); //as method

console.log(typeof []); // Output: "object"
// Array is a special Object.



// Primitive vs Reference (Very Important)

// 1. Primitive
// Copying creates a new value.

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
// a is unchanged.


// 2. Reference
// Copying shares the same memory reference.

let obj1 = {name:"Ali", age: 25};
let obj2 = obj1;

obj2.name = "Sara";

console.log(obj1.name);
console.log(obj2.age);

// Both variables point to same object.


// Type Coercion

// Type coercion means:
// JavaScript automatically converts one type to another. 

// Two Types of Coercion

// Implicit Coercion (Automatic)
// JavaScript converts types without you asking.
"5" + 10; // "510" (number 10 is coerced to string "10")
"5" - 10; // -5 (string "5" is coerced to number 5)
true + 1; // 2 (true is coerced to 1)
false + 1; // 1 (false is coerced to 0)
null + 1; // 1 (null is coerced to 0)
undefined + 1; // NaN (undefined is coerced to NaN)

// + with string → concatenation
// -, *, / → convert to number



// 2. Explicit Coercion (Manual)
// You convert the type yourself.

Number("5")
String(10)
Boolean(0)


// Boolean Conversion

// Falsy values are values that convert to false when coerced to a boolean. In JavaScript, the following values are considered falsy:
// - false
// - 0 (zero)
// - -0 (negative zero)
// - 0n (BigInt zero)
// - "" (empty string)
// - null
// - undefined
// - NaN

if(0){
 console.log("hello");
} //Nothing prints because 0 is falsy.

if(null){
 console.log("hello");
} //Nothing prints because null is falsy.

// All other values are considered truthy, meaning they convert to true when coerced to a boolean. This includes:
// - true
// - Any non-zero number (e.g., 1, -1, 3.14)
// - Any non-empty string (e.g., "hello", "0")
// - Any object (including arrays and functions) [e.g., {}, [], function() {}]


if("hello"){
 console.log("runs");
} // This will print "runs" because "hello" is a non-empty string and is truthy.

if({}){
 console.log("runs");
} // This will print "runs" because an empty object is truthy.

if([]){
 console.log("runs");
} // This will print "runs" because an empty array is truthy.

[] + [] // "" (empty string, because both arrays are coerced to empty strings and concatenated)

5 == "5" // true (number 5 is coerced to string "5" before comparison)

null == undefined // true (null and undefined are considered equal in non-strict comparison)

5 === "5" // false (strict equality does not perform type coercion, so number 5 is not equal to string "5")

null === undefined // false (strict equality does not perform type coercion, so null is not equal to undefined)

// Always use === and !== to avoid unexpected results due to type coercion.

console.log(typeof NaN); // Output: "number"
console.log(NaN === NaN); // Output: false (NaN is not equal to itself)
console.log("10" * "2"); // Output: 20 (both strings are coerced to numbers and multiplied)
console.log(true + true); // Output: 2 (both true values are coerced to 1 and added together)
console.log("10" * 2); // Output: 20 (string "10" is coerced to number 10 and multiplied by 2)
console.log(false == 0); // Output: true (false is coerced to 0 before comparison)
console.log(null == 0); // Output: false (null is only equal to undefined in non-strict comparison, not to 0)
console.log([] == false); // Output: true (empty array is coerced to an empty string, which is falsy, so it is equal to false in non-strict comparison)
console.log([] + {}); // Output: "[object Object]" (empty array is coerced to an empty string, and the object is coerced to "[object Object]", resulting in string concatenation)

console.log(2%3); // Output: 2 (the remainder of 2 divided by 3 is 2)

let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // Output: "Hello World" (string concatenation with a space in between)
str3 = str1 + str2;
console.log(str3);


console.log("2" > 1); // Output: true (string "2" is coerced to number 2 before comparison)
console.log("02" > 1); // Output: true (string "02" is coerced to number 2 before comparison)

console.log(null == 0); // Output: false (null is only equal to undefined in non-strict comparison, not to 0)
console.log(undefined == 0); // Output: false (undefined is only equal to null in non-strict comparison, not to 0)
console.log(null > 0); // Output: false (null is coerced to 0, but 0 is not greater than 0)
console.log(undefined > 0); // Output: false (undefined is coerced to NaN, and any comparison with NaN returns false)
console.log(null >= 0); // Output: true (null is coerced to 0, and 0 is greater than or equal to 0)
console.log(undefined >= 0); // Output: false (undefined is coerced to NaN, and any comparison with NaN returns false)

console.log("2" === 2); // Output: false (strict equality does not perform type coercion)