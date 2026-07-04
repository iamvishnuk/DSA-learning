// 1315. Sum of Nodes with Even-Valued Grandparent
/*
 * Tree
 * Depth-First Search
 * Breadth-First Search
 * Binary Tree
 */

import { TreeNode } from '../../types';

function sumEvenGrandparent(root: TreeNode | null): number {
  if (!root) return 0;

  const queue: TreeNode[] = [root];
  let sum: number = 0;

  while (queue.length) {
    const node = queue.pop()!;

    if (node.val % 2 === 0) {
      if (node.left) {
        sum += node.left.left?.val ?? 0;
        sum += node.left.right?.val ?? 0;
      }

      if (node.right) {
        sum += node.right.left?.val ?? 0;
        sum += node.right.right?.val ?? 0;
      }
    }

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }

  return sum;
}
