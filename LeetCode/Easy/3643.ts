// 3643. Flip Square Submatrix Vertically
/*
 * Array
 * Two Pointer
 * Matrix
 */

function reverseSubmatrix(
  grid: number[][],
  x: number,
  y: number,
  k: number
): number[][] {
  for (
    let rowStart = x, rowEnd = x + k - 1;
    rowStart < rowEnd;
    rowStart++, rowEnd--
  ) {
    for (let col = y; col < y + k; col++) {
      [grid[rowStart][col], grid[rowEnd][col]] = [
        grid[rowEnd][col],
        grid[rowStart][col]
      ];
    }
  }

  return grid;
}
