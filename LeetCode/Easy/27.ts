// 27. Remove Element
/*
 * Array
 * Two Pointer
 */

function removeElement(nums: number[], val: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    if (nums[start] === val) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      end--;
    } else {
      start++;
    }
  }

  return end + 1;
}
