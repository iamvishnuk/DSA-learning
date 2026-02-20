// 451. Sort Character by frequencey
/*
 * Hash Table
 * String
 * Sorting
 * Heap(Priority Queue)
 * Bucke Sort Counting
 */

function frequencySort(s: string): string {
  const freq = new Map<string, number>()
  let result = ''

  for (let i = 0; i < s.length; i++) {
    freq.set(s[i], (freq.get(s[i]) || 0) + 1)
  }

  const buckt: string[][] = Array(s.length + 1).fill(null).map(() => [])

  for (const [char, count] of freq.entries()) {
    buckt[count].push(char)
  }

  for (let i = buckt.length - 1; i >= 0; i--) {
    for (const char of buckt[i]) {
      result += char.repeat(i)
    }
  }

  return result
};

console.log(frequencySort("tree"))
