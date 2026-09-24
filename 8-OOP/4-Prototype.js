let myName = "hitesh     ";
let myChannel = "chai     ";

console.log(myName.length);
console.log(myName.trim().length);
console.log(myName.truelength);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.amna = function() {
    console.log(`Amna is present in all objects`);
}
heroPower.amna();

Array.prototype.hey = function() {
    console.log(`Hello Amna`);
}

myHeroes.hey(); // gives output...Array has power to add function property but not object of heroPower
// heroPower.hey(); // gives error 

/************ Inheritance **********/
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()