// 513. Find Bottom Left Tree Value
/*
 * Tree
 * Depth-First Search
 * Breadth-First Search
 * Binary Tree
 */

import { TreeNode } from '../../types';

function findBottomLeftValue(root: TreeNode | null): number {
  let bottomLeftValue: number = 0;
  let maxDepth: number = -1;

  if (!root) return bottomLeftValue;

  function dfs(node: TreeNode | null, depth: number): void {
    if (!node) return;

    if (depth > maxDepth) {
      maxDepth = depth;
      bottomLeftValue = node.val;
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);

  return bottomLeftValue;
}
