// 7. Reverse Integer
/*
 * Math
 */

function reverse(x: number): number {
  let res: number = 0;
  let isNegative: boolean = false;

  if (x < 0) {
    isNegative = true;
  }

  let num = Math.abs(x);

  while (num > 0) {
    let reminder = num % 10;
    res = res * 10 + reminder;
    num = Math.floor(num / 10);
  }

  if (res > Math.pow(2, 31) - 1) {
    return 0;
  }

  return isNegative ? -res : res;
}
