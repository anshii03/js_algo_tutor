// filter -----> takes out contents of array based on condition
// returns a new array

// print even numbers from array

let a = [1, 2, 3, 4, 5, -8, 9, -7, 10];

// const evenNumbers = a.filter(function (num) {
//   return num % 2 === 0;
// });

const evenNumbers = a.filter((num) => num % 2 === 0);

console.log("even numbers", evenNumbers);

// print negative numbers
const negativeNumbers = a.filter(function (num) {
  return num < 0;
});

console.log("negative numbers", negativeNumbers);
