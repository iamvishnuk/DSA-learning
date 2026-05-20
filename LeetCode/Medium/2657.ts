// 2657. Find the Prefix Common Array of Two Arrays
/*
 * Array
 * Hash Table
 * Bit Manipulation
 */

function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  let n: number = A.length;
  let res: number[] = [];

  const setA = new Set<number>();
  const setB = new Set<number>();

  for (let i = 0; i < n; i++) {
    setA.add(A[i]);
    setB.add(B[i]);

    let commonCount = 0;

    for (const value of setA) {
      if (setB.has(value)) {
        commonCount++;
      }
    }

    res.push(commonCount);
  }

  return res;
}
