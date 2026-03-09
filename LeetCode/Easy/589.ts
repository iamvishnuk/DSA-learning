// 589. N-ary Tree Preorder Traversal
/*
 * Stack
 * Tree
 * Depth-First Search
 */

import { _Node } from '../../types';

function preorder(root: _Node | null): number[] {
  const result: number[] = [];

  function traverse(node: _Node | null) {
    if (!node) return;

    result.push(node.val);

    for (const child of node.children) {
      traverse(child);
    }
  }

  traverse(root);

  return result;
}
