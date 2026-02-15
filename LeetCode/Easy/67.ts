// 67. Add Binary

function addBinary(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry) {
    let sum = carry

    if (i >= 0) sum += Number(a[i--])
    if (j >= 0) sum += Number(b[j--])

    result = (sum % 2) + result
    carry = Math.floor(sum / 2)
  }

  return result

};
