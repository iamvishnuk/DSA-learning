// 3212. Count Submatrices With Equal Frequencey of X and Y
/*
 * Array
 * Matrix
 * Prefix Sum
 */

function numberOfSubmatrices(grid: string[][]): number {
  const row = grid.length;
  const col = grid[0].length;

  const sum: number[][] = Array.from({ length: row }, () => Array(col).fill(0));
  const countX: number[][] = Array.from({ length: row }, () =>
    Array(col).fill(0)
  );

  const value = (ch: string) => {
    if (ch === 'X') return 1;
    if (ch === 'Y') return -1;
    return 0;
  };

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      const current = value(grid[r][c]);
      const isX = grid[r][c] === 'X' ? 1 : 0;

      sum[r][c] =
        current +
        (r > 0 ? sum[r - 1][c] : 0) +
        (c > 0 ? sum[r][c - 1] : 0) -
        (r > 0 && c > 0 ? sum[r - 1][c - 1] : 0);

      countX[r][c] =
        isX +
        (r > 0 ? countX[r - 1][c] : 0) +
        (c > 0 ? countX[r][c - 1] : 0) -
        (r > 0 && c > 0 ? countX[r - 1][c - 1] : 0);
    }
  }

  let result = 0;

  for (let row = 0; row < sum.length; row++) {
    for (let col = 0; col < sum[row].length; col++) {
      if (sum[row][col] === 0 && countX[row][col] > 0) {
        result++;
      }
    }
  }

  return result;
}
