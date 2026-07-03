import { TreeNode } from '../types';

function preOrder(root: TreeNode | null): number[] {
  if (!root) return [];

  const res: number[] = [];
  const stack: TreeNode[] = [root];

  while (stack.length) {
    const node = stack.pop()!;

    res.push(node.val);

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return res;
}
