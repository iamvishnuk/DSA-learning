// 2181. Merge Nodes in Between Zeros
/*
 * Linked List
 * Simulation
 */

import { ListNode } from '../../types';

export function mergeNodes(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let dummy = new ListNode(0);
  let tail = dummy;
  let curr = head.next;
  let sum = 0;

  while (curr) {
    if (curr.val === 0) {
      tail.next = new ListNode(sum);
      tail = tail.next;
      sum = 0;
    } else {
      sum += curr.val;
    }

    curr = curr.next;
  }

  return dummy.next;
}
