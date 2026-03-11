// 1009. Complement of Base 10 Integer
/*
 * Bit Manipulation
 */

function bitwiseComplement(n: number): number {
  const bitLength = n.toString(2).length;

  const mask = (1 << bitLength) - 1;

  return n ^ mask;
}
