/*
 * Unlike preorder, inorder cannot simple "visit and go left".
 * We need to remember the path back to each parent.
 *
 * Algorithm
 * 1. Keep going left, push every node
 * 2. When you reach null, pop the top node
 * 3. Visit it.
 * 4. Move to its right
 * 5. Repeat
 */

import { TreeNode } from '../types';

function inOrder(root: TreeNode | null): number[] {
  const res: number[] = [];
  const stack: TreeNode[] = [];
  let current: TreeNode | null = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop()!;

    res.push(current.val);

    current = current.right;
  }

  return res;
}
