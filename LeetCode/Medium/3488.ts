// 3488. Closest Equal Element Queries
/*
 * Array
 * Hash Table
 * Binary Search
 */

function solveQueries(nums: number[], queries: number[]): number[] {
  const n = nums.length;
  const map = new Map<number, number[]>();
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], []);
    }
    map.get(nums[i])!.push(i);
  }

  function findPosition(indices: number[], target: number): number {
    let left = 0;
    let right = indices.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (indices[mid] === target) return mid;
      else if (indices[mid] < target) left = mid + 1;
      else right = mid - 1;
    }

    return -1;
  }

  for (const q of queries) {
    const indices = map.get(nums[q])!;

    if (indices.length === 1) {
      result.push(-1);
      continue;
    }

    const pos = findPosition(indices, q);

    const left = indices[(pos - 1 + indices.length) % indices.length];
    const right = indices[(pos + 1) % indices.length];

    const distLeft = Math.min(Math.abs(q - left), n - Math.abs(q - left));
    const distRight = Math.min(Math.abs(q - right), n - Math.abs(q - right));

    result.push(Math.min(distLeft, distRight));
  }

  return result;
}
