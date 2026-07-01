// 25. Reverse Nodes in k-Group
/*
 * Linked List
 * Recursion
 */

import { ListNode } from '../../types';

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let dummy = new ListNode(0, head);
  let groupPrev: ListNode | null = dummy;

  while (true) {
    let kthNode: ListNode | null = groupPrev;

    for (let i = 0; i < k && kthNode; i++) {
      kthNode = kthNode.next;
    }

    if (!kthNode) break;

    const groupNext = kthNode.next;

    let prev: ListNode | null = groupNext;
    let curr: ListNode | null = groupPrev!.next;

    while (curr !== groupNext) {
      let next = curr!.next;
      curr!.next = prev;
      prev = curr;
      curr = next;
    }

    let temp: ListNode | null = groupPrev!.next;
    groupPrev!.next = kthNode;
    groupPrev = temp;
  }

  return dummy.next;
}
