// 1306. Jump Game III
/*
 * Array
 * Depth-First Search
 * Breadth-First Search
 */

function canReach(arr: number[], start: number): boolean {
  const n = arr.length;

  const queue: number[] = [start];
  const visited = new Set<number>();

  while (queue.length) {
    const index = queue.shift();

    if (visited.has(index!)) {
      continue;
    }

    if (index! < 0 || index! > n - 1) {
      continue;
    }

    if (arr[index!] === 0) {
      return true;
    }

    visited.add(index!);

    queue.push(index! + arr[index!]);
    queue.push(index! - arr[index!]);
  }

  return false;
}

console.log(canReach([4, 2, 3, 0, 3, 1, 2], 5));
console.log(canReach([3, 0, 2, 1, 2], 2));
