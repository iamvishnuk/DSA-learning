// 1457. Pseudo-Palindromic Paths in a Binary Tree
/*
 * Bit Manipulation
 * Tree
 * Depth-First Search
 * Breadth-First Search
 * Binary Tree
 */

import { TreeNode } from '../../types';

function pseudoPalindromicPaths(root: TreeNode | null): number {
  const freq = new Array(10).fill(0);
  let count: number = 0;

  const dfs = (node: TreeNode | null): void => {
    if (!node) return;

    freq[node.val]++;

    if (node.left === null && node.right === null) {
      let odd: number = 0;

      for (const value of freq) {
        if (value % 2 === 1) odd++;
      }

      if (odd <= 1) {
        count++;
      }
    } else {
      dfs(node.left);
      dfs(node.right);
    }

    freq[node.val]--;
  };

  dfs(root);

  return count;
}
