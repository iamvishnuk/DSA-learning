// 3120. Count the Number of Special Characters I
/*
 * Hash Table
 * String
 */

function numberOfSpecialChars(word: string): number {
  let set = new Set(word);
  let count: number = 0;

  for (let i = 0; i < 26; i++) {
    const up = String.fromCharCode(65 + i);
    const lo = String.fromCharCode(97 + i);

    if (set.has(up) && set.has(lo)) {
      count++;
    }
  }

  return count;
}
