// 657. Robot Return to Origin
/*
 * String
 */

function judgeCircle(moves: string): boolean {
  let upDown = 0;
  let leftRight = 0;

  for (const m of moves) {
    if (m === 'U') {
      upDown++;
    } else if (m === 'D') {
      upDown--;
    } else if (m === 'L') {
      leftRight++;
    } else {
      leftRight--;
    }
  }

  return !upDown && !leftRight;
}
