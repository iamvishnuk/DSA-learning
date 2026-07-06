// 1161. Maximum Level Sum of a Binary Tree
/*
 * Tree
 * Depth-First Search
 * Breadth-First Search
 * Binary Tree
 */

import { TreeNode } from '../../types';

export const maxLevelSum = (root: TreeNode | null): number => {
  if (root === null) return 0;
  let maxLevel = 0;
  let maxSum = -Infinity;
  let currentLevel = 1;
  let head = 0;

  const queue = [root];

  while (head < queue.length) {
    let currentSum = 0;
    let levelSize = queue.length - head;

    while (levelSize) {
      let curr = queue[head++];

      if (curr?.left) queue.push(curr.left);
      if (curr?.right) queue.push(curr.right);

      if (curr) {
        currentSum += curr.val;
      }
      levelSize--;
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxLevel = currentLevel;
    }

    currentLevel++;
  }

  return maxLevel;
};
