// 1594. Maximum Non Negative Product in Matrix
/*
 * Array
 * Dynamic Programming
 * Matrix
 */

function maxProductPath(grid: number[][]): number {
  const MOD = 1000000007;
  const rows = grid.length;
  const cols = grid[0].length;

  const maxProduct: number[][] = new Array(rows)
    .fill(0)
    .map(() => new Array(cols).fill(0));

  const minProduct: number[][] = new Array(rows)
    .fill(0)
    .map(() => new Array(cols).fill(0));

  maxProduct[0][0] = minProduct[0][0] = grid[0][0];

  for (let col = 1; col < cols; col++) {
    maxProduct[0][col] = minProduct[0][col] =
      maxProduct[0][col - 1] * grid[0][col];
  }

  for (let row = 1; row < rows; row++) {
    maxProduct[row][0] = minProduct[row][0] =
      maxProduct[row - 1][0] * grid[row][0];
  }

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      const val = grid[row][col];

      const maxFromLeft = maxProduct[row][col - 1] * val;
      const maxFromTop = maxProduct[row - 1][col] * val;

      const minFromLeft = minProduct[row][col - 1] * val;
      const minFromTop = minProduct[row - 1][col] * val;

      maxProduct[row][col] = Math.max(
        maxFromLeft,
        maxFromTop,
        minFromLeft,
        minFromTop
      );
      minProduct[row][col] = Math.min(
        maxFromLeft,
        maxFromTop,
        minFromLeft,
        minFromTop
      );
    }
  }

  const result = maxProduct[rows - 1][cols - 1];

  return result < 0 ? -1 : result % MOD;
}
