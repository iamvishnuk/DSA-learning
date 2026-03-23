// 152. Maximum Product Subarray
/*
 * Array
 * Dynamic Programming
 */

function maxProduct(nums: number[]): number {
  let maxProduct = nums[0];
  let minProduct = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let temp = maxProduct;
    maxProduct = Math.max(nums[i], nums[i] * maxProduct, nums[i] * minProduct);
    minProduct = Math.min(nums[i], nums[i] * temp, nums[i] * minProduct);

    result = Math.max(result, maxProduct);
  }

  return result;
}
