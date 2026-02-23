export const karpRabin = (text: string, pattern: string): number => {
  const base: number = 256;          // Number of possible characters (ASCII)
  const mod: number = 10000007;      // Prime number to keep hash values small

  const textLength: number = text.length;
  const patternLength: number = pattern.length;

  // If pattern is longer than text, no match possible
  if (patternLength > textLength) return -1;

  let textHash: number = 0;          // Hash value for current window in text
  let patternHash: number = 0;       // Hash value for pattern
  let h: number = 1;                 // Will store base^(patternLength - 1) % mod

  // Precompute h = base^(patternLength - 1) % mod
  // This represents the weight of the leftmost character
  for (let i = 0; i < patternLength - 1; i++) {
    h = (h * base) % mod;
  }

  // Compute initial hash for:
  // 1. pattern
  // 2. first window of text
  for (let i = 0; i < patternLength; i++) {
    patternHash = (patternHash * base + pattern.charCodeAt(i)) % mod;
    textHash = (textHash * base + text.charCodeAt(i)) % mod;
  }

  // Slide the window over the text
  for (let i = 0; i <= textLength - patternLength; i++) {

    // If hash matches, verify characters to avoid collision issues
    if (patternHash === textHash) {
      if (text.substring(i, i + patternLength) === pattern) {
        return i; // Match found
      }
    }

    // Compute hash for next window
    if (i < textLength - patternLength) {

      /*
        Remove leftmost character:
        text.charCodeAt(i) * h

        Multiply remaining hash by base (shift left)

        Add next character
      */
      textHash =
        (base * (textHash - text.charCodeAt(i) * h) +
          text.charCodeAt(i + patternLength)) % mod;

      // Make sure hash is positive
      if (textHash < 0) textHash += mod;
    }
  }

  // No match found
  return -1;
};

