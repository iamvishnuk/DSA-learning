// 1545. Find Kth Bit in Nth Binary String
/*
 * String
 * Recursion
 */

function invert(s: string): string {
  let result = '';

  for (let ch of s) {
    result += ch === '0' ? '1' : '0';
  }

  return result.split('').reverse().join('');
}

function findKthBit(n: number, k: number): string {
  if (n === 1) {
    return '0';
  }

  let s: string = '0';

  for (let i = 2; i <= n; i++) {
    s = s + '1' + invert(s);
  }

  return s[k - 1];
}
