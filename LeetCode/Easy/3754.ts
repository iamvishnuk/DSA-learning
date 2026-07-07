// 3754. Concatenate Non-Zero Digits and Multiply by Sum I
/*
 * Math
 */

function sumAndMultiply(n: number): number {
  let newNumber: number = 0;
  let sumOfDigit: number = 0;
  let multiplier: number = 1;

  while (n > 0) {
    let digit = n % 10;

    if (digit !== 0) {
      newNumber += digit * multiplier;
      sumOfDigit += digit;
      multiplier *= 10;
    }
    n = Math.floor(n / 10);
  }

  return newNumber * sumOfDigit;
}
