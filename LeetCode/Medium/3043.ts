// 3043. Find the Length of the Longest Common Prefix
/*
 * Array
 * Hash Table
 * String
 * Trie
 */

// <--- Solution One --->
function longestCommonPrefix1(arr1: number[], arr2: number[]): number {
  const set1 = new Set<number>();

  let longest: number = 0;

  for (const num of arr1) {
    const n = num.toString().length;

    for (let i = 0; i < n; i++) {
      set1.add(Number(num.toString().slice(0, i + 1)));
    }
  }

  for (let num of arr2) {
    for (let i = 0; i < num.toString().length; i++) {
      if (set1.has(Number(num.toString().slice(0, i + 1)))) {
        longest = Math.max(longest, num.toString().slice(0, i + 1).length);
      }
    }
  }

  return longest;
}

// <--- Solution Two --->

class TrieNode {
  children = new Map<String, TrieNode>();

  constructor() {
    this.children = new Map();
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(num: number) {
    let node = this.root;

    for (let digit of num.toString()) {
      if (!node.children.has(digit)) {
        node.children.set(digit, new TrieNode());
      }

      node = node.children.get(digit)!;
    }
  }

  longestPrefix(num: number): number {
    let node = this.root;
    let length = 0;

    for (let digit of num.toString()) {
      if (!node.children.has(digit)) {
        break;
      }

      node = node.children.get(digit)!;
      length++;
    }

    return length;
  }
}

function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  const trie = new Trie();

  for (const num of arr1) {
    trie.insert(num);
  }

  let longest: number = 0;

  for (const num of arr2) {
    longest = Math.max(longest, trie.longestPrefix(num));
  }

  return longest;
}
