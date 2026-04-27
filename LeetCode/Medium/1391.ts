// 1391. Check if There is a Valid Path in a Grid
/*
 * Array
 * Depth-First Search
 * Breadth-First Search
 * Union-Find
 * Matrix
 */

function hasValidPath(grid: number[][]): boolean {
  const rows = grid.length;
  const cols = grid[0].length;

  const visited: boolean[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );

  const directions: Record<number, number[][]> = {
    1: [
      [0, -1],
      [0, 1]
    ],
    2: [
      [1, 0],
      [-1, 0]
    ],
    3: [
      [0, -1],
      [1, 0]
    ],
    4: [
      [0, 1],
      [1, 0]
    ],
    5: [
      [0, -1],
      [-1, 0]
    ],
    6: [
      [0, 1],
      [-1, 0]
    ]
  };

  function dfs(x: number, y: number): boolean {
    if (x === rows - 1 && y === cols - 1) return true;

    visited[x][y] = true;

    const type = grid[x][y];

    for (const [dx, dy] of directions[type]) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || ny < 0 || nx >= rows || ny >= cols || visited[nx][ny]) {
        continue;
      }

      const nextType = grid[nx][ny];

      for (const [ndx, ndy] of directions[nextType]) {
        if (nx + ndx == x && ny + ndy == y) {
          if (dfs(nx, ny)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  return dfs(0, 0);
}
