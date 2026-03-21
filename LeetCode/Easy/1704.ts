// 1704. Determine if String Halves Are Alike
/*
 * String
 * Counting
 */

function halvesAreAlike(s: string): boolean {
  const mid = Math.floor(s.length / 2);
  const left = s.slice(0, mid);
  const right = s.slice(mid);
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  let leftCount = 0;
  let rightCount = 0;

  for (const ch of left) {
    if (vowels.has(ch)) leftCount++;
  }

  for (const ch of right) {
    if (vowels.has(ch)) rightCount++;
  }

  return leftCount === rightCount;
}
