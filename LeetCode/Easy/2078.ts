// 2078. Two Futherest House With Different Colors
/*
 * Array
 * Greedy
 */

function maxDistance(colors: number[]): number {
  let maxDist: number = 0;

  for (let i = 0; i < colors.length; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      if (colors[i] !== colors[j]) {
        maxDist = Math.max(maxDist, j - i);
      }
    }
  }

  return maxDist;
}
