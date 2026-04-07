// Keyboard Row
/*
 * Array
 * Hash Table
 * String
 */

function findWords(words: string[]): string[] {
  const row1 = new Set('qwertyuiop');
  const row2 = new Set('asdfghjkl');
  const row3 = new Set('zxcvbnm');
  const result: string[] = [];

  for (const word of words) {
    const lowerCase = word.toLowerCase();

    if (
      [...lowerCase].every((ch) => row1.has(ch)) ||
      [...lowerCase].every((ch) => row2.has(ch)) ||
      [...lowerCase].every((ch) => row3.has(ch))
    ) {
      result.push(word);
    }
  }

  return result;
}
