// 3546. Equal Sum Grid Partition I
/*
 * Array
 * Matrix
 * Enumeration
 * Prefix Sum
 */

function canPartitionGrid(grid: number[][]): boolean {
  const rows = grid.length;
  const cols = grid[0].length;
  const sum: number[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(0)
  );

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      sum[row][col] =
        grid[row][col] +
        (row > 0 ? sum[row - 1][col] : 0) +
        (col > 0 ? sum[row][col - 1] : 0) -
        (row > 0 && col > 0 ? sum[row - 1][col - 1] : 0);
    }
  }

  const total = sum[rows - 1][cols - 1];

  for (let row = 0; row < rows - 1; row++) {
    const temp = sum[row][cols - 1];
    if (total === temp * 2) {
      return true;
    }
  }

  for (let col = 0; col < cols - 1; col++) {
    const temp = sum[rows - 1][col];
    if (total === temp * 2) {
      return true;
    }
  }

  return false;
}
