// 3612. Process String with Special Operations I
/*
 * String
 * Simulation
 */

function processStr(s: string): string {
  let result: string = '';

  for (const c of s) {
    if (c === '*') {
      result = result.slice(0, -1);
    } else if (c === '#') {
      result = result + result;
    } else if (c === '%') {
      result = result.split('').reverse().join('');
    } else {
      result += c;
    }
  }

  return result;
}
