// 112. Path Sum
/*
 * Tree
 * Depth-First Search
 * Breadth-First Search
 * Binary Tree
 */

import { TreeNode } from '../../types';

function hasPathSum(
  root: TreeNode | null,
  targetSum: number,
  currSum: number = 0
): boolean {
  if (!root) return false;

  currSum += root.val;

  if (!root.left && !root.right) {
    return currSum === targetSum;
  }

  return (
    hasPathSum(root.left, targetSum, currSum) ||
    hasPathSum(root.right, targetSum, currSum)
  );
}
