// 575. Distribute Candies
/*
 * Array
 * Hash Table
 */

function distributeCandies(candyType: number[]): number {
  const n: number = candyType.length;
  const consumedCandy: number = n / 2;
  const uniqueCandy = new Set(candyType);

  return Math.min(consumedCandy, uniqueCandy.size);
}
