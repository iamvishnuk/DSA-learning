// 100. Same Tree
/*
 * Tree
 * Depth-First Search
 * Breadth-First Serach
 * Binary Tree
 */

import { TreeNode } from '../../types';

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;

  if (!p || !q) return false;

  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
