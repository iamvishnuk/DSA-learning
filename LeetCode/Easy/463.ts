// 463. Island Perimeter
/*
 * Array
 * Depth-First Search
 * Breadth-First Search
 * Matrix
 */

function islandPerimeter(grid: number[][]): number {
  let perimeter: number = 0;
  const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        perimeter += 4;
        for (let [dr, dc] of direction) {
          const r = row + dr;
          const c = col + dc;

          if (
            r >= 0 &&
            c >= 0 &&
            r < grid.length &&
            c < grid[0].length &&
            grid[r][c] === 1
          ) {
            perimeter -= 1;
          }
        }
      }
    }
  }

  return perimeter;
}
