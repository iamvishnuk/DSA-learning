// 1461. Check If a String Contains All Binary Codes of Size K
/*
 * Hash Table
 * String
 * Bit Manipulation
 * Rolling Hash
 * Hash Function
*/

function hasAllCodes(s: string, k: number): boolean {
  const set = new Set<string>()

  for (let i = 0; i <= s.length - k; i++) {
    set.add(s.substring(i, i + k))
  }

  return set.size === 1 << k
};
