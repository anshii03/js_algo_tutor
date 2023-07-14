// every --- all elements should satisfy the condition , it returns  true , else returns false
const transactions = [1000, 2000, 7800, 400, 800];

// whether any transaction is negative or not

const result = transactions.every(function (amount) {
  return amount > 0;
});

console.log("result", result);
