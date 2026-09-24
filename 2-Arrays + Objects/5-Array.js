// Arrays are resizable, we can add elements in it, ordered collections of values. They can hold any type of data, including numbers, strings, objects, and even other arrays. Arrays are zero-indexed or zero-based indexing, meaning the first element is accessed with index 0.

// Array is a special type of object in JavaScript that is used to store multiple values in a single variable. It is a collection of elements, where each element can be of any data type, including numbers, strings, objects, and even other arrays. Arrays are ordered collections, meaning that the elements are stored in a specific order and can be accessed using their index.

const myArray = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Superman", "Batman", "Wonder"];

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr2[1]);

// Array Methods

// push() - adds an element to the end of the array
myArray.push(6);
myArray.push(7);
console.log(myArray);

// pop() - removes the last element from the array
myArray.pop();
console.log(myArray);

// unshift() - adds an element to the beginning of the array
myArray.unshift(-1);
console.log(myArray);

// shift() - removes the first element from the array
myArray.shift();
console.log(myArray);

// some methods give answer in boolean value

// includes() - checks if an element is present in the array
console.log(myArray.includes(9));

// indexOf() - returns the index of the first occurrence of an element
console.log(myArray.indexOf(3));
console.log(myHeroes.indexOf("Batman"));


// length - returns the number of elements in the array
console.log(myArray.length);

// join() - joins all elements of the array into a string
console.log(myHeroes.join(", "));

const newArr = myArray.join();
console.log(newArr);
console.log(typeof newArr);

// slice() - returns a shallow copy of a portion of an array into a new array object
//shallow copy means that it creates a new array but does not create new objects for the elements in the array. Instead, it references the same objects in memory. So if you modify an object in the original array, it will also affect the corresponding object in the sliced array, and vice versa.
const slicedArray = myArray.slice(2, 5);
console.log(slicedArray);

// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
const splicedArray = myArray.splice(2, 3, 10, 11);
console.log(splicedArray);
console.log(myArray);

const marvelHeroes = ['thor', 'ironman', 'spiderman', ];
const dc_heroes = ['superman', 'batman', 'flash'];

marvelHeroes.push(dc_heroes);
console.log(marvelHeroes);
console.log(marvelHeroes[3]);
console.log(marvelHeroes[3][0]);

// marvelHeroes.concat(dc_heroes);
// console.log(marvelHeroes);

// const allHeroes = marvelHeroes.concat(dc_heroes);
// console.log(allHeroes);


// Spread operator - allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
const all_new_heroes = [...marvelHeroes, ...dc_heroes];
console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5 ]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);



// Points to remember about arrays

// Array.isArray() - checks if a value is an array
console.log(Array.isArray('Hitesh')); // false bcz value given is not array
console.log(Array.isArray([1,2,3,4,5])); // true bcz value given is array


// Array.from() - creates a new array from an iterable or array-like object
console.log(Array.from('Hitesh'));  // [ 'H', 'i', 't', 'e', 's', 'h' ]

// Array.from() can also be used to create an array from an array-like object, such as an object with a length property and indexed elements. However, in this case, the object {name: 'Hitesh'} does not have a length property or indexed elements, so Array.from() will return an empty array.
console.log(Array.from({name: 'Hitesh'})); // interesting


// Array Merging - We can merge two or more arrays using the concat() method or the spread operator. The concat() method creates a new array that is the result of merging the original arrays, while the spread operator allows us to merge arrays by spreading their elements into a new array.
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // creates a new array with the given arguments as elements