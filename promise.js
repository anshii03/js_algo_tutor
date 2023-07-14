let success = true;

var promise = new Promise((resolve, reject) => {
  if (success) {
    resolve("Lets go to vacation");
  } else {
    reject("Tickets are cancelled");
  }
});

promise.then(() => console.log("yayyyyyy"));

promise.catch((err) => console.log("error", err));

console.log("promise", promise);
