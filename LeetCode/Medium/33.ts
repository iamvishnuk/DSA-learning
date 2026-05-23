// 33. Search in Rotated Sorted Array
/*
 * Array
 * Binary Search
 */

function search(nums: number[], target: number): number {
  const pivot = findPivot(nums);

  if (pivot === -1) {
    return binarySearch(nums, 0, nums.length - 1, target);
  }

  if (nums[pivot] === target) {
    return pivot;
  }

  const firstHalf = binarySearch(nums, 0, pivot, target);

  if (firstHalf !== -1) {
    return firstHalf;
  } else {
    return binarySearch(nums, pivot + 1, nums.length - 1, target);
  }
}

function findPivot(nums: number[]): number {
  let start = 0;
  let end = nums.length - 1;

  // array not rotated
  if (nums[start] <= nums[end]) {
    return -1;
  }

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    // largest element found
    if (mid < end && nums[mid] > nums[mid + 1]) {
      return mid;
    }

    // smallest element found
    // so pivot is previous index
    if (mid > start && nums[mid] < nums[mid - 1]) {
      return mid - 1;
    }

    // left side sorted
    if (nums[start] <= nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

function binarySearch(
  nums: number[],
  start: number,
  end: number,
  target: number
): number {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}
