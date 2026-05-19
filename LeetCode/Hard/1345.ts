// 1345. Jump Game IV
/*
 * Array
 * Hash Table
 * Breadth-First Search
 * Depth-First Serch
 */

function minJumps(arr: number[]): number {
  const n: number = arr.length;

  if (n <= 1) {
    return 0;
  }

  const graph = new Map<number, number[]>();

  for (let i = 0; i < n; i++) {
    if (!graph.has(arr[i])) {
      graph.set(arr[i], []);
    }
    graph.get(arr[i])!.push(i);
  }

  let queue: number[] = [0];
  const visited = new Set<number>();
  visited.add(0);

  let step: number = 0;

  while (queue.length) {
    const next: number[] = [];

    for (const node of queue) {
      if (node === n - 1) {
        return step;
      }

      // Same value jumps
      for (const child of graph.get(arr[node])!) {
        if (!visited.has(child)) {
          visited.add(child);
          next.push(child);
        }
      }

      graph.get(arr[node])!.length = 0;

      // Right jump
      if (node + 1 < n && !visited.has(node + 1)) {
        visited.add(node + 1);
        next.push(node + 1);
      }

      // Left jump
      if (node - 1 >= 0 && !visited.has(node - 1)) {
        visited.add(node - 1);
        next.push(node - 1);
      }
    }

    queue = next;
    step++;
  }

  return step;
}
