// 39. Combination Sum
/*
 * Array
 * Backtracking
 */

function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const path: number[] = [];

  function bracktrack(start: number, remaining: number) {
    if (remaining === 0) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const num = candidates[i];

      if (num > remaining) break;

      path.push(num);

      bracktrack(i, remaining - num);

      path.pop();
    }
  }

  candidates.sort((a, b) => a - b);

  bracktrack(0, target);

  return result;
}
