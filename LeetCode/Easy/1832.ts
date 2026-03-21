// 1832. Check if the Sentence Is Pangram
/*
 * Hash Table
 * String
 */

function checkIfPangram(sentence: string): boolean {
  const set = new Set();

  for (const ch of sentence) {
    set.add(ch);
  }

  return set.size === 26;
}
