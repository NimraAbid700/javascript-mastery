// JS default behavior is Prototypal behavior or Prototypal inheritance. JavaScript is a prototype-based language, meaning objects inherit properties and methods directly from other objects (prototypes), rather than from rigid class blueprints like in Java or C++. JS haar nhi manti agr kch na mily parent se dhoondti then grandparent tb tk dhoondti jb tk null na mil jae agr koi cheez na ho.
const newHero = ['hulk', 'spiderman'];
console.log(newHero.length);

function multiplyBy5(num) {
    return num * 5
}
multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power); // function behavior bhi hai or object behavior bhi
console.log(multiplyBy5.prototype); // prototype sirf method nhi kch internal properties bhi deta or uss ka context bhi available hota



function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.printMe = function() {
    console.log(`score is ${this.score}`);
}

const chai = new createUser("Chai", 25);
const tea = new createUser("Tea", 250);

chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/