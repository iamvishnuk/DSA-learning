// 104. Maximum Depth of Binary Tree
/*
 * Tree
 * Depth-First Search
 * Breadth-First Search
 * Binary Tree
 */

import { TreeNode } from '../../types';

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return 1 + Math.max(left, right);
}
