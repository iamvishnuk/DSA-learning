// 1351. Count Negative Numbers in a Sorted Matrix
/*
 * Array
 * Binary Search
 * Matrix
 */

function countNegatives(grid: number[][]): number {
  let count: number = 0;
  let n = grid.length;
  let m = grid[0].length;

  for (let row = 0; row < n; row++) {
    for (let col = m - 1; col >= 0; col--) {
      if (grid[row][col] < 0) count++;
    }
  }

  return count;
}
