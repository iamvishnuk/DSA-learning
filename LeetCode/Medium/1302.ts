// 1302. Deepest Leaves Sum
/*
 * Tree
 * Depth-First Search
 * Breadth-First Search
 * Binary Tree
 */

import { TreeNode } from '../../types';

function deepestLeavesSum(root: TreeNode | null): number {
  let sum: number = 0;
  let maxDepth: number = -1;

  if (!root) return sum;

  function dfs(node: TreeNode | null, depth: number): void {
    if (!node) return;

    if (maxDepth === depth) {
      sum += node.val;
    }

    if (depth > maxDepth) {
      maxDepth = depth;
      sum = node.val;
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);

  return sum;
}
