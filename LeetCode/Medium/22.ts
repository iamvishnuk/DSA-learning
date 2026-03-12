// 22. Generate Parentheses
/*
 * String
 * Dynamic Programming
 * Backtracking
 */

function generateParenthesis(n: number): string[] {
  let ans: string[] = [];

  function solve(s: string, open: number, close: number) {
    if (open === n && close === n) {
      ans.push(s);
      return;
    }

    if (open < n) {
      solve(s + '(', open + 1, close);
    }

    if (close < open) {
      solve(s + ')', open, close + 1);
    }
  }

  solve('', 0, 0);

  return ans;
}
