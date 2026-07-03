/*
 * Post order is the trickiest because the parent must be processed after both children
 */

import { TreeNode } from '../types';

function postOrder(root: TreeNode | null): number[] {
  if (!root) return [];

  const result: number[] = [];
  const stack1: TreeNode[] = [root];
  const stack2: TreeNode[] = [];

  while (stack1.length) {
    const node = stack1.pop()!;

    stack2.push(node);

    if (node.left) {
      stack1.push(node.left);
    }

    if (node.right) {
      stack1.push(node.right);
    }
  }

  while (stack2.length) {
    result.push(stack2.pop()!.val);
  }

  return result;
}
