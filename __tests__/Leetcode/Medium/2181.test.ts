import { describe, expect, it } from 'vitest';
import { arrayToLinkedList, linkedListToArray } from '../../utils/LinkedList';
import { mergeNodes } from '../../../LeetCode/Medium/2181';

describe('2181. Merge Nodes in Between Zeros', () => {
  it('', () => {
    const input = [0, 3, 1, 0, 4, 5, 2, 0];
    const expected = [4, 11];

    const head = arrayToLinkedList(input);
    const result = mergeNodes(head);

    expect(linkedListToArray(result)).toEqual(expected);
  });

  it('', () => {
    const input = [0, 1, 0, 3, 0, 2, 2, 0];
    const expected = [1, 3, 4];

    const head = arrayToLinkedList(input);
    const result = mergeNodes(head);

    expect(linkedListToArray(result)).toEqual(expected);
  });
});
