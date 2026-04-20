// 2016. Maximum Difference Between Increasing Elements
/*
 * Array
 */

function maximumDifference(nums: number[]): number {
  let maxDiff: number = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        maxDiff = Math.max(maxDiff, nums[j] - nums[i]);
      }
    }
  }

  return maxDiff === 0 ? -1 : maxDiff;
}
