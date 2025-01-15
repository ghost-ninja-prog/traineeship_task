function calculateTotalAmount(purchases) {
  let sum = 0;
  purchases.forEach(item => {
    sum += item;
  });
  return sum;
}

let purchaseAmounts = [10000, 20000, 30000];
console.log(calculateTotalAmount(purchaseAmounts));