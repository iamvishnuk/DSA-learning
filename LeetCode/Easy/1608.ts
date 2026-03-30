// 1608. Special Array With X Elements Greather Than or Equal X
/*
 * Array
 * Binary Search
 * Sorting
 */

function search(nums: number[], value: number): number {
  let start = 0;
  let end = nums.length - 1;
  let index = nums.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] >= value) {
      index = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return index;
}

function specialArray(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;

  for (let i = 1; i <= n; i++) {
    let index = search(nums, i);

    if (n - index === i) {
      return i;
    }
  }

  return -1;
}
