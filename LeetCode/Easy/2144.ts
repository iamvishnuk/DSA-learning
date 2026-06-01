// 2144. Minimum Cost of Buying Candies With Discount
/*
 * Array
 * Greedy
 * Sorting
 */

function minimumCost(cost: number[]): number {
  cost.sort((a, b) => b - a);
  let minCost: number = 0;

  for (let i = 0; i < cost.length; i++) {
    if (i % 3 !== 2) {
      minCost += cost[i];
    }
  }

  return minCost;
}

console.log(minimumCost([1, 2, 3]));
