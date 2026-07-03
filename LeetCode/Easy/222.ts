// 222. Count Complete Tree Node
/*
 * Binary Search
 * Bit Manipulation
 * Tree
 * Binary Tree
 */

import { TreeNode } from '../../types';

function countNodes(root: TreeNode | null, count: number = 0): number {
  return root
    ? 1 + countNodes(root.left, count) + countNodes(root.right, count)
    : count;
}
