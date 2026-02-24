// 28. Find the Index of the First Occurrence in a string;
/*
 * Two Pointer
 * String
*/

function strStr(haystack: string, needle: string): number {
  let textLength: number = haystack.length;
  let patternLength: number = needle.length;

  let mod: number = 10000007
  let base: number = 256

  let textHash = 0;
  let patternHash = 0;
  let h = 1;

  if (patternLength > textLength) return -1;

  for (let i = 0; i < patternLength - 1; i++) {
    h = (h * base) % mod
  }

  //inital Hash
  for (let i = 0; i < patternLength; i++) {
    patternHash = (patternHash * base + needle.charCodeAt(i)) % mod
    textHash = (textHash * base + haystack.charCodeAt(i)) % mod
  }

  for (let i = 0; i <= textLength - patternLength; i++) {
    if (textHash === patternHash) {
      if (haystack.substring(i, i + patternLength) === needle) {
        return i
      }
    }

    if (i < textLength - patternLength) {
      textHash = (base * (textHash - haystack.charCodeAt(i) * h) + haystack.charCodeAt(i + patternLength)) % mod

      if (textHash < 0) textHash += mod;

    }
  }

  return -1
};
