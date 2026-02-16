// 191. Number of 1 Bits

function hammingWeight(n: number): number {
  let count: number = 0;

  while (n !== 0) {
    n = n & (n - 1)
    count++
  }

  return count
};
