// 3838. Weighted Word Mapping
/*
 * Array
 * String
 * Simulation
 */

function mapWordWeights(words: string[], weights: number[]): string {
  const reveredMap = [
    'z',
    'y',
    'x',
    'w',
    'v',
    'u',
    't',
    's',
    'r',
    'q',
    'p',
    'o',
    'n',
    'm',
    'l',
    'k',
    'j',
    'i',
    'h',
    'g',
    'f',
    'e',
    'd',
    'c',
    'b',
    'a'
  ];
  let res: string = '';

  for (const word of words) {
    let sum = 0;
    for (const char of word) {
      sum += weights[(char.charCodeAt(0) % 32) - 1];
    }
    res += reveredMap[sum % 26];
  }

  return res;
}

mapWordWeights(
  ['abcd', 'def', 'xyz'],
  [
    5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3, 7,
    7, 2
  ]
);
