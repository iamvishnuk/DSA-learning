// 788. Rotated Digits
/*
 * Math
 * Dynamic Programming
 */

function rotatedDigits(n: number): number {
  let count: number = 0;
  for (let i = 1; i <= n; i++) {
    let num = String(i);
    if (num.includes('3') || num.includes('4') || num.includes('7')) {
      continue;
    } else if (
      num.includes('2') ||
      num.includes('5') ||
      num.includes('6') ||
      num.includes('9')
    ) {
      count++;
    }
  }

  return count;
}

console.log(rotatedDigits(10));
console.log(rotatedDigits(1));
console.log(rotatedDigits(2));
