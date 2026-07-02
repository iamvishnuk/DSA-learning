// 3286. Find a Safe Walk Through a Grid
/*
 * Array
 * Breadth-First Search
 * Graph Theory
 * Heap (Priority Queue)
 * Matrix
 * Shortest Path
 */

function findSafeWalk(grid: number[][], health: number): boolean {
  const m = grid.length;
  const n = grid[0].length;

  const startHealth = health - grid[0][0];

  if (startHealth <= 0) return false;

  const best = Array.from({ length: m }, () => Array(n).fill(-1));

  best[0][0] = startHealth;

  const heap = new SafeWalkMaxHeap();

  heap.enqueue([0, 0, startHealth]);

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  while (heap.size()) {
    const [r, c, h] = heap.dequeue()!;

    if (r === m - 1 && c === n - 1) return true;

    if (h < best[r][c]) continue;

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (nr < 0 || nc < 0 || nr >= m || nc >= n) {
        continue;
      }

      const nextHealth = h - grid[nr][nc];

      if (nextHealth <= 0) continue;

      if (nextHealth > best[nr][nc]) {
        heap.enqueue([nr, nc, nextHealth]);
        best[nr][nc] = nextHealth;
      }
    }
  }

  return false;
}

class SafeWalkMaxHeap {
  private heap: [number, number, number][] = [];

  constructor() {}

  enqueue(value: [number, number, number]) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  dequeue() {
    if (this.heap.length < 0) return [];

    const top = this.heap[0];
    const end = this.heap.pop()!;

    if (this.heap.length) {
      this.heap[0] = end;
      this.heapifyDown(0);
    }

    return top;
  }

  size() {
    return this.heap.length;
  }

  private parent(i: number) {
    return Math.floor((i - 1) / 2);
  }

  private leftChild(i: number) {
    return 2 * i + 1;
  }

  private rightChild(i: number) {
    return 2 * i + 2;
  }

  private heapifyUp(index: number) {
    while (
      index > 0 &&
      this.heap[index][2] > this.heap[this.parent(index)][2]
    ) {
      [this.heap[index], this.heap[this.parent(index)]] = [
        this.heap[this.parent(index)],
        this.heap[index]
      ];

      index = this.parent(index);
    }
  }

  private heapifyDown(index: number) {
    let largest = index;
    const left = this.leftChild(index);
    const right = this.rightChild(index);

    if (left < this.heap.length && this.heap[left][2] > this.heap[largest][2]) {
      largest = left;
    }

    if (
      right < this.heap.length &&
      this.heap[right][2] > this.heap[largest][2]
    ) {
      largest = right;
    }

    if (largest !== index) {
      [this.heap[largest], this.heap[index]] = [
        this.heap[index],
        this.heap[largest]
      ];

      this.heapifyDown(largest);
    }
  }
}
