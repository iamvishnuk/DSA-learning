// 462. Minimum Moves to Equal Array Elements II
/*
 * Array
 * Math
 * Sorting
 */

function minMoves2(nums: number[]): number {
  nums.sort((a, b) => a - b);

  const median = nums[Math.floor(nums.length / 2)];

  return nums.reduce((acc, curr) => acc + Math.abs(median - curr), 0);
}
