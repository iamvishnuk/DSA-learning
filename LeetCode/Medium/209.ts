// 209. Minimum Size Subarray Sum
/*
 * Array
 * Binary Search
 * Sliding Window
 * Prefix Sum
 */

function minSubArrayLen(target: number, nums: number[]): number {
  let left: number = 0;
  let sum: number = 0;
  let minLength: number = Infinity;
  let n: number = nums.length;

  for (let right = 0; right < n; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}
