// 662. Maximum Width of Binary Tree
/*
 * Tree
 * Depth-First Search
 * Breadth-First Serach
 * Binary Tree
 */

import { TreeNode } from '../../types';

function widthOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;

  const queue: [TreeNode, number][] = [[root, 0]];
  let head: number = 0;
  let maxWidth: number = 0;

  while (head < queue.length) {
    const leveSize = queue.length - head;
    const baseIndex = queue[head][1];

    let leftMost = 0;
    let rightMost = 0;

    for (let i = 0; i < leveSize; i++) {
      const [node, index] = queue[head++];

      const currentIndex = index - baseIndex;

      if (i === 0) leftMost = currentIndex;
      if (i === leveSize - 1) rightMost = currentIndex;

      if (node.left) {
        queue.push([node.left, currentIndex * 2]);
      }

      if (node.right) {
        queue.push([node.right, currentIndex * 2 + 1]);
      }
    }

    maxWidth = Math.max(maxWidth, rightMost - leftMost + 1);
  }

  return maxWidth;
}
