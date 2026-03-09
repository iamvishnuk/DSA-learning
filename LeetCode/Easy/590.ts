// 590. N-ary Tree Postorder Traversal
/*
 * Stack
 * Tree
 * Depth-First Search
 */

import { _Node } from '../../types';

function postorder(root: _Node | null): number[] {
  const result: number[] = [];

  function traverse(node: _Node | null) {
    if (!node) return;

    for (const child of node.children) {
      traverse(child);
    }

    result.push(node.val);
  }

  traverse(root);

  return result;
}
