// 283. Move Zeroes
/*
 * Array
 * Two Pointer
 */

function moveZeroes(nums: number[]): void {
  let length = nums.length - 1;

  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      for (let j = i; j < length; j++) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
      length--;
      i--;
    }
  }
}
