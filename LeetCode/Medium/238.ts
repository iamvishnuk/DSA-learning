// 238. Product of Array Except Self
/*
 * Array
 * Prefix Sum
 */

function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const res = new Array(n).fill(1);

  let leftPrefix = 1;
  for (let i = 0; i < n; i++) {
    res[i] = leftPrefix;
    leftPrefix *= nums[i];
  }

  let rightPrefix = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= rightPrefix;
    rightPrefix *= nums[i];
  }

  return res;
}
