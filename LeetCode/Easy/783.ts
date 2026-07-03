// 783. Minimum Distance Between BST Nodes
import { TreeNode } from '../../types';

export function minDiffInBST(root: TreeNode | null): number {
  let minDiff: number = Infinity;
  let prev: number | null = null;

  function inOrder(node: TreeNode | null): void {
    if (!node) return;

    inOrder(node.left);

    if (prev !== null) {
      minDiff = Math.min(minDiff, node.val - prev);
    }
    prev = node.val;

    inOrder(node.right);
  }

  inOrder(root);

  return minDiff;
}
