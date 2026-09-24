const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter to takes callback

// const newNums = myNums.filter((num) => num > 4);
// const newNums = myNums.filter((num) => {
//     num > 4
// });  it will give empty array

const newNums = myNums.filter((num) => {
    return num > 4
}); // Output: [5, 6, 7, 8, 9, 10] because {} it means scope started so return keyword has to write

console.log(newNums);


// The forEach method in JavaScript always returns undefined. It is designed purely to iterate through an array and execute a block of code (like side effects) rather than to calculate and output a new value.

const no = myNums.forEach((num) => {
    return num > 4;
});

console.log(no); // undefined


const newNo = [];

myNums.forEach((num) => {
    if(num > 4)
    newNo.push(num)
});

console.log(newNo); // Output: [5, 6, 7, 8, 9, 10]

// forEach does not give new array....filter gives new array

const numbers = [5, 12, 8, 130, 44];
const largeNumbers = numbers.filter(num => num > 10);

console.log(largeNumbers); 
// Output: [12, 130, 44]


// Filtering an Array of Objects
const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' }
];

const admins = users.filter(user => user.role === 'admin');

console.log(admins);
// Output: [{ name: 'Alice', role: 'admin' }, { name: 'Charlie', role: 'admin' }]


const admin = users.filter(user => user.role === 'user');

console.log(admin); // filter returns array





const fruits = ['apple', 'banana', 'grapes', 'mango'];
const searchWord = 'ap';

const matchedFruits = fruits.filter(fruit => fruit.includes(searchWord));

console.log(matchedFruits);
// Output: ['apple', 'grapes']





// In JavaScript, the term "map" usually refers to either the Array.prototype.map() method used for transforming arrays, or the Map data structure used for storing key-value pairs
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map automatically returns value
const newNo1 = number
    .map( (num) => num * 10)
    .map( (num) => num + 1)
    .filter((num) => num>=40);
console.log(newNo1);


// The map() Array Method...The Array.prototype.map() method creates a new array by applying a callback function to every element of the original array, without changing the original data.
const numbers1 = [1, 2, 3, 4];
const doubled = numbers1.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]
console.log(numbers1); // Output: [1, 2, 3, 4] (Original unchanged)


// The Map Object (Data Structure)...The Map object is a collection of key-value pairs. Unlike standard JavaScript objects, a Map allows keys of any data type (including functions, objects, and numbers) and remembers the insertion order.

// Create a new Map
const userRoles = new Map();

// Set values
userRoles.set('alice', 'admin');
userRoles.set('bob', 'editor');

// Get values
console.log(userRoles.get('alice')); // Output: 'admin'

// Check size
console.log(userRoles.size); // Output: 2




// The Array.prototype.reduce() method in JavaScript executes a user-supplied "reducer" callback function on each element of an array to process and condense the data into a single output value. It is most commonly used for summing numbers, flattening arrays, or transforming data structures.


// array.reduce((accumulator, currentValue, currentIndex, array) => {
//   // Logic to return the updated accumulator
// }, initialValue);



const num = [1, 2, 3];

// const myTotal = num.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0);

const myTotal = num.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "py course",
        price: 999,
    },
    {
        itemName: "mobile dev course",
        price: 5999,
    },
    {
        itemName: "data science course",
        price: 12999,
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);