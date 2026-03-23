// 64. Minimum Path Sum
/*
 * Array
 * Dynamic Programming
 * Matrix
 */

function minPathSum(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  dp[0][0] = grid[0][0];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row === 0 && col === 0) continue;

      if (row === 0) {
        dp[row][col] = grid[row][col] + dp[row][col - 1];
      } else if (col === 0) {
        dp[row][col] = grid[row][col] + dp[row - 1][col];
      } else {
        dp[row][col] =
          grid[row][col] + Math.min(dp[row - 1][col], dp[row][col - 1]);
      }
    }
  }

  return dp[rows - 1][cols - 1];
}
