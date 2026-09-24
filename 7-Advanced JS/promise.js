// Promise completed in future.
// A JavaScript Promise is like a real-life promise: it is a placeholder for a value that you do not have right now, but expect to receive in the future. It helps you handle asynchronous tasks—like loading data from a server—without freezing your website while you wait.
// Promise is an Object

// fetch('https://example.com').then(if to show something or if any response comes).catch(if any error).finally(run hota hi hai);  these are not promises....first of all not consuminmg we have to understand what is the promise

// A 404 status code is a server-level client error meaning the server was reached, but the requested resource was not found. In programming with promises (like JavaScript fetch), a 404 is treated as a successful response, not a promise rejection/error. The promise resolves normally, and you must check response.ok or response.status manually.

// In JavaScript, fetch() uses microtasks, which have a higher priority than setTimeout and setInterval (macrotasks). Therefore, a resolved or rejected fetch promise settles before timer callbacks run, regardless of the delay set in the timers.

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async task completed.");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2 completed.");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved.");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Nimra", email: "example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
  console.log(user.username);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Amna", password: "123" });
    } else {
      reject("ERROR: Something went wrong.");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promsie is either resolved or rejected."));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // let error = true
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong.");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();
// async =await does not move until request is fulfilled.it waits for sometime to complete execution. iss me gracefully catch handle nhi hota.

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}

getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });



