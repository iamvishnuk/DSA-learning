// 1680. Concatenation of Consecutive Binary Numbers
/*
 * Math
 * Bit Manipulation
 */

function concatenatedBinary(n: number): number {
  const MOD = 1_000_000_007;
  let result = 0;

  for (let i = 1; i <= n; i++) {
    // find the length of the bits
    const len = Math.floor(Math.log2(i)) + 1;
    result = (result * (1 << len) + i) % MOD;
  }

  return result;
}
