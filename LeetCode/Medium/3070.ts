// 3070. Count Submatrix with Top-Left Elements and Sum Less Than K
/*
 * Array
 * Matrix
 * Prefix Sum
 */

function countSubmatrices(grid: number[][], k: number): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const dp: number[] = new Array(cols).fill(0);
  let res: number = 0;

  for (let r = 0; r < rows; r++) {
    let sum: number = 0;
    for (let c = 0; c < cols; c++) {
      dp[c] += grid[r][c];
      sum += dp[c];

      if (sum <= k) res++;
    }
  }

  return res;
}
