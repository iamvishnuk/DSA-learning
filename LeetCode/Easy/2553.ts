// 2553. Separate the Digits in an Array
/*
 * Array
 * Simulation
 */

function separateDigits(nums: number[]): number[] {
  const res: number[] = [];

  for (const num of nums) {
    for (const digit of num.toString()) {
      res.push(Number(digit));
    }
  }

  return res;
}

console.log(separateDigits([13, 25, 83, 77]));
