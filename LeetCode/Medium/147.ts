// 147. Insertion Sort List
/*
 * Linked List
 * Sorting
 */

import { ListNode } from '../../types';

function insertionSortList(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(-Infinity);

  let curr: ListNode | null = head;

  while (curr) {
    const next = curr.next;

    let prev: ListNode | null = dummy;

    while (prev.next && prev.next.val < curr.val) {
      prev = prev.next;
    }

    curr.next = prev.next;
    prev.next = curr;

    curr = next;
  }

  return dummy.next;
}
