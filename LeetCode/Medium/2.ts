// 2. Add Two Numbers
/*
 * Linked List
 * Math
 * Recursion
 */

import { ListNode } from '../../types';

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let root = new ListNode();
  let temp = root;
  let carry = 0;
  let total = 0;

  while (l1 || l2 || carry) {
    total = carry;

    if (l1) {
      total += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      total += l2.val;
      l2 = l2.next;
    }

    let num = total % 10;
    carry = Math.floor(total / 10);

    temp.next = new ListNode(num);
    temp = temp.next;
  }

  return root.next;
}
