// 437. Path Sum III
/*
 * Tree
 * Depth-First Search
 * Binary Tree
 */

import { TreeNode } from '../../types';

function pathSumIII(root: TreeNode | null, targetSum: number): number {
  const countFrom = (node: TreeNode | null, currSum: number): number => {
    if (!node) return 0;
    currSum += node.val;

    let count = 0;

    if (currSum === targetSum) {
      count = 1;
    }

    count += countFrom(node.left, currSum);
    count += countFrom(node.right, currSum);

    return count;
  };

  if (!root) return 0;

  return (
    countFrom(root, 0) +
    pathSumIII(root.left, targetSum) +
    pathSumIII(root.right, targetSum)
  );
}

function pathSum(root: TreeNode | null, targetSum: number): number {
  const prefix = new Map<number, number>();
  prefix.set(0, 1);

  let count: number = 0;

  const dfs = (node: TreeNode | null, currSum: number): void => {
    if (!node) return;

    currSum += node.val;

    const needed = currSum - targetSum;
    count += prefix.get(needed) ?? 0;

    prefix.set(currSum, (prefix.get(currSum) ?? 0) + 1);

    dfs(node.left, currSum);
    dfs(node.right, currSum);

    prefix.set(currSum, prefix.get(currSum)! - 1);
  };

  dfs(root, 0);

  return count;
}
