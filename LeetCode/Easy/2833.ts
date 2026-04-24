// 2833. Furthest Point From Origin
/*
 * String
 * Counting
 */

function furthestDistanceFromOrigin(moves: string): number {
  let LCount = 0;
  let RCount = 0;
  let SCount = 0;

  for (const m of moves) {
    if (m === 'L') {
      LCount++;
    } else if (m === 'R') {
      RCount++;
    } else {
      SCount++;
    }
  }

  return Math.abs(LCount - RCount) + SCount;
}
