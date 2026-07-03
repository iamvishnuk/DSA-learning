// 872. Leaf-Similar Trees
/*
 * Tree
 * Depth-First Search
 * Binary Tree
 */

import { TreeNode } from '../../types';

function dfs(node: TreeNode | null, arr: number[]): number[] {
  if (node?.left === null && node?.right === null) {
    arr.push(node.val);
  }

  if (node?.left) {
    dfs(node.left, arr);
  }

  if (node?.right) {
    dfs(node.right, arr);
  }
  return arr;
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const arr1: number[] = [];
  const arr2: number[] = [];

  dfs(root1, arr1);
  dfs(root2, arr2);

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) return false;
  }

  return true;
}
