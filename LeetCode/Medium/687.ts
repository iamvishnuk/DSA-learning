// 687. Longest Univalue Path
/*
 * Tree
 * Depth-First Search
 * Binary Tree
 */

import { TreeNode } from '../../types';

function longestUnivaluePath(root: TreeNode | null): number {
  let ans: number = 0;

  const dfs = (node: TreeNode | null, parent: number): number => {
    if (!node) return 0;

    const left: number = dfs(node.left, node.val);
    const right: number = dfs(node.right, node.val);

    ans = Math.max(ans, left + right);

    return node.val === parent ? 1 + Math.max(left, right) : 0;
  };

  dfs(root, -1);

  return ans;
}
