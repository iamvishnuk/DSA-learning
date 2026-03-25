// 2906. Construct Product Matrix
/*
 * Array
 * Matrix
 * Prefix Sum
 */

function constructProductMatrix(grid: number[][]): number[][] {
  const MOD: number = 12345;
  const rows = grid.length;
  const cols = grid[0].length;
  const productMatrix = Array.from({ length: rows }, () =>
    new Array(cols).fill(0)
  );

  let suffix: number = 1;
  for (let row = rows - 1; row >= 0; row--) {
    for (let col = cols - 1; col >= 0; col--) {
      productMatrix[row][col] = suffix;
      suffix = (suffix * grid[row][col]) % MOD;
    }
  }

  let prefix: number = 1;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      productMatrix[row][col] = (productMatrix[row][col] * prefix) % MOD;
      prefix = (prefix * grid[row][col]) % MOD;
    }
  }

  return productMatrix;
}
