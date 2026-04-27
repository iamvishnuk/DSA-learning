// 1559. Detect Cycles in 2D Grid
/*
 * Array
 * Depth-First Search
 * Breadth-First Search
 * Union-Find
 * Matrix
 */

function containsCycle(grid: string[][]): boolean {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited: boolean[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!visited[i][j]) {
        if (dfs(grid, i, j, -1, -1, visited)) {
          return true;
        }
      }
    }
  }

  return false;
}

function dfs(
  grid: string[][],
  x: number,
  y: number,
  px: number,
  py: number,
  visited: boolean[][]
): boolean {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions: [number, number][] = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ];

  visited[x][y] = true;

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (
      nx < 0 ||
      ny < 0 ||
      nx >= rows ||
      ny >= cols ||
      grid[nx][ny] !== grid[x][y]
    ) {
      continue;
    }

    if (!visited[nx][ny]) {
      if (dfs(grid, nx, ny, x, y, visited)) {
        return true;
      }
    } else if (nx !== px || ny !== py) {
      return true;
    }
  }

  return false;
}
