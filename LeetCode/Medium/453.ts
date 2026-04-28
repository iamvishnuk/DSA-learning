// 453. Minimum Moves to Equal Array Elements
/*
 * Array
 * Math
 */

function minMoves(nums: number[]): number {
  const temp: number = Math.min(...nums);
  return nums.reduce((acc, curr) => acc + Math.abs(temp - curr), 0);
}
