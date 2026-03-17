// 117. Populating Next Right Pointers in Eeach Node II
/*
 * Linked List
 * Tree
 * Depth-First Search
 * Breadth-First Search
 * Binary Tree
 */

import { _Node } from './116';

function connect(root: _Node | null): _Node | null {
  const queue = [root];

  while (queue.length) {
    let n = queue.length;

    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;

      if (i < n - 1) node.next = queue[0];
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return root;
}
