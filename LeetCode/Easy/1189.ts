// 1189. Maximum Number of Balloons
/*
 * Hash Table
 * String
 * Counting
 */

function maxNumberOfBalloons(text: string): number {
  const freq = new Map<string, number>();

  for (const char of text) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  const b = freq.get('b') || 0;
  const a = freq.get('a') || 0;
  const l = Math.floor((freq.get('l') || 0) / 2);
  const o = Math.floor((freq.get('o') || 0) / 2);
  const n = freq.get('n') || 0;

  return Math.min(b, a, l, o, n);
}
