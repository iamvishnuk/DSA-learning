import { describe, expect, it } from 'vitest';
import { arrayToLinkedList, linkedListToArray } from '../../utils/LinkedList';
import { sortList } from '../../../LeetCode/Medium/148';

describe('148. Sort List', () => {
  it('', () => {
    const input: number[] = [4, 2, 1, 3];
    const output: number[] = [1, 2, 3, 4];
    const head = arrayToLinkedList(input);

    const result = sortList(head);

    expect(linkedListToArray(result)).toEqual(output);
  });

  it('', () => {
    const input: number[] = [-1, 5, 3, 4, 0];
    const output: number[] = [-1, 0, 3, 4, 5];
    const head = arrayToLinkedList(input);

    const result = sortList(head);

    expect(linkedListToArray(result)).toEqual(output);
  });

  it('', () => {
    const input: number[] = [];
    const output: number[] = [];
    const head = arrayToLinkedList(input);

    const result = sortList(head);

    expect(linkedListToArray(result)).toEqual(output);
  });
});
