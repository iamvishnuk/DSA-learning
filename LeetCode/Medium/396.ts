// 396. Rotate Function
/*
 * Array
 * Math
 * Dynamic Programming
 */

function maxRotateFunction(nums: number[]): number {
  const n: number = nums.length;
  let sum: number = nums.reduce((a, c) => a + c, 0);
  let max: number = 0;
  let curr: number = 0;

  for (let i = 0; i < n; i++) {
    max = curr += i * nums[i];
  }

  for (let i = 1; i < n; i++) {
    curr += sum - n * nums[n - i];
    max = Math.max(max, curr);
  }

  return max;
}

console.log(maxRotateFunction([4, 3, 2, 6]));
console.log(maxRotateFunction([100]));
