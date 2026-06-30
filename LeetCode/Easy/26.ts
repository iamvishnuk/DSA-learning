// 26. Remove Duplicates from Sorted Array
/*
 * Array
 * Two Pointer
 */

function removeDuplicates(nums: number[]): number {
  let uniqueCount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueCount] = nums[i];
      uniqueCount++;
    }
  }

  return uniqueCount;
}
