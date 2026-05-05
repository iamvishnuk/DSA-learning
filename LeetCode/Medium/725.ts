//725. Split Linked List in Parts
/*
 * Linked List
 */

import { ListNode } from '../../types';

function splitListToParts(
  head: ListNode | null,
  k: number
): Array<ListNode | null> {
  let length: number = 0;
  let curr = head;

  while (curr) {
    length++;
    curr = curr.next;
  }

  const baseSize = Math.floor(length / k);
  let extra = length % k;
  const res: Array<ListNode | null> = [];

  curr = head;

  for (let i = 0; i < k; i++) {
    let part = curr;
    let size = baseSize + (extra > 0 ? 1 : 0);
    if (extra > 0) extra--;

    let prev: ListNode | null = null;

    for (let j = 0; j < size; j++) {
      prev = curr;
      curr = curr?.next || null;
    }

    if (prev) {
      prev.next = null;
    }

    res.push(part);
  }

  return res;
}
