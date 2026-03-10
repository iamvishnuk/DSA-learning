// 543. Diameter of Binary Tree
/*
 * Tree
 * Depth-First Search
 * Binary Tree
 */

import { TreeNode } from '../../types';

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter: number = 0;

  function height(node: TreeNode | null) {
    if (!node) return 0;

    const left: number = height(node.left);
    const right: number = height(node.right);

    diameter = Math.max(diameter, left + right);

    return 1 + Math.max(left, right);
  }

  height(root);

  return diameter;
}
