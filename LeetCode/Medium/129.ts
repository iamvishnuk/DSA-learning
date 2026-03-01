// 129. Sum Root to Leaf Numbers
/*
 * Tree
 * Depth-First-Search
 * Binary Tree
 */

import { TreeNode } from '../../types';

function sumNumbers(root: TreeNode | null): number {
  let result: number = 0;

  function levelOrder(node: TreeNode | null, path: number[]): void {
    if (!node) return;

    path.push(node.val);

    if (!node.left && !node.right) {
      result += Number(path.join(''));
    } else {
      levelOrder(node.left, path);
      levelOrder(node.right, path);
    }

    path.pop();
  }

  levelOrder(root, []);

  return result;
}
