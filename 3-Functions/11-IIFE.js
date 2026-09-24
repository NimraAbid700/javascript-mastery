// Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined. It is a design pattern that is also known as a Self-Executing Anonymous Function and contains two major parts. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

//  (Function definition braces)(function execution braces)   its syntax for IIFE

// Global scope pollution is a common problem in JavaScript, where variables and functions defined in the global scope can be accidentally overwritten or modified by other code. IIFE helps to avoid this problem by creating a new scope for the function, which prevents variables and functions defined within the IIFE from being accessible outside of it.

// IIFE can be used to create private variables and functions that are not accessible from the global scope. This can help to prevent naming conflicts and improve code organization.

(function() {
    // named IIFE
    console.log('DB Connected.');
})();   // Output: "DB Connected."

( (name) => {
    //unnamed IIFE
    console.log(`DB Connected two ${name}.`);
} )('Alice')

// How Javascript execute code and Call Stack: JavaScript is a single-threaded programming language, which means that it can only execute one task at a time. When a function is called, it is added to the call stack, which is a data structure that keeps track of the functions that are currently being executed. The call stack follows the Last In First Out (LIFO) principle, which means that the last function added to the stack is the first one to be executed.

// Javascript executes code in a synchronous manner, which means that it executes one line of code at a time, in the order that it appears in the program. When a function is called, it is added to the call stack, and the JavaScript engine starts executing the function's code. If the function calls another function, that function is added to the top of the call stack, and its code is executed before returning to the previous function.

// Javascript also has an event loop, which allows it to handle asynchronous tasks, such as network requests or user input. When an asynchronous task is initiated, it is added to a queue, and the JavaScript engine continues executing the synchronous code. Once the synchronous code has finished executing, the event loop checks the queue for any pending tasks and executes them in the order they were added.


// Call Stack Example: 

function first() {
    console.log('First function executed.');
}
function second() {
    console.log('Second function executed.');
}
function third() {
    console.log('Third function executed.');
}

first();
second();   
third();



function one() {
    console.log('First function executed.');
    two();
}
function two() {
    console.log('Second function executed.');
    three();
}
function three() {
    console.log('Third function executed.');
}

one();   // Output: "First function executed." "Second function executed." "Third function executed."
two();   // Output: "Second function executed." "Third function executed."
three();   // Output: "Third function executed."