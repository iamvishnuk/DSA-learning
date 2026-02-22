// 868. Binary Gap
/*
 * Bit Manipulation
*/

function binaryGap(n: number): number {
  let binary = n.toString(2)
  let maxGap: number = 0;
  let prevIndex: number = -1;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      if (prevIndex !== -1) {
        maxGap = Math.max(maxGap, i - prevIndex)
      }

      prevIndex = i
    }
  }

  return maxGap
};


console.log(binaryGap(22))
