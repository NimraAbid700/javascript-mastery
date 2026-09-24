// Functions are reusable blocks of code that perform a specific task. They can take inputs, called parameters, and return an output. Functions help to organize code, make it more readable, and avoid repetition.

function sayMyName() {
    console.log('hello, my name is Ali');
}
sayMyName(); // Outputs: hello, my name is Ali

function addNumbers(a, b) { // This function takes two parameters, a and b, and adds them together. It then logs the result to the console.
    console.log(a + b);
}
const result = addNumbers(5, 3); // Outputs: 8 // these are the arguments that we are passing to the function. The function will take these arguments and add them together, then log the result to the console.
console.log(result); // Outputs: undefined // This is because the addNumbers function does not return a value, it only logs the result to the console. If we want to get the result of the addition, we need to return the value from the function.
addNumbers(5, '3'); // Outputs: 53
addNumbers(5, null); // Outputs: 5

function addTwoNumbers(a, b) {
    // let result = a + b;    one way used two lines of code
    // return result;
    return a + b;  // other way used one line of code
    
    // This line of code will never be executed because it comes after the first return statement. Once a return statement is executed, the function exits and no further code in the function is executed.
     // This function takes two parameters, a and b, and adds them together. It then returns the result of the addition. The return statement is used to send a value back to the caller of the function. In this case, we are returning the result of the addition, which can be stored in a variable or used in another expression.
    // The return statement is important because it allows us to get the result of the function and use it in our code. Without the return statement, we would not be able to access the result of the addition outside of the function.
    // console.log("Nimra"); // This line of code will never be executed because it comes after the return statement. Once a return statement is executed, the function exits and no further code in the function is executed.
}
// console.log(addTwoNumbers(5, 3)); // Outputs: 8
const result2 = addTwoNumbers(5, 3); 
console.log(result2); // Outputs: 8


function loginUser(username) {
    return `${username} just logged in`
}

console.log(loginUser("Ali"));
console.log(loginUser("")); // Outputs:  just logged in
console.log(loginUser()); // Outputs: undefined just logged in // This is because we did not pass any argument to the function, so the username parameter is undefined. When we use template literals to create the string, the undefined value is converted to a string and concatenated with the rest of the string.


function loginUser2(username = "Ali") { // This function takes a parameter called username and has a default value of "Ali". If no argument is passed to the function, the username parameter will be set to "Ali". If an argument is passed, the username parameter will be set to that value.
    return `${username} just logged in`;
}
console.log(loginUser("Nimra")); // Outputs: Nimra just logged in
console.log(loginUser("")); // Outputs:  just logged in
console.log(loginUser2()); // Outputs: Ali just logged in

function loginUserMessage(username) {
    if(username === undefined) {
        console.log("Please provide a username");
        return 
    }
    // if(!username) {
    //     console.log("Please provide a username");
    //     return 
    // }
    return `${username} just logged in`;
}
console.log(loginUserMessage()); // Outputs: Please provide a username

function loginUserMessage2(username = "Sam") {
    if(username === undefined) {
        console.log("Please provide a username");
        return 
    }
    // if(!username) {
    //     console.log("Please provide a username");
    //     return 
    // }
    return `${username} just logged in`;
}
console.log(loginUserMessage2()); 




// Rest parameters allow us to pass an arbitrary number of arguments to a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array. This is useful when we don't know how many arguments will be passed to the function.

function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));
// this one is suitable for shopping cart where we can pass any number of items and get the total price.The rest parameter collects all remaining arguments into an array.

function calculateCartPrice2(val1,val2,...num1) {
    return num1;
}

console.log(calculateCartPrice2(200, 400, 500, 2000));


// function test(...num1, val1) {

// }    
// not allowed to have a parameter after the rest parameter. The rest parameter must be the last parameter in the function definition. This is because the rest parameter collects all remaining arguments into an array, and if there were any parameters after it, they would not be able to receive any arguments.




// Object passing is a way to pass an object as an argument to a function. This allows us to pass multiple values to a function in a single object, rather than passing each value as a separate argument. This can make our code more organized and easier to read.
const user = {
    username: "Ali",
    price: 200,
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user); // Outputs: Username is Ali and price is 200
handleObject({username: "Nimra", price: 300}); // Outputs: Username is Nimra and price is 300






// Array passing is a way to pass an array as an argument to a function. This allows us to pass multiple values to a function in a single array, rather than passing each value as a separate argument. This can make our code more organized and easier to read.
const mynewArray = [200,400,100,600];

function handleArray(anyarray) {
    return anyarray[1];
}

console.log(handleArray(mynewArray)); // Outputs: 400
console.log(handleArray([20 ,40 ,10 , 60])); // Outputs: 400