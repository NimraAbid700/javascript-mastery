// for loop 
// for (initialization; condition; update) {}


for (let i = 0; i < 10; i++) {
    const element = i;
    if( element == 5 ) {
        console.log("5 is best number.");  
    }
    console.log(element); 
}


for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop value: ${i}`);  
        console.log(i + "*" + j + "=" + i*j); 
    }   
}

let myArray = ['flash', 'batman', 'superman'];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// break and continue

for (let index = 1; index <= 20 ; index++) {
    if(index == 5) {
        console.log("Detected value 5");
        break; // aaik bar detect krta then wohi stop kr deta
    }
    console.log(`Value of i is ${index}`); 
}


for (let index = 1; index <= 20 ; index++) {
    if(index == 5) {
        console.log("Detected 5");
        continue; // aaik bar skip kr deta condition
    }
    console.log(`Value of i is ${index}`); 
}

// while loop ....Used when number of iterations isn't known beforehand.
let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}

let array = ['flash', 'batman', 'superman'];
let i = 0;
while ( i < array.length) {
    console.log(`Name of superhero is ${array[i]}`);
    i++;
}


// do-while loop....Runs at least once.
let score = 1;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);


// High Order Array Loops

//  ["", "", ""]  strings in array
//  [{}, {}, {}]  objects in array


// In JavaScript, the for...of loop is used to iterate directly over the values of an iterable object. It provides a clean, readable syntax to extract each element sequentially without needing to track index numbers(array index) or use a traditional counter variable
const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
    console.log(i);
}

const greetings = "Hello World!";
for (const greet of greetings) {
    console.log(greet); 
}

const colors = ['red', 'green', 'blue'];

for (const color of colors) {
  console.log(color); 
} // Output: red, green, blue


// Map is an Object in js which hold key-value pair. No duplicate value in it.
const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
}

let obj = {
    "game1": "NFS",
    "game2": "Spiderman",
}

// for of loop is not for objects.
// for (const [key,value] of obj) {
//     console.log(key, ":-", value);
// } // Output: Object is not iterable





// for in loop is used for objects. In JavaScript, the for...in loop is used to iterate over the keys (property names) of an object. It extracts the string name of each property, allowing you to access the corresponding values using bracket notation.
const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple',
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const user = { name: "Alex", age: 28, role: "Developer" };

for (let key in user) {
  console.log(key);          // Logs: "name", "age", "role"
  console.log(user[key]);    // Logs: "Alex", 28, "Developer"
}


const programming = ['js', 'rb', 'py', 'java','cpp'];

for (const key in programming) {
      console.log(programming[key]);
}

// Map is not iterable so we can't use them in this way.
for (const key in map) {
    console.log(key);
}

// Objects pr for-in loop lagaye ge.
// Arrays pr for-of loop lagaye ge.


// A for-each loop (or enhanced for-loop) is used to iterate sequentially through items in a collection or array without needing to manage indexes or loop counters. It is primarily used to read or process every element in a dataset simply and safely.

const coding = ["js", "ruby", "java", "python", "cpp"];


// function () {}  This one is callback function which has no name.
// coding.forEach(function (val) {
//     console.log(val);
// })


// coding.forEach((item) => {
//     console.log(item);
// })


// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe);



coding.forEach((item,  index, array) => {
    console.log(item, index, array);
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


// Database se value array ke form me aati or hr aaik vae object hi hota.

myCoding.forEach( (item) => {
    console.log(item);
    console.log(item.languageName);
})


// for-each loop does not return any value
const values = myCoding.forEach( (item) => {
    //console.log(item);
    return item;
})

console.log(values); // undefined