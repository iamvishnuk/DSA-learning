// 1967. Number of String Appear as Substring in Word
/*
 * Array
 * String
 */

function numOfStrings(patterns: string[], word: string): number {
  let count = 0;

  for (let pattern of patterns) {
    if (word.includes(pattern)) count++;
  }

  return count;
}
