// singleton- Literals ki tarha object banane ka ek tarika hai jo ke singleton hi bnta.
// singleton- ye apne tarha ka eik design pattern hai jisme hum ek hi instance create karte hain aur usi instance ko baar baar use karte hain like constructor. Isme hum directly object ke andar properties aur methods define kar sakte hain.

// Object literal se bhi object hi bnta hai, lekin usme hum directly properties aur methods define karte hain bina kisi constructor ke. Object literal me hum ek variable ke andar object ko define karte hain aur usme properties aur methods ko directly likhte hain.

//Object Literals
const userProfile = {
  name: "Alex",         // String value
  age: 30,              // Number value
  languages: ["JS", "Python"], // Array value
  greet: function() {   // Method (Function value)
    console.log("Hello!");
  }
};
//  this is an object literal named userProfile. It has properties like name, age, languages, and a method greet. The properties can hold different data types like strings, numbers, arrays, and functions.


const mySym = Symbol("key1"); // Symbol is a unique and immutable data type that can be used as a key for object properties. It is often used to create private properties in objects, as symbols are not accessible through normal property access methods.
const JsUser = {
    name: "Hitesh",
    'full_name': "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "India",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}

console.log(JsUser.email);
console.log(JsUser["email"]); // behind the scenes, JavaScript converts the dot notation to bracket notation when we access properties of an object. So, both JsUser.email and JsUser["email"] will give us the same result, which is "hitesh@google.com" and in bracket key should be in string format otherwise it will be treated as a variable and will give us undefined. For example, if we write JsUser[email] without quotes, JavaScript will look for a variable named email and since it is not defined, it will return undefined. But if we write JsUser["email"], it will look for the property named "email" in the JsUser object and return its value, which is "hitesh@google.com"
console.log(JsUser.isLoggedIn);
console.log(JsUser.lastLoginDays[1]);

console.log(JsUser['full_name']);
console.log(JsUser.full_name); // both will give us the same result, which is "Hitesh Choudhary". In JavaScript, when we access a property of an object using dot notation (JsUser.full_name), it looks for a property named "full_name" in the JsUser object. If it finds it, it returns its value. When we access the same property using bracket notation (JsUser['full_name']), it also looks for a property named "full_name" in the JsUser object and returns its value. So, both notations will give us the same result. 



// console.log(JsUser.'full_name'); // Not allowed syntax error because in JavaScript, when we use dot notation to access a property of an object, the property name must be a valid identifier. A valid identifier can only contain letters, digits, underscores, and dollar signs, and it cannot start with a digit. In this case, 'full_name' is not a valid identifier because it contains an underscore. Therefore, we cannot use dot notation to access the 'full_name' property of the JsUser object. Instead, we can use bracket notation (JsUser['full_name']) to access it without any syntax errors.

console.log(JsUser[mySym]); // This will return "mykey1" because we are using bracket notation to access the symbol property.

// console.log(JsUser.mySym); // mySym is a symbol property, and when we access it using dot notation, it will not work because symbols are not enumerable properties. To access the value of a symbol property, we need to use bracket notation with the symbol as the key. So, we should use JsUser[mySym] to access the value of the mySym property, which will return "mykey1".

JsUser.email = "example@gmail.com"; // we can update the value of a property in an object using dot notation. Here, we are updating the email property of the JsUser object.
console.log(JsUser.email); 


// Object.freeze(JsUser); // Object.freeze() is a method that prevents any modifications to an object. It makes the object immutable, meaning that you cannot add, delete, or modify any properties of the object after it has been frozen. In this case, we are freezing the JsUser object, which means that we cannot make any changes to its properties or values.
JsUser.email = "nimra@gmail.com"; 
console.log(JsUser); 

JsUser.greeting = function() {
    console.log("Hello, welcome to JavaScript!");
} 

JsUser.greeting2 = function() {
    console.log(`Hello JS user, ${this.name}`);
} 

console.log(JsUser.greeting()); // This will call the greeting method of the JsUser object and print "Hello, welcome to JavaScript!" to the console. However, since we have frozen the JsUser object using Object.freeze(), we cannot add new properties or methods to it. Therefore, when we try to add the greeting method, it will not be added to the object, and when we try to call it, it will return undefined. So, the output of this code will be undefined.
console.log(JsUser.greeting); 

console.log(JsUser.greeting2());


// Singleton(Constructor) - A singleton is a design pattern that restricts the instantiation of a class to a single instance and provides a global point of access to that instance. In JavaScript, we can create a singleton using an object literal. The object literal will contain properties and methods that we want to be shared across the entire application. Since the object literal is created only once, it ensures that there is only one instance of the singleton throughout the application.

const User = new Object(); // This creates a new empty object using the Object constructor. However, it is more common to create objects using object literals, which is a simpler and more concise syntax.


// Non singleton or Object Literal- A non-singleton is a design pattern where multiple instances of a class can be created. In JavaScript, we can create non-singleton objects using constructor functions or classes. Each time we create a new instance of the constructor function or class, a new object is created with its own properties and methods. This allows us to have multiple instances of the same type of object in our application.
const tinderUser = {}; // This creates a new empty object using object literal syntax. We can add properties and methods to this object as needed. Each time we create a new object using this syntax, we will have a separate instance of the object with its own properties and methods.
// Both will show same result.

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser); 

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Choudhary"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname); 

// Objects Merging - Object merging is the process of combining two or more objects into a single object. In JavaScript, we can merge objects using the Object.assign() method or the spread operator (...). The Object.assign() method takes one or more source objects and copies their properties into a target object. The spread operator allows us to create a new object by spreading the properties of existing objects into it.

const original = { a: 1 };

// Object.assign mutates 'original'
Object.assign(original, { b: 2 }); 
console.log(original); // { a: 1, b: 2 }

// Spread operator keeps 'original' intact
const freshOriginal = { a: 1 };
const brandNew = { ...freshOriginal, b: 2 };
console.log(freshOriginal); // { a: 1 }
console.log(brandNew);       // { a: 1, b: 2 }


const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};

// const obj3 = {obj1, obj2}; // This will create a new object obj3 that contains the properties of obj1 and obj2 as nested objects. The output will be {obj1: {1: 'a', 2: 'b'}, obj2: {3: 'c', 4: 'd'}}.


// less used
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); 

const obj3 = {...obj1, ...obj2}; // This will create a new object obj3 that contains the properties of obj1 and obj2 merged together. The output will be {1: 'a', 2: 'b', 3: 'c', 4: 'd'}.
console.log(obj3);

// Array of Objects - An array of objects is a data structure that allows us to store multiple objects in a single variable. Each object in the array can have its own properties and methods, and we can access them using their index in the array. This is useful when we want to work with a collection of related data, such as a list of users or products.
const users = [
    {
        id: 1,
        email: "one@gmail.com"
    },
     {
        id: 2,
        email: "two@gmail.com"
    },
     {
        id: 3,
        email: "three@gmail.com"
    },
]

console.log(users[1]);
console.log(users[1].email);

console.log(tinderUser);

// interesting
console.log(Object.keys(tinderUser));// This will return an array of the keys of the tinderUser object, which are ["id", "name", "isLoggedIn"]. Data type is Array,we can take all leys and can apply loop on them. Object.keys() is a method that returns an array of a given object's own enumerable property names, in the same order as we get with a normal loop. In this case, it will return an array of the keys of the tinderUser object, which are "id", "name", and "isLoggedIn".
console.log(Object.values(tinderUser)); // This will return an array of the values of the tinderUser object, which are ["123abc", "Sammy", false]. Data type is Array, we can take all values and can apply loop on them. Object.values() is a method that returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. In this case, it will return an array of the values of the tinderUser object, which are "123abc", "Sammy", and false.

console.log(Object.entries(tinderUser)); // This will return an array of the key-value pairs of the tinderUser object, which are [["id", "123abc"], ["name", "Sammy"], ["isLoggedIn", false]]. Data type is Array, we can take all key-value pairs and can apply loop on them. Object.entries() is a method that returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. In this case, it will return an array of the key-value pairs of the tinderUser object, which are ["id", "123abc"], ["name", "Sammy"], and ["isLoggedIn", false].

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

console.log(Object.freeze(tinderUser)); // This will freeze the tinderUser object, making it immutable. After freezing, we cannot add, delete, or modify any properties of the tinderUser object. So, if we try to change any property of the tinderUser object after freezing it, it will not have any effect and the object will remain unchanged.
