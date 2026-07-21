// 3499. Maximize Active Section with Trade I
/*
 * String
 * Enumeration
 */

function maxActiveSectionsAfterTrade(s: string): number {
  const totalOnes = [...s].filter((c) => c === '1').length;

  const t = '1' + s + '1';

  const group: { ch: string; length: number }[] = [];

  let i = 0;

  while (i < t.length) {
    let j = i;

    while (j < t.length && t[j] === t[i]) {
      j++;
    }

    group.push({ ch: t[i], length: j - i });

    i = j;
  }

  let bestGain: number = 0;

  for (let i = 1; i < group.length - 1; i++) {
    if (
      group[i].ch === '1' &&
      group[i - 1].ch === '0' &&
      group[i + 1].ch === '0'
    ) {
      bestGain = Math.max(bestGain, group[i - 1].length + group[i + 1].length);
    }
  }

  return totalOnes + bestGain;
}
