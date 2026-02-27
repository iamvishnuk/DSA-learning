// 387. First Unique Character in a String
/*
 * Hash Table
 * String
 * Queue
 * Counting
 */

function firstUniqChar(s: string): number {
  const map = new Map<string, number>();
  let index: number = Infinity;

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const [key, value] of map) {
    if (value === 1) {
      index = Math.min(s.indexOf(key), index);
    }
  }

  return index === Infinity ? -1 : index;
}

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));
