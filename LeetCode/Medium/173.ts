// 173. Binary Search Tree Iterator
/*
 * Stack
 * Tree
 * Design
 * Binary search Tree
 * Binary Tree
 * Iterator
 */

import { TreeNode } from '../../types';

class BSTIterator {
  private current: TreeNode | null;
  private stack: TreeNode[];

  constructor(root: TreeNode | null) {
    this.stack = [];
    this.current = root;
  }

  next(): number {
    while (this.current) {
      this.stack.push(this.current);
      this.current = this.current.left;
    }

    let node = this.stack.pop()!;
    this.current = node?.right;

    return node?.val;
  }

  hasNext(): boolean {
    return this.stack.length > 0 || this.current !== null;
  }
}
