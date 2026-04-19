// 1855. Maximum Distance Between a Pair of Values
/*
 * Array
 * Two Pointer
 * Binary Search
 */

function maxDistance(nums1: number[], nums2: number[]): number {
  let maxDist: number = 0;

  for (let i = 0; i < nums1.length; i++) {
    let num1: number = nums1[i];

    let left: number = i;
    let right: number = nums2.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let midNum = nums2[mid];

      if (midNum >= num1) {
        maxDist = Math.max(maxDist, mid - i);
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return maxDist;
}
