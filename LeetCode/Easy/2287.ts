// 2287. Rearrange Characters to Make Target String
/*
 * Hash Table
 * String
 * Counting
 */

function rearrangeCharacters(s: string, target: string): number {
  const freqS = new Map<string, number>();
  const freqTarget = new Map<string, number>();

  let copies: number = Infinity;

  for (const char of s) {
    freqS.set(char, (freqS.get(char) || 0) + 1);
  }

  for (const char of target) {
    freqTarget.set(char, (freqTarget.get(char) || 0) + 1);
  }

  for (const [key, value] of freqTarget) {
    copies = Math.min(copies, Math.floor((freqS.get(key) || 0) / value));
  }

  return copies;
}
