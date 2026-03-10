// 429. N-ary Tree Level Order Traversal
/*
 * Tree
 * Breadth-First Search
 */

import { _Node } from '../../types';

function levelOrder(root: _Node | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  const queue = [root];

  while (queue.length) {
    const arr: number[] = [];
    let levelSize = queue.length;

    while (levelSize) {
      let curr = queue.shift()!;

      for (const child of curr?.children) {
        queue.push(child);
      }

      if (curr) {
        arr.push(curr.val);
      }
      levelSize--;
    }
    result.push(arr);
  }

  return result;
}
