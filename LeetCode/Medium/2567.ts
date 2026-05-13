// 2567. Minimum Score by Changing Two Elements
/*
 * Array
 * Greedy
 * Sorting
 * */

function minimizeSum(nums: number[]): number {
  const n = nums.length;

  nums.sort((a, b) => a - b);

  const first = nums[n - 1] - nums[2];
  const second = nums[n - 3] - nums[0];
  const third = nums[n - 2] - nums[1];

  return Math.min(first, second, third);
}
