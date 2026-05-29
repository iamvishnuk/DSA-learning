// 3300. Minimum Element After Replacement With Digit Sum
/*
 * String
 * Math
 */

function minElement(nums: number[]): number {
  let min: number = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let sum: number = 0;

    while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    min = Math.min(min, sum);
  }

  return min;
}
