// 3751. Total Waviness of Numbers in Range I
/*
 * Math
 * Dynamic Programming
 * Enumeration
 */

function totalWaviness(num1: number, num2: number): number {
  let count: number = 0;

  for (let i = num1; i <= num2; i++) {
    const num = String(i);
    if (num.length <= 2) continue;

    for (let j = 1; j < num.length - 1; j++) {
      if (
        Number(num[j]) > Number(num[j - 1]) &&
        Number(num[j]) > Number(num[j + 1])
      ) {
        count++;
      }

      if (
        Number(num[j]) < Number(num[j - 1]) &&
        Number(num[j]) < Number(num[j + 1])
      ) {
        count++;
      }
    }
  }

  return count;
}

console.log(totalWaviness(120, 130));
console.log(totalWaviness(198, 202));
