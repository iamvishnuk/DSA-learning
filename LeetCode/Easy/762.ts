// 762. Prime Number of Set Bits in Binary Representation
/*
 * Math
 * Bit Manipulation
 */

function isPrime(num: number): boolean {
  if (num <= 1) return false

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }

  return true
}

function countPrimeSetBits(left: number, right: number): number {
  const primeSet = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
  let count = 0;

  while (left <= right) {
    let num = left
    let temp = 0;

    while (num !== 0) {
      num = num & (num - 1)
      temp++
    }

    // if (isPrime(temp)) {
    //   count++
    // }
    if (primeSet.has(temp)) count++

    left++

  }

  return count;
};
