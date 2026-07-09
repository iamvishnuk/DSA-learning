// 124. Binary Tree Maximum Path Sum
/*
 * Dynamic Programming
 * Tree
 * Depth-First Search
 * Binary Tree
 */

import { TreeNode } from '../../types';

function maxPathSum(root: TreeNode | null): number {
  let maxSum: number = -Infinity;

  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0;

    const left: number = Math.max(dfs(node.left), 0);
    const right: number = Math.max(dfs(node.right), 0);

    maxSum = Math.max(maxSum, node.val + left + right);

    return node.val + Math.max(left, right);
  };

  dfs(root);

  return maxSum;
}
