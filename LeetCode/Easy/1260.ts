// 1260. Shift 2D Grid
/*
 * Array
 * Matrix
 * Simulation
 */

function shiftGrid(grid: number[][], k: number): number[][] {
  const rows: number = grid.length;
  const cols: number = grid[0].length;
  const total: number = rows * cols;

  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const oldIndex = r * cols + c;
      const newIndex = (oldIndex + k) % total;

      const newRow = Math.floor(newIndex / cols);
      const newCol = newIndex % cols;

      result[newRow][newCol] = grid[r][c];
    }
  }

  return result;
}
