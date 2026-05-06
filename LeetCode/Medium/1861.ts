// 1861. Rotating the Box
/*
 * Array
 * Two Pointer
 * Matrix
 */

export function rotateTheBox(boxGrid: string[][]): string[][] {
  const rows = boxGrid.length;
  const cols = boxGrid[0].length;

  for (let i = 0; i < rows; i++) {
    let writePointer = cols - 1;
    for (let j = cols - 1; j >= 0; j--) {
      if (boxGrid[i][j] === '*') {
        writePointer = j - 1;
      } else if (boxGrid[i][j] === '#') {
        [boxGrid[i][j], boxGrid[i][writePointer]] = [
          boxGrid[i][writePointer],
          boxGrid[i][j]
        ];
        writePointer--;
      }
    }
  }

  const res: string[][] = Array.from({ length: cols }, () =>
    Array(rows).fill('.')
  );

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      res[j][rows - 1 - i] = boxGrid[i][j];
    }
  }

  return res;
}

console.log(
  rotateTheBox([
    ['#', '.', '*', '.'],
    ['#', '#', '*', '.']
  ])
);
console.log(
  rotateTheBox([
    ['#', '#', '*', '.', '*', '.'],
    ['#', '#', '#', '*', '.', '.'],
    ['#', '#', '#', '.', '#', '.']
  ])
);
