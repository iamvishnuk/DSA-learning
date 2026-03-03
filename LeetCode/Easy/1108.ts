// 1108. Defangin an IP Address
/*
 * String
 */

function defangIPaddr(address: string): string {
  let result = '';

  for (let ch of address) {
    ch === '.' ? (result += '[.]') : (result += ch);
  }

  return result;
}
