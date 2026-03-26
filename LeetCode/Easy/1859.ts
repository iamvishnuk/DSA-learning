// 1859. Sorting the Sentence
/*
 * String
 * Sorting
 */

function sortSentence(s: string): string {
  const arr = s.split(' ');
  let res: string[] = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    const word: string = arr[i];
    const index = Number(word[word.length - 1]);

    res[index] = word.slice(0, word.length - 1);
  }

  return res.join(' ').trim();
}
