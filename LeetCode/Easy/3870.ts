// 3870. Count Commas in Range
/*
 * Math
 */

function countCommas(n: number): number {
  return n < 999 ? 0 : n - 999;
}
