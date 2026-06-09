// 3689. Maximum Total Subarray Value I
/*
 * Array
 * Greedy
 */

function maxTotalValue(nums: number[], k: number): number {
  let max = -Infinity;
  let min = Infinity;
  for (const num of nums) {
    max = Math.max(max, num);
    min = Math.min(min, num);
  }

  return (max - min) * k;
}
