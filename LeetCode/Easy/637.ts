// 637. Average of Levels in Binary Tree
/*
 * Tree
 * Depth-First Search
 * Breadth-First Search
 * Binary Tree
 */

import { TreeNode } from '../../types';

function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) return [];

  const res: number[] = [];
  const queue: TreeNode[] = [root];
  let head = 0;

  while (head < queue.length) {
    const leveSize = queue.length - head;
    let sum = 0;

    for (let i = 0; i < leveSize; i++) {
      const node = queue[head++];
      sum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    const avg = sum / leveSize;

    res.push(avg);
  }

  return res;
}
