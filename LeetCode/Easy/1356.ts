// 1356. Sort Integers by The Number of 1 Bits
/*
 * Array
 * Bit Manipulation
 * Sorting
 * Counting
*/

function countBits(num: number): number {
  let count = 0;

  while (num > 0) {
    num &= (num - 1)
    count++
  }

  return count
}

function sortByBits(arr: number[]): number[] {

  return arr.sort((a, b) => {
    const bitA = countBits(a)
    const bitB = countBits(b)

    if (bitA === bitB) return a - b;
    return bitA - bitB
  })

};
