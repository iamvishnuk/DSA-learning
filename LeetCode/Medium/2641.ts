// 2641. Cousins in Binary Tree II
/*
 * Tree
 * Depth-First Search
 * Breadth-First Search
 * Hash Table
 * Binary Tree
 */

import { TreeNode } from '../../types';

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const levelSum: number[] = [];
  const queue1: TreeNode[] = [root];
  let head1: number = 0;

  while (head1 < queue1.length) {
    let levelSize: number = queue1.length - head1;
    let sum: number = 0;

    while (levelSize) {
      const node = queue1[head1++];
      sum += node.val;

      if (node.left) queue1.push(node.left);
      if (node.right) queue1.push(node.right);

      levelSize--;
    }
    levelSum.push(sum);
  }

  const queue2: TreeNode[] = [root];
  let head2: number = 0;
  let currLevel: number = 1;
  root.val = 0;

  while (head2 < queue2.length) {
    let levelSize: number = queue2.length - head2;

    while (levelSize) {
      const node = queue2[head2++];

      const sibilingSum =
        (node.left !== null ? node.left.val : 0) +
        (node.right !== null ? node.right.val : 0);

      if (node.left) {
        node.left.val = levelSum[currLevel] - sibilingSum;
        queue2.push(node.left);
      }

      if (node.right) {
        node.right.val = levelSum[currLevel] - sibilingSum;
        queue2.push(node.right);
      }

      levelSize--;
    }
    currLevel++;
  }

  return root;
}
