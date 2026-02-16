// 190. Reverse Bits

function reverseBits(n: number): number {
  let result: number = 0;

  for (let i = 0; i < 32; i++) {
    // get the last bit
    let lastBit = n & 1

    result = result << 1

    result = result | lastBit

    n = n >>> 1

  }

  return result >>> 0
};
