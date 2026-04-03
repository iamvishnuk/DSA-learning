// 92. Reverse Linked List II
/*
 * Linked List
 */

import { ListNode } from '../../types';

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  const dummy = new ListNode(0, head);
  let LeftPrev: ListNode | null = dummy;
  let curr: ListNode | null = head;

  for (let i = 0; i < left - 1; i++) {
    LeftPrev = curr;
    curr = curr?.next ?? null;
  }

  let prev: ListNode | null = null;

  for (let i = 0; i < right - left + 1; i++) {
    let temp = curr!.next;
    curr!.next = prev;
    prev = curr;
    curr = temp;
  }

  LeftPrev!.next!.next = curr;
  LeftPrev!.next = prev;

  return dummy.next;
}
