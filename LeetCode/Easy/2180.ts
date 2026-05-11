// 2180. Count Integers With Even Digit Sum
/*
 * Math
 * Simulation
 */

function countEven(num: number): number {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    let sum: number = 0;

    for (const digit of i.toString()) {
      sum += Number(digit);
    }

    if (sum % 2 === 0) {
      count++;
    }
  }

  return count;
}

console.log(countEven(4));
console.log(countEven(30));
