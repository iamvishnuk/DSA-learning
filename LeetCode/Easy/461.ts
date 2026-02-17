// 461. Hamming Distance

function hammingDistance(x: number, y: number): number {
  let distanceNum = x ^ y;
  let count: number = 0;

  while (distanceNum !== 0) {
    distanceNum = distanceNum & (distanceNum - 1)
    count++
  }

  return count
};
