// 143. Reorder List
/**
 * Linked List
 * Two Pointer
 * Stack
 * Recursion
 */

import { ListNode } from '../../types';

function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return;

  // Step 1: Find the middle
  let slow: ListNode = head;
  let fast: ListNode | null = head;

  while (fast.next && fast.next.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half
  let second: ListNode | null = slow.next;
  slow.next = null;

  let prev: ListNode | null = null;

  while (second) {
    const next = second.next;
    second.next = prev;
    prev = second;
    second = next;
  }

  // Step 3: Merge the two halves
  let first: ListNode | null = head;
  second = prev;

  while (second) {
    const temp1: ListNode | null = first!.next;
    const temp2: ListNode | null = second.next;

    first!.next = second;
    second.next = temp1;

    first = temp1;
    second = temp2;
  }
}
