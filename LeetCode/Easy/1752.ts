// 1752. Check if Array Is Sorted and Rotated
/*
 * Array
 */

function check(nums: number[]): boolean {
  const n: number = nums.length;

  if (n <= 1) return true;

  let inversitions: number = 0;

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      inversitions++;
      if (inversitions > 1) {
        return false;
      }
    }
  }

  if (nums[0] < nums[n - 1]) {
    inversitions++;
  }

  return inversitions <= 1;
}
