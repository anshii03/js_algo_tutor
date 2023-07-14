// reduce ---- iterate through contents of your array and return one single output

let a = [1, 2, 3, 4, 5];

// find sum of all the elements of array

// for (var i = 0; i < a.length; i++) {
//   sum = sum + a[i];
// }

// console.log(sum);

const result = a.reduce(function (sum, curr) {
  return sum + curr;
});

console.log("result", result);

// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

// push  ------ add element at end of array
// pop ------ removing element from end of array
// shift ------ removing element from front of array
// unshift ------ add element in beginning of array
