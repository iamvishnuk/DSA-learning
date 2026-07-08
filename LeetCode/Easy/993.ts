// 993. Cousins in Binary Tree
/*
 * Tree
 * Depth-Frist Search
 * Breadth-First Search
 * Binary Tree
 */

import { TreeNode } from '../../types';

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  if (!root) return false;

  let head: number = 0;
  const queue: [TreeNode, TreeNode | null][] = [[root, null]];

  while (head < queue.length) {
    let levelSize: number = queue.length - head;
    let parentX: TreeNode | null = null;
    let parentY: TreeNode | null = null;

    while (levelSize) {
      const [node, parent] = queue[head++];

      if (node.val === x) parentX = parent;
      if (node.val === y) parentY = parent;

      if (node.left) queue.push([node.left, node]);
      if (node.right) queue.push([node.right, node]);

      levelSize--;
    }

    if (parentX !== null && parentY !== null) {
      return parentX !== parentY;
    }

    if (
      (parentX !== null && parentY === null) ||
      (parentX === null && parentY !== null)
    ) {
      return false;
    }
  }

  return false;
}
