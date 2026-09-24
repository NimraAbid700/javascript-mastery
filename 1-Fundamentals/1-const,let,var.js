// Founder of javascript is Brenden Eich. 


// javascript is a dynamically typed language, which means you don't have to declare the type of a variable when you create it. The three keywords for declaring variables in JavaScript are `var`, `let`, and `const`. Dynamically typed means that the type of a variable can change at runtime, and you can assign different types of values to the same variable without any errors. For example, you can declare a variable using `let` and assign it a string value, and then later reassign it to a number or an object without any issues. This flexibility is one of the features that makes JavaScript a popular language for web development.
console.log("Hello, World!");
const accountID = 123456789;
let accountName = "John Doe";
var accountBalance = 1000.5;
accountBalance += 500;

// accountID = 987654321; // This will cause an error since accountID is a constant
accountName = "Nimra";
accountBalance -= 200;

console.table({ accountID, accountName, accountBalance });

var a = 10;
var a = 20; // allowed

let b = 10;
// let b = 20; //  error

console.log(a);
var a = 5;
console.log(a); // var allows redeclaration and reassignment, so this will not throw an error and will update the value of a to 5. The output will be 20 followed by 5.

console.log(b);
b = 15;
console.log(b); // let does not allow redeclaration, so the line `let b = 20;` would throw an error if uncommented. However, reassignment is allowed, so we can update the value of b to 15 without any issues. The output will be 10 followed by 15.
// const c = 10;
// const c = 20; // error // const does not allow redeclaration or reassignment, so this will throw an error if uncommented. The output will be 10, and the second declaration will cause a SyntaxError: Identifier 'c' has already been declared.
if (true) {
  var c = 60;
  console.log(c);
}
console.log(c); // var is function-scoped, so the variable c is accessible outside the if block. The output will be 60 followed by 60.

if (true) {
  let d = 70;
  const e = 80;
  console.log(d);
  console.log(e);
}
// console.log(d); // let is block-scoped, so the variable d is not accessible outside the if block. This will throw a ReferenceError: d is not defined.
// console.log(e); // const is also block-scoped, so the variable e is not accessible outside the if block. This will throw a ReferenceError: e is not defined.

const API_URL = "https://api.com";
let userCount = 0;

// const → default choice
// let → when value changes
// var → avoid in modern JS


// Reassignment is using the assignment operator (=) to give a variable a new value. const throws an error if you try to do this, while let and var allow it. However, with const, you can still modify the properties of an object or elements of an array, but you cannot reassign the variable itself to a new value.

const name = "Alice";
// name = "Bob"; // ❌ TypeError: Assignment to constant variable.

const users = ["Alice"];
// users = ["Bob"]; // ❌ TypeError: Assignment to constant variable.

const user1 = { name: "Alice" };
user1.name = "Bob"; // ✅ Allowed: We mutated the object
console.log(user1.name); // "Bob"

// Mutation is modifying the content of an object or array (e.g., changing properties, pushing new items) without changing the variable's reference. Reassignment is changing the variable's reference to point to a new value. With const, you cannot reassign the variable to a new value, but you can mutate the contents of an object or array that the const variable references.

const numbers = [1, 2, 3];
numbers.push(4); // ✅ Allowed: We mutated the array
console.log(numbers); // [1, 2, 3, 4]

// Because const prevents reassignment, not mutation.


// const button = document.querySelector("#btn");
// button.addEventListener("click", () => {
//   let count = 0;
//   count++;
// });



// This is one of the **most important JavaScript concepts** because it combines:
// * `var` vs `let`
// * **scope**
// * **closures**
// * **event loop / asynchronous behavior**

// So let’s break it **step-by-step** until it becomes crystal clear. 🧠
// # 1️⃣ First Example (`var`)

// ```javascript
// for (var i = 0; i < 3; i++) {
//    setTimeout(() => console.log(i), 100);
// }
// ```

// ### Output

// ```text
// 3
// 3
// 3
// ```

// Now let’s understand **why**.

// ---

// # 2️⃣ Step 1 — Understanding `var` Scope

// `var` is **function scoped**, not block scoped.

// So inside the loop there is **only ONE variable `i`**.

// Memory representation:

// ```
// i → ?
// ```

// ---

// # 3️⃣ Step 2 — Loop Execution

// The loop runs **very fast**.

// ### Iteration 1

// ```
// i = 0
// setTimeout scheduled
// ```

// ### Iteration 2

// ```
// i = 1
// setTimeout scheduled
// ```

// ### Iteration 3

// ```
// i = 2
// setTimeout scheduled
// ```

// ### Loop ends

// ```
// i = 3
// ```

// Now the loop is finished.

// ---

// # 4️⃣ Step 3 — `setTimeout` Runs Later

// `setTimeout` waits **100ms**.

// By the time it executes, the loop is **already finished**.

// So the value of `i` is now:

// ```
// i = 3
// ```

// Each callback prints the **same variable**.

// ```
// console.log(i)
// console.log(i)
// console.log(i)
// ```

// So output becomes:

// ```
// 3
// 3
// 3
// ```

// ---

// # 5️⃣ Visual Timeline

// ```
// Loop execution (fast)
// ---------------------
// i = 0
// i = 1
// i = 2
// i = 3 (loop finished)

// After 100ms
// -----------
// print i
// print i
// print i
// ```

// So every callback reads:

// ```
// i = 3
// ```

// ---

// # 6️⃣ Second Example (`let`)

// ```javascript
// for (let i = 0; i < 3; i++) {
//    setTimeout(() => console.log(i), 100);
// }
// ```

// ### Output

// ```
// 0
// 1
// 2
// ```

// Now let’s see why.

// ---

// # 7️⃣ `let` Creates a New Variable Each Iteration

// `let` is **block scoped**.

// Inside the loop, JavaScript creates **a new `i` for each iteration**.

// So instead of one variable, we get **three different variables**.

// ### Iteration 1

// ```
// i = 0
// ```

// Callback remembers:

// ```
// i = 0
// ```

// ---

// ### Iteration 2

// ```
// i = 1
// ```

// Callback remembers:

// ```
// i = 1
// ```

// ---

// ### Iteration 3

// ```
// i = 2
// ```

// Callback remembers:

// ```
// i = 2
// ```

// ---

// # 8️⃣ After 100ms

// Now each callback prints **its own saved value**.

// ```
// 0
// 1
// 2
// ```

// ---

// # 9️⃣ Memory Visualization

// ### With `var`

// ```
// i → 3
// callback → console.log(i)
// callback → console.log(i)
// callback → console.log(i)
// ```

// All share **same variable**.

// ---

// ### With `let`

// ```
// callback1 → i = 0
// callback2 → i = 1
// callback3 → i = 2
// ```

// Each iteration has **separate scope**.

// ---

// # 🔟 Why This Happens (Closures)

// The arrow function:

// ```javascript
// () => console.log(i)
// ```

// creates a **closure**.

// A closure remembers **the variable environment where it was created**.

// With `var` → same environment
// With `let` → new environment per iteration

// ---

// # 1️⃣1️⃣ How Developers Fixed This Before `let`

// Before ES6, developers used **IIFE (Immediately Invoked Function Expression)**.

// ```javascript
// for (var i = 0; i < 3; i++) {
//   (function(i){
//      setTimeout(() => console.log(i),100);
//   })(i);
// }
// ```

// Output:

// ```
// 0
// 1
// 2
// ```

// The function **captures the value**.

// ---

// # 🧠 Golden Rule

// When using loops with async code:

// ```
// Use let
// Not var
// ```

// ---

// # 🔥 Mini Challenge (important)

// Predict the output **without running code**:

// ```javascript
// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i * 2), 100);
// }
// ```

// What will print?

// ```
// ?
// ?
// ?
// ```

// ---

// If you want, I can also explain **something even more powerful** that most JS learners never understand properly:

// ### ⚡ The JavaScript Event Loop

// It will make this `setTimeout` behavior **100× clearer**.

// Just say **“Explain event loop”** and I’ll show you with simple visuals.
