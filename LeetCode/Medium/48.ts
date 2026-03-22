// 48. Rotate Image
/*
 * Array
 * Math
 * Matrix
 */

function rotate(matrix: number[][]): void {
  let n = matrix.length;

  for (let row = 0; row < n; row++) {
    for (let col = row + 1; col < n; col++) {
      [matrix[row][col], matrix[col][row]] = [
        matrix[col][row],
        matrix[row][col]
      ];
    }
  }

  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}
