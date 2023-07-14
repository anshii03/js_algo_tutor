// JS is synchronous single threaded language

//synchronous
//asynchronous ------ promises , async/await, callbacks

console.log("learning javascript");

console.log("js is synchronous language");

console.log(" js is awesome");

setTimeout(() => {
  console.log("set timeout in javascript");
}, 0);

console.log("learning asynchronous javascript");

// promise

const result = fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((json) => console.log(json));

fetchData();

//async/await

async function fetchData() {
  const response = await fetch("https://dummyjson.com/products/1");
  const result = await response.json();
  console.log("result", result);
}

console.log("promises");

// microtaskqueue >> macrotaskqueue

//api??

// promise

//Three states

// pending
// Fulfilled
// Rejected

// async
