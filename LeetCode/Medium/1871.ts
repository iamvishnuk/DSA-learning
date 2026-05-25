// 1871. Jump Game VII
/*
 * String
 * Dynamic Programming
 * Sliding Window
 * Prefix Sum
 */

function canReach(s: string, minJump: number, maxJump: number): boolean {
  if (s[s.length - 1] !== '0') {
    return false;
  }

  const queue: number[] = [0];
  let lastVisited = 0;

  let i = 0;

  while (i < queue.length) {
    const start = Math.max(queue[i] + minJump, lastVisited + 1);
    const end = Math.min(queue[i] + maxJump, s.length - 1);

    for (let j = start; j <= end; j++) {
      if (s[j] === '0') {
        if (j === s.length - 1) {
          return true;
        }

        queue.push(j);
      }
    }

    lastVisited = end;
    i++;
  }

  return false;
}
