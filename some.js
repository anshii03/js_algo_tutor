//  some ----> if one or more elements of array is satisfying condition , it returns true , else it returns false

const transactions = [1000, 2000, 7800, 400, 800];

// whether any transaction is negative or not

const result = transactions.some(function (amount) {
  return amount < 0;
});

console.log("result", result);
