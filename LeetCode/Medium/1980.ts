// 1980. Find Unique Binary String
/*
 * Array
 * Hash Table
 * String
 * Backtracking
 */

function findDifferentBinaryString(nums: string[]): string {
  const set = new Set<number>();
  const n = nums.length;

  for (let num of nums) {
    set.add(parseInt(num, 2));
  }

  for (let num = 0; num <= n; num++) {
    if (!set.has(num)) {
      let ans = num.toString(2);

      while (ans.length < n) {
        ans = '0' + ans;
      }

      return ans;
    }
  }

  return '';
}
