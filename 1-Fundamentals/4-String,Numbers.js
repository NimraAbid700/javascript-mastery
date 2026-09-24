const name = "John Doe";
const repoCount = 10;
// console.log("hello my name is " + name + " and I have " + repoCount + " repositories.");

console.log(`hello my name is ${name} and I have ${repoCount} repositories.`);

const grandma = new String("Grandma"); // new keyword se object create hota hai.it is not a primitive string, it is an object of type String. 
console.log(grandma);
console.log(typeof grandma); // object. Object has key value pairs. It has properties and methods. It has a length property and it has methods like toUpperCase(), toLowerCase(), etc.
console.log(grandma[0]);
console.log(grandma.__proto__); // {}
console.log(grandma.length);
console.log(grandma.toUpperCase());
console.log(grandma.toLowerCase());
console.log(grandma.charAt(2));
console.log(grandma.indexOf("a"));
console.log(grandma);

const newString = grandma.substring(0,4);
console.log(newString);

const newString2 = grandma.slice(-8,7);
console.log(newString2);

const newString3 = "  Hello World  ";
console.log(newString3);
console.log(newString3.trim());

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20", "-"));

console.log(url.includes("hitesh") ? "URL is valid" : "URL is not valid");

let str ="grandma";
console.log(str.split('a'));

// Numbers 

const score = 400;
console.log(score);
console.log(typeof score); // number


const balance = new Number(100);
console.log(balance); //Object { 0: 1, length: 1, [[PrimitiveValue]]: 100 }
console.log(typeof balance); // object

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 23.9866;
console.log(otherNum);
console.log(otherNum.toPrecision(3));

const otherNum1 = 1123.9866;
console.log(otherNum1.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toExponential());
console.log(hundreds.toLocaleString("en-IN"));

//*********   Maths  **********
console.log(Math);
console.log(typeof Math);

console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(4.6)); // round off the number to the nearest integer. If the decimal part is 0.5 or more, it rounds up, otherwise it rounds down.
console.log(Math.ceil(4.6)); // rounds up to the next integer.
console.log(Math.floor(4.6)); // rounds down to the previous integer.
console.log(Math.abs(-4.6)); // converts negative number to positive number.
console.log(Math.max(4, 6, 2, 8));
console.log(Math.min(4, 6, 2, 8));
console.log(Math.random()); // generates a random number between 0 and 1. It can be 0 but it will never be 1. It can be a decimal number like 0.123456789.
console.log(Math.floor(Math.random() * 10) + 1); // generates a random number between 1 and 10. Math.random() generates a random number between 0 and 1, then we multiply it by 10 to get a number between 0 and 10, then we add 1 to get a number between 1 and 11, then we use Math.floor() to round it down to the nearest integer, so we get a number between 1 and 10.

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // generates a random number between min and max. We multiply Math.random() by (max - min + 1) to get a number between 0 and (max - min + 1), then we add min to get a number between min and max, then we use Math.floor() to round it down to the nearest integer, so we get a number between min and max.

// +1 value iss iye krty so that kw hmary pass 0 value na aaye. it will generate a number between 0 and 10, then we add 1 to get a number between 1 and 11, then we use Math.floor() to round it down to the nearest integer, so we get a number between 1 and 10.


// **********  Date and Time  *************
let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toTimeString());
console.log(mydate.toLocaleString());
console.log(mydate.getFullYear());
console.log(mydate.getMonth());
console.log(mydate.getDate());
console.log(mydate.getHours());
console.log(mydate.getMinutes());
console.log(mydate.getSeconds());
console.log(mydate.getMilliseconds());
console.log(mydate.getDay()); // 0 for Sunday, 1 for Monday, 2 for Tuesday, 3 for Wednesday, 4 for Thursday, 5 for Friday, 6 for Saturday.
console.log(mydate.getTime()); // returns the number of milliseconds since January 1, 1970, 00:00:00 UTC. It is also known as Unix time or Epoch time. It is used to represent a specific point in time. It is a large number that keeps increasing every millisecond. It is used in many programming languages and databases to store and manipulate dates and times.

const newDate = new Date("2020-01-01");
console.log(newDate.toString());

console.log(typeof mydate);

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

console.log(mydate.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
} ));



// Short-Circuiting...JavaScript can stop evaluating expressions early.

// OR (||) Returns the first truthy value.
console.log("Ali" || "Ahmed"); // output: Ali because The first value is already truthy.
console.log("" || "Guest");  // output: Guest

// AND (&&) Returns the first falsy value.
console.log(true && "Hello"); // output: Hello
console.log(false && "Hello"); // output: false

// The nullish coalescing (??) operator checks only for null or undefined.


console.log("" || "Hello")  //prints "Hello". An empty string "" is falsy. The OR operator moves to the next value.
console.log("Ali" && "Ahmed") // prints "Ahmed". The string "Ali" is truthy. The AND operator moves to the next value and returns it.
console.log(0 || 100) // prints 100. The number 0 is falsy. The OR operator skips to 100.
console.log(0 ?? 100) // prints 0. The number 0 is not null or undefined. The nullish operator keeps 0.
console.log(null ?? "Guest") // prints "Guest". The value is null. The nullish operator falls back to the right side.
console.log(false || true) // prints true. The boolean false is falsy. The OR operator returns true.
