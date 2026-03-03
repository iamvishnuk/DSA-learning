// 1304 Find N unique Integers Sum up to Zero
/*
 * Array
 * Math
 */

function sumZero(n: number): number[] {
  if (n === 0) return [0];

  const output: number[] = [];

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    output.push(0 + i);
    output.push(0 - i);
  }

  if (n % 2 !== 0) {
    output.push(0);
  }

  return output;
}
