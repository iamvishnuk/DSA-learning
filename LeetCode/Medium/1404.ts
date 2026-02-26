// 1404. Number of Steps to Reduce a Number in Binary Representation to One
/*
 * String
 * Bit Manipulation
*/

function numSteps(s: string): number {
  let step: number = 0;
  let carry: number = 0;

  for (let i = s.length - 1; i > 0; i--) {
    let bit = Number(s[i]) + carry;

    if (bit % 2 === 0) {
      step += 1;
    } else {
      step += 2;
      carry = 1;
    }
  }

  return step + carry
};
