// 1337. The K Weakest Row in a Matrix
/*
 * Array
 * Binary Search
 * Sorting
 * Heap(Priority Queue)
 * Matrix
 */

function kWeakestRows(mat: number[][], k: number): number[] {
  const map: Record<number, number> = {};
  const res: number[] = [];

  for (let row = 0; row < mat.length; row++) {
    let count = 0;
    for (let col = 0; col < mat[row].length; col++) {
      if (mat[row][col] === 1) {
        count++;
      }
    }
    map[row] = count;
    res.push(row);
  }

  res.sort((a, b) => {
    if (map[a] === map[b]) {
      return a - b;
    }

    return map[a] - map[b];
  });

  return res.slice(0, k);
}
