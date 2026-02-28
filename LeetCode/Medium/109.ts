// 109. Convert Sorted List to Binary Search Tree
/*
 * Linked List
 * Divide and Conquer
 * Tree
 * Binary Search Tree
 * Binary Search
 */

import { ListNode, TreeNode } from '../../types';

function sortedListToBST(head: ListNode | null): TreeNode | null {
  let arr: number[] = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  function buildBST(left: number, right: number): TreeNode | null {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(arr[mid]);

    node.left = buildBST(left, mid - 1);
    node.right = buildBST(mid + 1, right);

    return node;
  }

  return buildBST(0, arr.length - 1);
}
