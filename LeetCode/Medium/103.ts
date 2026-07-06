// 103. Binary Tree Zigzag Level Order Traversal
/*
 * Tree
 * Breadth-First Search
 * Binary Tree
 */

import { TreeNode } from '../../types';

export const zigzagLevelOrder = (root: TreeNode | null): number[][] => {
  if (!root) return [];

  const res: number[][] = [];
  const queue: TreeNode[] = [root];
  let leftToRight: boolean = true;
  let head: number = 0;

  while (head < queue.length) {
    let levelSize = queue.length - head;
    const level: number[] = new Array(levelSize);

    for (let i = 0; i < levelSize; i++) {
      let curr = queue[head++];

      let index = leftToRight ? i : levelSize - 1 - i;
      level[index] = curr?.val;

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    res.push(level);
    leftToRight = !leftToRight;
  }

  return res;
};
