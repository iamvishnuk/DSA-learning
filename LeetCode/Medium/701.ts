// 701. Insert into a Binary Search Tree
/*
 * Tree
 * Binary Search Tree
 * Binary Tree
 */

import { TreeNode } from '../../types';

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return new TreeNode(val);

  let curr: TreeNode = root;

  while (true) {
    if (val > curr.val && !curr.right) {
      curr.right = new TreeNode(val);
      break;
    }
    if (val < curr.val && !curr.left) {
      curr.left = new TreeNode(val);
      break;
    }

    if (val > curr.val && curr.right) {
      curr = curr.right;
    }

    if (val < curr.val && curr.left) {
      curr = curr.left;
    }
  }

  return root;
}
