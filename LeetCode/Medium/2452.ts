// 2452. Word Within Two Edits of Dictionary
/*
 * Array
 * String
 * Trie
 */

function twoEditWords(queries: string[], dictionary: string[]): string[] {
  const res: string[] = [];

  for (const query of queries) {
    for (const word of dictionary) {
      let diff = 0;

      for (let i = 0; i < query.length; i++) {
        if (query[i] !== word[i]) {
          diff++;
        }
      }

      if (diff <= 2) {
        res.push(query);
        break;
      }
    }
  }

  return res;
}
