// 106. Construct Binary Tree from Inorder and Postorder Traversal
/*
 * Array
 * Hash Table
 * Divide and Conquer
 * Tree
 * Binary Tree
 */

import { TreeNode } from '../../types';

function buildTree1(inorder: number[], postorder: number[]): TreeNode | null {
  const map = new Map();
  inorder.forEach((v, i) => map.set(v, i));

  function recurse(
    pStart: number,
    pEnd: number,
    inStart: number,
    inEnd: number
  ): TreeNode | null {
    if (pStart > pEnd || inStart > inEnd) return null;

    let rootValue = postorder[pEnd];
    let inIndex = map.get(rootValue);
    let numOfLeftNode = inIndex - inStart;

    let root = new TreeNode(rootValue);

    root.left = recurse(
      pStart,
      pStart + numOfLeftNode - 1,
      inStart,
      inIndex - 1
    );
    root.right = recurse(pStart + numOfLeftNode, pEnd - 1, inIndex + 1, inEnd);

    return root;
  }

  return recurse(0, postorder.length - 1, 0, inorder.length - 1);
}

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const map = new Map<number, number>();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  let postIndex: number = postorder.length - 1;

  const build = (left: number, right: number): TreeNode | null => {
    if (left > right) return null;

    const rootValue: number = postorder[postIndex--];
    const mid: number = map.get(rootValue)!;

    const root = new TreeNode(rootValue);

    root.right = build(mid + 1, right);
    root.left = build(left, mid - 1);

    return root;
  };

  return build(0, inorder.length - 1);
}
