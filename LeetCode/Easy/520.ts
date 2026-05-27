// 520. Detect Capital
/*
 * String
 */

function detectCapitalUse(word: string): boolean {
  let uppercaseCount: number = 0;

  for (const c of word) {
    if (c >= 'A' && c <= 'Z') {
      uppercaseCount++;
    }
  }

  return (
    uppercaseCount === word.length ||
    uppercaseCount === 0 ||
    (uppercaseCount === 1 && word[0] >= 'A' && word[0] <= 'Z')
  );
}
