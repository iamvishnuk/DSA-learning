// 2540. Find Common Value
/*
 * Array
 * Hash Table
 * Two Pointer
 * Binary Search
 */

function getCommon(nums1: number[], nums2: number[]): number {
  for (const num of nums1) {
    let res = binarySearch(nums2, num);
    if (res !== -1) {
      return res;
    }
  }

  return -1;
}

function binarySearch(arr: number[], target: number): number {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return target;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}
