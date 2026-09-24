// Comparison operator 
// < , > , <= , >= , == , === , != , !==(checks both value and type)

const isUserloggedIn = true;
const temperature = 41;

if (temperature === 50) {
    console.log("Temperature less thaan 50");   
} else {
console.log("Temperature greater thaan 50"); 
}



const score = 200;

if(score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`);
}
//console.log(`User power: ${power}`);


const balance = 1000;
//Implicit Scope...aaik line me code 
if(balance > 500) console.log("test");

// if(balance > 500) console.log("test"), console.log(''test2);  Immature Code, not recommended

if(balance < 500) {
    console.log('less than 500');
} else if(balance < 750) {
    console.log('less than 750');
} else if(balance < 900) {
    console.log('less than 900');
} else {
    console.log('less than 1200');
}


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

// Or operator to test multiple conditions
if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


//*************** Switch ************************

// Basic Syntax
// switch (key or expression) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Default case match");
        break;
}

// This is called fall-through. Without break, JavaScript keeps executing every following case until it reaches the end or a break.

const month1 = "Feb";

switch (month1) {
    case "Jan":
        console.log("January");
        break;
    case "Feb":
        console.log("February");
        break;
    case "March":
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;
    default:
        console.log("Default case match");
        break;
}


// Truthy or Falsy Values

//const userEmail = "hitesh.ai"; //give true result 
// const userEmail = ""; // gives false value bcz no string
const userEmail = []; // gives true value

if(userEmail) {
    console.log("Got user email"); 
} else {
    console.log("Don't have user email"); 
}



// ******** Falsy Values ***************
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// All remaining are true values.


// ******** Truthy Values ***************
// "0", "false", " ", [], {}, function(){}


if(userEmail.length === 0) {
    console.log("Array is empty");   
}


const emptyObj = {}; 

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

false == 0 // true
false == '' // true
0 == '' // true

// Nullish Coalescing Operator (??) is a logical operator in JavaScript that returns its right-hand side operand when its left-hand side operand is null or undefined. Otherwise, it returns the left-hand side operand.

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
val1 = null ?? undefined ?? 20

console.log(val1);


// Ternary Operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");

