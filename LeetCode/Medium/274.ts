// 274. H-Index
/*
 * Array
 * Sorting
 * Counting Sort
 */

function hIndex(citations: number[]): number {
  const n = citations.length;
  const papperCount = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    papperCount[Math.min(n, citations[i])] += 1;
  }

  let h = n;
  let papper = papperCount[n];

  while (papper < h) {
    h -= 1;
    papper += papperCount[h];
  }

  return h;
}
