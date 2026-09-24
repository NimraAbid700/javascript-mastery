// this keyword is used for current context of the object. It refers to the object that is currently executing the code. In this case, it refers to the user object.
// Arrow functions do not have their own this context. Instead, they inherit this from the parent scope at the time they are defined. This means that if you use an arrow function as a method in an object, it will not have its own this and will refer to the this value of the enclosing context.

const user = {
    username: 'JohnDoe',
    price: 999,
    welcomeMessage: function() {
        console.log(`Welcome, ${this.username}! Your price is $${this.price}.`);
        console.log(this);
    }
}

// user.welcomeMessage(); // Output: "Welcome, JohnDoe! Your price is $999."
// user.username = 'Sam';
// user.welcomeMessage(); // Output: "Welcome, Sam! Your price is $999."

console.log(this); // output: {}
// this refers to empty object in the global context in node environment (in strict mode, it would be undefined). In browser, it would refer to the window object.

function chai() {
    console.log(this); // output: {}
}

chai(); // output: Object [global] in node environment (in strict mode, it would be undefined). In browser, it would refer to the window object.

function chai2() {
    let username = 'Alice';
    console.log(this.username);
}

chai2(); // output: undefined, because this refers to the global object, which does not have a username property.

const chai3 = function() {
    let username = 'Alice';
    console.log(this.username);
}

chai3(); // output: undefined, because this refers to the global object, which does not have a username property.

const chai4 = () => {
    let username = 'Alice';
    console.log(this.username);
}

chai4(); // output: undefined, because arrow functions do not have their own this context and inherit it from the parent scope, which is the global object in this case.





// {} curly braces ke sath return keyword likhna pre ga.
// if curly braces nahi likhi to return keyword likhne ki zarurat nahi hai. Implicit return hota hai.


// Explicit return in arrow functions...Explicit functions are functions that return a value using the return keyword. In arrow functions, if the function body contains multiple statements, you need to use curly braces and the return keyword to specify the value to be returned.
const addTwo= (a, b) => {
    return a + b;
}
console.log(addTwo(3, 5)); // output: 8

//Implicit return in arrow functions...Implicit functions are functions that return a value without using the return keyword. In arrow functions, if the function body contains only a single expression, you can omit the curly braces and the return keyword, and the value of that expression will be returned automatically.
const addTwo2= (a, b) =>  a + b;
console.log(addTwo2(3, 5));

//
const add2= (a, b) =>  (a + b);
console.log(add2(3, 5));


// To return an object literal from an arrow function, you need to wrap the object in parentheses. This is because the curly braces are interpreted as the start of a block of code, rather than an object literal. 

const createUser = (name, age) => ({
    name: name,
    age: age
});
console.log(createUser("Alice", 30)); // output: { name: "Alice", age: 30 }


const myArray = [1, 2, 3, 4, 5];

// Using arrow function with map method to create a new array with each element doubled
const doubledArray = myArray.map(num => num * 2);
console.log(doubledArray); // output: [2, 4, 6, 8, 10]

