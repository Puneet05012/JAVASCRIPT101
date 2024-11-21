// **************************** Async/Await *******************************


function callbackExample(callback) {
  setTimeout(() => {
    console.log("Data fetched using callback.");
    callback("Callback Result");
  }, 1000);
}


function promiseExample() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data fetched using promise.");
      resolve("Promise Result");
    }, 1000);
  });
}


async function asyncAwaitExample() {
  console.log("Fetching data using async/await...");
  let result = await promiseExample();  
  console.log("Data fetched using async/await: " + result);
}


function explainAsyncAwait() {
  console.log("\n### Callback Example ###");
  callbackExample((message) => {
    console.log("Callback received: " + message);
  });

  console.log("\n### Promise Example ###");
  promiseExample().then((result) => {
    console.log("Promise received: " + result);
  });

  console.log("\n### Async/Await Example ###");
  asyncAwaitExample();
}

function asyncComparison() {
  console.log("\n### Comparison between Callbacks, Promises, and Async/Await ###");

  // Callbacks:
  console.log("Callbacks require nesting functions, leading to callback hell.");
  
  // Promises:
  console.log("Promises allow chaining with `.then()`, but can still be difficult to read.");
  
  // Async/Await:
  console.log("Async/Await makes asynchronous code look and behave like synchronous code.");
  console.log("It simplifies handling asynchronous code by removing chaining and reducing callback hell.");
}


explainAsyncAwait();
asyncComparison();


async function fetchDataUsingAsyncAwait() {
  console.log("\nFetching user data...");

  let userData = await new Promise((resolve) => {
    setTimeout(() => resolve({ name: "John", age: 30 }), 1000);
  });

  console.log(`User Data: Name - ${userData.name}, Age - ${userData.age}`);
}

fetchDataUsingAsyncAwait();