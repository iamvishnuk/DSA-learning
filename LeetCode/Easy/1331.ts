// 1331. Rank Transform of an Array
/*
 * Array
 * Hash Table
 * Sorting
 */

function arrayRankTransform(arr: number[]): number[] {
  const numToRank = new Map<number, number>();
  const sortedArray: number[] = [...arr].sort((a, b) => a - b);

  let rank: number = 1;

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && sortedArray[i] > sortedArray[i - 1]) {
      rank++;
    }
    numToRank.set(sortedArray[i], rank);
  }

  return arr.map((num) => numToRank.get(num)!);
}
