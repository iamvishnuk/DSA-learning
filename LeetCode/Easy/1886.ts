// 1886. Determine Whether Matrix Can Be Obtained By Rotation
/*
 * Array
 * Matrix
 */

function findRotation(mat: number[][], target: number[][]): boolean {
  const n = mat.length;
  const isEqual = (matrix: number[][], target: number[][]) =>
    matrix.every((row, i) => row.every((val, j) => val === target[i][j]));

  for (let i = 0; i < 4; i++) {
    if (isEqual(mat, target)) return true;

    // Rotate Matrix

    for (let row = 0; row < n; row++) {
      for (let col = row + 1; col < n; col++) {
        [mat[row][col], mat[col][row]] = [mat[col][row], mat[row][col]];
      }
    }

    for (let j = 0; j < n; j++) {
      mat[j].reverse();
    }
  }

  return false;
}
