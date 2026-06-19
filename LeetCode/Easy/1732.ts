// 1732. Find the Highest Altitude
/*
 * Array
 * Prefix Sum
 */

function largestAltitude(gain: number[]): number {
  let highest: number = 0;
  let start: number = 0;

  for (const alt of gain) {
    start = start + alt;
    highest = Math.max(highest, start);
  }

  return highest;
}
