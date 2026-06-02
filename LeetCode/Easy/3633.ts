// 3633. Earliest Finish Time for Land and Water Rides I
/*
 * Array
 * Two Pointer
 * Binary Search
 * Greedy
 * Sorting
 */

function earliestFinishTime(
  landStartTime: number[],
  landDuration: number[],
  waterStartTime: number[],
  waterDuration: number[]
): number {
  const n: number = landStartTime.length;
  const m: number = waterStartTime.length;

  let res: number = Infinity;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const land = landStartTime[i] + landDuration[i];
      const landWater = Math.max(land, waterStartTime[j]) + waterDuration[j];

      const water = waterStartTime[j] + waterDuration[j];
      const waterLand = Math.max(water, landStartTime[i]) + landDuration[i];

      res = Math.min(res, landWater, waterLand);
    }
  }

  return res;
}
