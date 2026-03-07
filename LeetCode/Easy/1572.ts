// 1572. Matrix Diagonal Sum
/*
 * Array
 * Matrix
 */

function diagonalSum(mat: number[][]): number {
  let sum: number = 0;

  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat.length; col++) {
      if (row === col || row + col == mat.length - 1) {
        sum += mat[row][col];
      }
    }
  }

  return sum;
}
