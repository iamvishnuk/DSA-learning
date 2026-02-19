// 696. Count Binary Substring

function countBinarySubstrings(s: string): number {
  const group: number[] = []
  let substring: number = 0;
  let count: number = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++
    } else {
      group.push(count)
      count = 1;
    }
  }

  for (let i = 0; i < group.length - 1; i++) {
    substring += Math.min(group[i], group[i + 1])
  }


  return substring
};

console.log(countBinarySubstrings('00011100'))
console.log(countBinarySubstrings('00110011'))
console.log(countBinarySubstrings('10101'))
