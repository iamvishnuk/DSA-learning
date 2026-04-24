// 2121. Intervals Between Identical Elements
/*
 * Array
 * Hash Table
 * Prefix Sum
 */

function getDistances(arr: number[]): number[] {
  const n: number = arr.length;
  const map = new Map<number, number[]>();
  const res: number[] = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], []);
    }
    map.get(arr[i])!.push(i);
  }

  for (const indices of map.values()) {
    const m = indices.length;

    const prefix = new Array(m).fill(0);
    prefix[0] = indices[0];

    for (let i = 1; i < m; i++) {
      prefix[i] = prefix[i - 1] + indices[i];
    }

    for (let i = 0; i < m; i++) {
      const index = indices[i];

      // Left Side
      const leftCount = i;
      const leftSum = i > 0 ? prefix[i - 1] : 0;

      // Right Side
      const rightCount = m - 1 - i;
      const rightSum = prefix[m - 1] - prefix[i];

      const leftTotal = index * leftCount - leftSum;
      const rightTotal = rightSum - index * rightCount;

      res[index] = leftTotal + rightTotal;
    }
  }

  return res;
}
