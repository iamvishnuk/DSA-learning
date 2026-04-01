// 121. Best Time to Buy and Sell Stock
/*
 * Array
 * Dynamic Programming
 */

function maxProfit(prices: number[]): number {
  let minProfit = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minProfit) {
      minProfit = prices[i];
    } else if (prices[i] - minProfit > maxProfit) {
      maxProfit = prices[i] - minProfit;
    }
  }

  return maxProfit;
}
