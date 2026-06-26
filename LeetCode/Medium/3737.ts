// 3737. Count Subarrays With Majority Element I
/*
 * Array
 * Hash Table
 * Divide and Conquer
 * Segment Tree
 * Merge Sort
 * Counting
 * Prefix Sum
 */

function countMajoritySubarrays(nums: number[], target: number): number {
  let count: number = 0;

  const transformedArr = nums.map((value) => (value === target ? 1 : -1));

  for (let i = 0; i < transformedArr.length; i++) {
    let sum: number = 0;

    for (let j = i; j < transformedArr.length; j++) {
      sum += transformedArr[j];

      if (sum > 0) {
        count++;
      }
    }
  }

  return count;
}
