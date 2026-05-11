// 2544. Alternating Digit Sum
/*
 * Math
 */

function alternateDigitSum(n: number): number {
  let sum: number = 0;
  let sign: number = 1;

  for (const digit of n.toString()) {
    sum += Number(digit) * sign;
    sign = sign * -1;
  }

  return sum;
}

console.log(alternateDigitSum(521));
console.log(alternateDigitSum(111));
console.log(alternateDigitSum(886996));
