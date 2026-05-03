// 3011. Find if Array Can Be Sorted
/*
 * Array
 * Bit Manipulation
 * Sorting
 */

function canSortArray(nums: number[]): boolean {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] <= nums[j + 1]) {
        continue;
      } else if (countBits(nums[j]) === countBits(nums[j + 1])) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      } else {
        return false;
      }
    }
  }

  return true;
}

function countBits(num: number): number {
  let count = 0;

  while (num > 0) {
    num = num & (num - 1);
    count++;
  }

  return count;
}

console.log(canSortArray([8, 4, 2, 30, 15]));
console.log(canSortArray([1, 2, 3, 4, 5]));
console.log(canSortArray([3, 16, 8, 4, 2]));
