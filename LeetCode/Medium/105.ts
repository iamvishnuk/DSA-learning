// 105. Construct Binary Tree from Preorder and Inorder Traversal
/*
 * Array
 * Hash Table
 * Divide and Conquer
 * Tree
 * Binary Tree
 */

import { TreeNode } from '../../types';

function buildTree1(preorder: number[], inorder: number[]): TreeNode | null {
  function recurse(
    pStart: number,
    pEnd: number,
    inStart: number,
    inEnd: number
  ): TreeNode | null {
    if (pStart > pEnd || inStart > inEnd) return null;

    const rootValue = preorder[pStart];
    const inIndex = inorder.indexOf(rootValue);
    let nLeft = inIndex - inStart;

    let root = new TreeNode(rootValue);

    root.left = recurse(pStart + 1, pStart + nLeft, inStart, inEnd - 1);
    root.right = recurse(pStart + 1 + nLeft, pEnd, inIndex + 1, inEnd);

    return root;
  }
  return recurse(0, preorder.length - 1, 0, inorder.length - 1);
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const map = new Map<number, number>();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  let preIndex: number = 0;

  const build = (left: number, right: number): TreeNode | null => {
    if (left > right) return null;

    const rootValue = preorder[preIndex++];
    const root = new TreeNode(rootValue);

    const mid = map.get(rootValue)!;

    root.left = build(left, mid - 1);
    root.right = build(mid + 1, right);

    return root;
  };

  return build(0, inorder.length - 1);
}
