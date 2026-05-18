// 45. Jump Game II
/*
 * Array
 * Dynamic Proogramming
 * Greedy
 */

function jump(nums: number[]): number {
  const n: number = nums.length;

  const dp = new Array(n).fill(Infinity);

  dp[n - 1] = 0;

  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j <= i + nums[i] && j < n; j++) {
      dp[i] = Math.min(dp[i], 1 + dp[j]);
    }
  }

  return dp[0];
}
