// when we should sell stocks

// 1
const prices1 = [2, 5, 8, 2, 3, 1, 7];
const prices2 = [8, 7, 5, 4, 2, 1];

let profit = prices => {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i-1]) { 
      maxProfit += prices[i] - prices[i-1];
    }
  }
  return maxProfit;
}

console.log(profit(prices1));
console.log(profit(prices2));

// 2
const maxProfit = prices => prices.reduce((acc, curr, index, arr) => {
  const profit = curr - arr[index - 1];
  return acc + (profit > 0 ? profit : 0);
}, 0);

console.log(maxProfit(prices1));