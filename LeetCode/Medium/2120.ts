// 2120. Execution of All Suffix Instructions Staying in a Grid
/*
 * String
 * Simulation
 */

function executeInstructions(
  n: number,
  startPos: number[],
  s: string
): number[] {
  const len: number = s.length;
  const res: number[] = [];
  const direction: Record<string, number[]> = {
    L: [0, -1],
    R: [0, 1],
    U: [-1, 0],
    D: [1, 0]
  };

  for (let i = 0; i < len; i++) {
    let count: number = 0;
    let start = [...startPos];

    for (let j = i; j < len; j++) {
      const [x, y] = direction[s[j]];

      start[0] += x;
      start[1] += y;

      if (start[0] < 0 || start[1] < 0 || start[0] >= n || start[1] >= n) {
        break;
      }
      count++;
    }
    res.push(count);
  }

  return res;
}
