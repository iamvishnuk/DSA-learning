// 2807. Insert Greatest Common Divisors in Linked List
/*
 * Linked List
 * Math
 * Number Theory
 */

import { ListNode } from '../../types';

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while (slow && fast) {
    const gcd = calculateGCD(slow.val, fast.val);

    const newNode = new ListNode(gcd);

    slow.next = newNode;
    newNode.next = fast;

    slow = fast;
    fast = fast.next;
  }

  return head;
}

function calculateGCD(a: number, b: number): number {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}
