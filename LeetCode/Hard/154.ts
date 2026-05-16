// 154. Find Minimum in Rotated Sorted Array II
/*
 * Array
 * Binary Search
 */

function findMin(nums: number[]): number {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else if (nums[mid] < nums[end]) {
      end = mid;
    } else {
      end--;
    }
  }

  return nums[end];
}
