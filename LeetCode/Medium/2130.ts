// 2130. Maximum Twin Sum of a Linked List
/*
 * Linked List
 * Two Pointer
 * Stack
 */

import { ListNode } from '../../types';

function pairSum(head: ListNode | null): number {
  // Find the middle
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Reverse the Second Half
  let curr = slow;
  let prev = null;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  let first = head;
  let second = prev;
  let maxSum = 0;

  while (second && first) {
    maxSum = Math.max(maxSum, first.val + second.val);

    first = first.next;
    second = second.next;
  }

  return maxSum;
}
