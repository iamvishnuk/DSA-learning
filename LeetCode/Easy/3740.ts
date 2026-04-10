// 3740. Minimum Distance Between Three Equal Elements I
/*
 * Array
 * Hash Table
 */

function minimumDistance(nums: number[]): number {
  const map = new Map<number, number[]>();
  let minDist = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], []);
    }
    map.get(nums[i])!.push(i);
  }

  for (const indices of map.values()) {
    if (indices.length < 3) continue;

    for (let i = 0; i <= indices.length - 3; i++) {
      const dist = 2 * (indices[i + 2] - indices[i]);
      minDist = Math.min(minDist, dist);
    }
  }

  return minDist === Infinity ? -1 : minDist;
}
