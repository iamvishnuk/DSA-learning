// 1358. Number of Substrings Containing All Three Characters
/*
 * Hash Table
 * String
 * Sliding Window
 */

function numberOfSubstrings(s: string): number {
  const count = [0, 0, 0]; // count [a, b, c]
  let n = s.length;
  let left = 0;
  let right = 0;
  let ans = 0;

  while (right < n) {
    count[s.charCodeAt(right) - 97]++;

    while (count[0] > 0 && count[1] && count[2] > 0) {
      ans += n - right;
      count[s.charCodeAt(left) - 97]--;
      left++;
    }
    right++;
  }

  return ans;
}
