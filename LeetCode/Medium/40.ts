// 40. Combination Sum II
/*
 * Array
 * Backtracking
 */

function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const path: number[] = [];

  function bracktrack(start: number, remaining: number) {
    if (remaining === 0) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const num = candidates[i];

      if (i > start && num === candidates[i - 1]) continue;

      if (num > remaining) break;

      path.push(num);

      bracktrack(i + 1, remaining - num);

      path.pop();
    }
  }

  candidates.sort((a, b) => a - b);

  bracktrack(0, target);

  return result;
}
