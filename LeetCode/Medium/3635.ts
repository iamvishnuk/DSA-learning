// 3635. Earliest Finish Time for Land and Water Rides II
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
  const landWater = solve(
    landStartTime,
    landDuration,
    waterStartTime,
    waterDuration
  );

  const waterLand = solve(
    waterStartTime,
    waterDuration,
    landStartTime,
    landDuration
  );

  return Math.min(landWater, waterLand);
}

function solve(
  start1: number[],
  duration1: number[],
  start2: number[],
  duration2: number[]
): number {
  let finish1: number = Infinity;
  for (let i = 0; i < start1.length; i++) {
    finish1 = Math.min(finish1, start1[i] + duration1[i]);
  }

  let finish2: number = Infinity;
  for (let i = 0; i < start2.length; i++) {
    finish2 = Math.min(finish2, Math.max(start2[i], finish1) + duration2[i]);
  }

  return finish2;
}
