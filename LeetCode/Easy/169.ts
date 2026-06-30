// 169. Majority Element
/*
 * Array
 * Hash Table
 * Divide and Conquer
 * Sorting
 * Couting
 */

function majorityElement(nums: number[]): number {
  const n = nums.length;
  let freq = new Map<number, number>();

  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  for (const [key, value] of freq) {
    if (value > Math.floor(n / 2)) return key;
  }

  return 0;
}
