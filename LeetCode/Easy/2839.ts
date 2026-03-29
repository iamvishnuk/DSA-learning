// 2839. Check If String Can be Made Equal With Operations I
/*
 * String
 */

function canBeEqual(s1: string, s2: string): boolean {
  const arr = s1.split('');

  for (let i = 0; i < 2; i++) {
    if (arr[i] !== s2[i]) {
      [arr[i], arr[i + 2]] = [arr[i + 2], arr[i]];
    }
  }

  return arr.join('') === s2;
}
