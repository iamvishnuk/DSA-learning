// 598. Range Addition II
/*
 * Array
 * Math
 */

function maxCount(m: number, n: number, ops: number[][]): number {
  if (ops.length === 0) m * n;

  let minRow = m;
  let minCol = n;

  for (const [a, b] of ops) {
    minRow = Math.min(minRow, a);
    minCol = Math.min(minCol, b);
  }

  return minRow * minCol;
}
