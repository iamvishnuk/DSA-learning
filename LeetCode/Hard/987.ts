// 987. Vertical Order Traversal of a Binary Tree
/*
 * Hash Table
 * Tree
 * Depth-First Search
 * Breadth-First Search
 * Sorting
 * Binary Tree
 */

import { TreeNode } from '../../types';

function verticalTraversal(root: TreeNode | null): number[][] {
  const nodes: { row: number; col: number; val: number }[] = [];

  function dfs(node: TreeNode | null, row: number, col: number): void {
    if (!node) return;

    nodes.push({ row, col, val: node.val });

    dfs(node.left, row + 1, col - 1);
    dfs(node.right, row + 1, col + 1);
  }

  dfs(root, 0, 0);

  nodes.sort((a, b) => {
    if (a.col !== b.col) return a.col - b.col;
    if (a.row !== b.row) return a.row - b.row;
    return a.val - b.val;
  });

  const res: number[][] = [];
  let currentCol = Number.MIN_SAFE_INTEGER;

  for (const node of nodes) {
    if (node.col !== currentCol) {
      currentCol = node.col;
      res.push([]);
    }
    res[res.length - 1].push(node.val);
  }

  return res;
}
