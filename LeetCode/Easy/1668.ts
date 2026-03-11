// 1668. Maximum Repeating Substring
/*
 * String
 * Dynamic Programming
 * String Matching
 */

function maxRepeating(sequence: string, word: string): number {
  let count = 0;
  let current = word;

  while (sequence.includes(current)) {
    count++;
    current += word;
  }

  return count;
}
