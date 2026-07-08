// 113. Path sum II
/*
 * Backtracking
 * Tree
 * Depth-First Search
 * Binary Tree
 */

import { TreeNode } from '../../types';

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: number[][] = [];

  const dfs = (
    node: TreeNode | null,
    currSum: number,
    currPath: number[]
  ): void => {
    if (!node) return;

    currSum += node.val;
    currPath.push(node.val);

    if (!node.left && !node.right && currSum === targetSum) {
      res.push([...currPath]);
    }

    dfs(node.left, currSum, currPath);
    dfs(node.right, currSum, currPath);

    currPath.pop();
  };

  dfs(root, 0, []);

  return res;
}
