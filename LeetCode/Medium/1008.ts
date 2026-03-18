// 1008. Construct Binary Search Tree from Preorder Traversal
/*
 * Array
 * Stack
 * Tree
 * Binary Search Tree
 * Monotonic Stack
 * Binary Tree
 */

import { TreeNode } from '../../types';

function bstFromPreorder(preorder: number[]): TreeNode | null {
  if (preorder.length === 0) return null;

  const rootValue = preorder[0];
  const root = new TreeNode(rootValue);
  let splitIndex = null;

  for (let i = 1; i < preorder.length; i++) {
    if (preorder[i] > rootValue) {
      splitIndex = i;
      break;
    }
  }

  if (splitIndex === null) {
    splitIndex = preorder.length;
  }

  const left = preorder.slice(1, splitIndex);
  const right = preorder.slice(splitIndex, preorder.length);

  root.left = bstFromPreorder(left);
  root.right = bstFromPreorder(right);

  return root;
}

// optimized solution
function bstFromPreorder2(preorder: number[]): TreeNode | null {
  let index = 0;

  function build(min: number, max: number): TreeNode | null {
    if (index >= preorder.length) return null;

    const val = preorder[index];

    if (val < min || val > max) return null;

    index++;
    const root = new TreeNode(val);

    root.left = build(min, val);
    root.right = build(val, max);

    return root;
  }

  return build(-Infinity, Infinity);
}
