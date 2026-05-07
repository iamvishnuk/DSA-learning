// 148. Sort List
/*
 * Linked List
 * Two Pointer
 * Divide and Conquer
 * Sorting
 * Merge Sort
 */

import { ListNode } from '../../types';

export function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let prev: ListNode | null = null;

  // find the mid
  while (fast && fast.next) {
    prev = slow;
    slow = slow!.next;
    fast = fast.next.next;
  }

  // cut the list in to two
  prev!.next = null;

  // sort the left and right
  const left = sortList(head);
  const right = sortList(slow);

  return merge(left, right);
}

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let tail = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }

    tail = tail.next;
  }

  tail.next = l1 || l2;

  return dummy.next;
}
