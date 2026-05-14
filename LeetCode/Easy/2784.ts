// 2784. Check if Array is Good
/*
 * Array
 * Hash Table
 * Sorting
 */

function isGood(nums: number[]): boolean {
  const n: number = nums.length;
  const count = new Array(n).fill(0);

  for (const num of nums) {
    if (num >= n) {
      return false;
    }

    if (num < n - 1 && count[num] > 0) {
      return false;
    }

    if (num === n - 1 && count[num] > 1) {
      return false;
    }

    count[num]++;
  }

  return true;
}
