// 189. Rotate Array
/*
 * Array
 * Math
 * Two Pointer
 */

function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n;

  function reverse(start: number, end: number) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);
}
