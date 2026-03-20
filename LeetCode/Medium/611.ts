// 611. Valid Triangle Number
/*
 * Array
 * Two Pointer
 * Binary Search
 * Greedy
 * Sorting
 */

function binarySearch(
  nums: number[],
  left: number,
  right: number,
  target: number
): number {
  while (right >= left && right < nums.length) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function triangleNumber(nums: number[]): number {
  let count: number = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let k = i + 2;

    for (let j = i + 1; j < nums.length - 1 && nums[i] !== 0; j++) {
      k = binarySearch(nums, k, nums.length - 1, nums[i] + nums[j]);
      count += k - j - 1;
    }
  }

  return count;
}

console.log(triangleNumber([7, 0, 0, 0]));
