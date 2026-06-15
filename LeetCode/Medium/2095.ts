// 2095. Delete the Middle Node of a Linked List
/*
 * Linked List
 * Two Pointer
 */

import { ListNode } from '../../types';

function deleteMiddle(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return null;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let prev: ListNode | null = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow!.next;
    fast = fast.next.next;
  }

  prev!.next = slow!.next;

  return head;
}
