// 1582. Special Position in a Binary Matrix
/*
 * Array
 * Matrix
 */

function numSpecial(mat: number[][]): number {
  let count: number = 0;
  let m = mat.length;
  let n = mat[0].length;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (mat[row][col] === 0) continue;

      let flag: boolean = true;

      for (let r = 0; r < m; r++) {
        if (r !== row && mat[r][col] === 1) {
          flag = false;
          break;
        }
      }

      for (let c = 0; c < n; c++) {
        if (c !== col && mat[row][c] === 1) {
          flag = false;
          break;
        }
      }

      if (flag) count++;
    }
  }

  return count;
}
