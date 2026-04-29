// 2448. Minimum Cost to Make Array Equal
/*
 * Array
 * Binary Search
 * Greedy
 * Sorting
 * Prefix Sum
 */

function minCost(nums: number[], cost: number[]): number {
  const pairs: [number, number][] = [];

  for (let i = 0; i < nums.length; i++) {
    pairs.push([nums[i], cost[i]]);
  }

  pairs.sort((a, b) => a[0] - b[0]);

  // Find Weighted Median
  let totalWeight: number = 0;
  for (const c of cost) {
    totalWeight += c;
  }

  let prefix: number = 0;
  let median: number = 0;

  for (const [num, c] of pairs) {
    prefix += c;
    if (prefix >= totalWeight / 2) {
      median = num;
      break;
    }
  }

  // Calculate the minimum cost
  let result: number = 0;
  for (let i = 0; i < nums.length; i++) {
    result += Math.abs(nums[i] - median) * cost[i];
  }

  return result;
}
