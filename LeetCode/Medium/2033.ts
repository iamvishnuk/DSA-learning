// 2033. Minimum Operations to Make a Uni-Value Grid
/*
 * Array
 * Math
 * Sorting
 * Matrix
 */

function minOperations(grid: number[][], x: number): number {
  const nums: number[] = [];
  let res = 0;

  for (const row of grid) {
    for (const value of row) {
      nums.push(value);
    }
  }

  // check feassibility
  const reminder = nums[0] % x;
  for (const num of nums) {
    if (num % x !== reminder) {
      return -1;
    }
  }

  // sort the array
  nums.sort((a, b) => a - b);

  // find the median
  const median = nums[Math.floor(nums.length / 2)];

  for (const num of nums) {
    res += Math.abs(median - num) / x;
  }

  return res;
}
