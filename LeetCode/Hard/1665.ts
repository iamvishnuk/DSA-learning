// 1665. Minimum Initial Energy to Finish Tasks
/*
 * Array
 * Greedy
 * Sorting
 */

function minimumEffort(tasks: number[][]): number {
  tasks.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));

  let ans: number = 0;

  for (const task of tasks) {
    ans = Math.max(ans + task[0], task[1]);
  }

  return ans;
}

const task = [
  [1, 3],
  [2, 4],
  [10, 11],
  [10, 12],
  [8, 9]
];

console.log(minimumEffort(task));
