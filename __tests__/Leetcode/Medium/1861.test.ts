import { describe, expect, it } from 'vitest';
import { rotateTheBox } from '../../../LeetCode/Medium/1861';

describe('1861. Rotate the Box', () => {
  it('', () => {
    const input = [
      ['#', '.', '*', '.'],
      ['#', '#', '*', '.']
    ];

    const output = [
      ['#', '.'],
      ['#', '#'],
      ['*', '*'],
      ['.', '.']
    ];

    expect(rotateTheBox(input)).toEqual(output);
  });

  it('', () => {
    const input = [
      ['#', '#', '*', '.', '*', '.'],
      ['#', '#', '#', '*', '.', '.'],
      ['#', '#', '#', '.', '#', '.']
    ];

    const output = [
      ['.', '#', '#'],
      ['.', '#', '#'],
      ['#', '#', '*'],
      ['#', '*', '.'],
      ['#', '.', '*'],
      ['#', '.', '.']
    ];

    expect(rotateTheBox(input)).toEqual(output);
  });
});
