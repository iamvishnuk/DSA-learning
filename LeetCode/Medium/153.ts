// 153. Find the Minimum in Rotated Sorted Array
/*
 * Array
 * Binary Search
 */

function findMin(nums: number[]): number {
  if (nums[0] <= nums[nums.length - 1]) {
    return nums[0];
  }

  const pivot = findPivot(nums);

  return nums[pivot + 1];
}

function findPivot(nums: number[]): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid < end && nums[mid] > nums[mid + 1]) {
      return mid;
    }

    if (mid > start && nums[mid] < nums[mid - 1]) {
      return mid - 1;
    }

    if (nums[mid] <= nums[start]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}
