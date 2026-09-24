// Object literal

const user = {
    username: "amna",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);    
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // gives {} in node environment. In brower it gives window object.

// this keyword used for current context


// Constructor Function
const promiseOne = new Promise((resolve, reject) => {
    
})
const date = new Date()
// new hi constructor function hai. It allows you to make multiple instances from one object. so it will also save memory.

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Ali", 12, true);
const userTwo = new User("Youtube", 16, false);
console.log(userOne); // values override without new keyword
console.log(userTwo);
console.log(userOne.constructor);


/* The 4 Steps of the new Keyword
When you run const user = new User('Alice');, JavaScript performs these steps under the hood:

1. Creates a new empty object (e.g., {}).
2. Binds the this keyword inside the function to point directly to this newly created object.
3.Executes the function code, which assigns properties and values to this.
4. Links the object's prototype to the function's prototype and automatically returns the object. */

// 1. Define the blueprint (Constructor Function)
function SmartPhone(brand, model, price) {
  // 'this' refers to the new object being built
  this.brand = brand;
  this.model = model;
  this.price = price;

  this.showDetails = function() {
    console.log(`This is a ${this.brand} ${this.model}.`);
  };
}

// 2. Instantiate objects using the 'new' keyword
const phone1 = new SmartPhone('Apple', 'iPhone 15', 799);
const phone2 = new SmartPhone('Samsung', 'Galaxy S24', 899);

// 3. Access properties and methods
console.log(phone1.brand); // Output: Apple
phone2.showDetails();      // Output: This is a Samsung Galaxy S24.
console.log(phone1.constructor);

// also study instance of