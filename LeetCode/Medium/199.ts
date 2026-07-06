// 199. Binary Tree Right Side View
/*
 * Tree
 * Depth-First Search
 * Breadth-First Serach
 * Binary Tree
 */

import { TreeNode } from '../../types';

export const rightSideView = (root: TreeNode | null): number[] => {
  if (!root) return [];

  const arr: number[] = [];
  const queue = [root];
  let head: number = 0;

  while (head < queue.length) {
    let temp: number = 0;
    let levelLength = queue.length - head;

    while (levelLength) {
      const node = queue[head++];

      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);

      if (node) {
        temp = node.val;
      }
      levelLength--;
    }

    arr.push(temp);
  }

  return arr;
};
