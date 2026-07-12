// 804. Unique Morse Code Words
/*
 * Array
 * Hash Table
 * String
 */

function uniqueMorseRepresentations(words: string[]): number {
  const alphabet = new Map<string, string>([
    ['a', '.-'],
    ['b', '-...'],
    ['c', '-.-.'],
    ['d', '-..'],
    ['e', '.'],
    ['f', '..-.'],
    ['g', '--.'],
    ['h', '....'],
    ['i', '..'],
    ['j', '.---'],
    ['k', '-.-'],
    ['l', '.-..'],
    ['m', '--'],
    ['n', '-.'],
    ['o', '---'],
    ['p', '.--.'],
    ['q', '--.-'],
    ['r', '.-.'],
    ['s', '...'],
    ['t', '-'],
    ['u', '..-'],
    ['v', '...-'],
    ['w', '.--'],
    ['x', '-..-'],
    ['y', '-.--'],
    ['z', '--..']
  ]);
  const set = new Set<string>();

  for (const word of words) {
    let morseCode: string = '';

    for (const letter of word) {
      morseCode += alphabet.get(letter)!;
    }

    set.add(morseCode);
  }

  return set.size;
}
