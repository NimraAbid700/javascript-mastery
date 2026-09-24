let a = 10;
const b = 20;
var c = 30; 
// These variables are declared in the global scope, which means they are accessible from anywhere in the code. The variable a is declared with let, which means it can be reassigned but not redeclared. The variable b is declared with const, which means it cannot be reassigned or redeclared. The variable c is declared with var, which means it can be reassigned and redeclared.

if (true) {
    let a = 40; // This variable is only accessible within this block
    const b = 50; // This variable is only accessible within this block
    var c = 60; // This variable is accessible outside of this block because it is declared with var
    console.log("Inner", a);
    console.log("Inner", b);
    console.log("Inner", c);
} // This one block scope is created by the if statement. The variables a and b are only accessible within this block, while the variable c is accessible outside of this block because it is declared with var.

console.log("Outer", a); 
console.log("Outer", b); 
console.log("Outer", c); 


function one() {
    const username = "John"; 

    function two() {
        const website = "example.com";
        console.log("Inner Function", username); // This variable is accessible because it is declared in the outer function's scope
    }
    console.log("Outer Function", username); // This variable is accessible because it is declared in the outer function's scope

    // console.log("Outer Function", website); // This variable is not accessible because it is declared in the inner function's scope

    two(); // Calling the inner function to demonstrate that it can access the outer function's variable
}

one(); // Calling the outer function to demonstrate that it can access its own variable and call the inner function


// Closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables. This allows the inner function to "remember" the environment in which it was created, even after the outer function has finished executing. In this example, the inner function `two` can access the variable `username` from the outer function `one`, demonstrating closure in action.

if (true) {
    const username = "Alice"; 
    if (username === "Alice") {
        const website = "example.com";
        console.log(username + " - " + website);
    }
    // console.log(website); // This variable is not accessible because it is declared in the inner block's scope
    console.log(username);
}

// console.log(username); // This variable is not accessible because it is declared in the inner block's scope


//*******************Interesting******************
console.log(addone(5));

function addone(num) {
    return num + 1;
}
console.log(addone(5));


 
//console.log(addTwo(5)); // This will throw an error because addTwo is defined as a function expression and is not hoisted like function declarations. Function expressions are not hoisted, which means they cannot be called before they are defined. In this case, the function addTwo is defined after it is called, so it will throw a ReferenceError.

const addTwo = function(num) {
    return num + 2;
}

console.log(addTwo(5));