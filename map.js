//map -----> transform the contents of the array
// always returns a new array

let a = [1, 2, 3, 4, 5];

// get another array which has square of each element of this array

let squaredArray = a.map(function (element) {
  return element * element;
});

console.log("squared array", squaredArray);
console.log("original array", a);
