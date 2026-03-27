// 61. Rotate List
/*
 * Linked List
 * Two Pointer
 */

import { ListNode } from '../../types';

function getLength(head: ListNode | null): number {
  let length: number = 0;
  let node = head;

  while (node) {
    length++;
    node = node.next;
  }

  return length;
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null;

  const length: number = getLength(head);
  k = k % length;

  if (k === 0) return head;

  let prev: ListNode | null = null;
  let node: ListNode | null = head;
  let i = 0;

  while (node && i < length - k) {
    prev = node;
    node = node.next;
    i++;
  }

  if (!prev || !node) return head;

  const root = prev.next!;
  prev.next = null;

  let tail: ListNode = root;
  while (tail.next) {
    tail = tail.next;
  }

  tail.next = head;

  return root;
}
