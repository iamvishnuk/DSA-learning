// 1914. Cyclically Rotating a Grid
/*
 * Array
 * Matrix
 * Simulation
 */

function rotateGrid(grid: number[][], k: number): number[][] {
  const m = grid.length;
  const n = grid[0].length;

  const layers = Math.min(n, m) / 2;

  for (let l = 0; l < layers; l++) {
    const elements: number[] = [];

    const rowStart = l;
    const colStart = l;
    const rowEnd = m - l - 1;
    const colEnd = n - l - 1;

    // Extract the layers - Top
    for (let col = colStart; col <= colEnd; col++) {
      elements.push(grid[rowStart][col]);
    }

    // Right
    for (let row = rowStart + 1; row <= rowEnd; row++) {
      elements.push(grid[row][colEnd]);
    }

    // Bottom
    for (let col = colEnd - 1; col >= colStart; col--) {
      elements.push(grid[rowEnd][col]);
    }

    // Left
    for (let row = rowEnd - 1; row > rowStart; row--) {
      elements.push(grid[row][colStart]);
    }

    const len = elements.length;
    const rotation = k % len;

    // Rotate the layer
    const rotatedArray = [
      ...elements.slice(rotation),
      ...elements.slice(0, rotation)
    ];

    let i = 0;

    // Put elements back - Top
    for (let col = colStart; col <= colEnd; col++) {
      grid[rowStart][col] = rotatedArray[i++];
    }

    // Right
    for (let row = rowStart + 1; row <= rowEnd; row++) {
      grid[row][colEnd] = rotatedArray[i++];
    }

    // Bottom
    for (let col = colEnd - 1; col >= colStart; col--) {
      grid[rowEnd][col] = rotatedArray[i++];
    }

    // Left
    for (let row = rowEnd - 1; row > rowStart; row--) {
      grid[row][colStart] = rotatedArray[i++];
    }
  }

  return grid;
}
