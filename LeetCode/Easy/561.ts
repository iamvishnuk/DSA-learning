// 561. Array Partition
/*
 * Array
 * Greedy
 * Sorting
 * Counting Sort
 */

function arrayPairSum(nums: number[]): number {
  let sum: number = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
}
