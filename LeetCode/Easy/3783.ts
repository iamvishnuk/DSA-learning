// 3783. Mirro Distance of an integer
/*
 * Math
 */

function reverserNumber(num: number): number {
  let rev = 0;

  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return rev;
}

function mirrorDistance(n: number): number {
  return Math.abs(n - reverserNumber(n));
}
