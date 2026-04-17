// 3761. Minimum Absolute Distance Between Mirror Pairs
/*
 * Array
 * Hash Table
 * Math
 */

function reverseNumber(num: number): number {
  let rev = 0;

  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return rev;
}

// solution 1 -> TLE
function minMirrorPairDistance1(nums: number[]): number {
  let map = new Map<number, number[]>();
  let res: number = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], []);
    }
    map.get(nums[i])!.push(i);
  }

  for (let i = 0; i < nums.length; i++) {
    let reversedNum: number = reverseNumber(nums[i]);

    if (map.has(reversedNum)) {
      for (const j of map.get(reversedNum)!) {
        if (i < j) {
          res = Math.min(res, Math.abs(i - j));
        }
      }
    }
  }

  return res === Infinity ? -1 : res;
}

function minMirrorPairDistance(nums: number[]): number {
  let map = new Map<number, number>();
  let res = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      res = Math.min(res, i - map.get(nums[i])!);
    }

    map.set(reverseNumber(nums[i]), i);
  }

  return res === Infinity ? -1 : res;
}
