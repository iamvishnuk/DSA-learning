// 2602. Minimum Operations to Make All Array Elements Equal
/*
 * Array
 * Binary Search
 * Sorting
 * Prefix Sum
 */

function minOperations(nums: number[], queries: number[]): number[] {
  const n: number = nums.length;

  nums.sort((a, b) => a - b);

  const prefix: number[] = [];
  prefix[0] = nums[0];

  const res: number[] = [];

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
  }

  for (const query of queries) {
    const bound = findBound(nums, query);

    const leftCount = bound;
    const leftSum = bound > 0 ? prefix[bound - 1] : 0;
    const leftCost = query * leftCount - leftSum;

    const rightCount = n - bound;
    const rightSum = prefix[n - 1] - leftSum;
    const rightCost = rightSum - query * rightCount;

    res.push(leftCost + rightCost);
  }

  return res;
}

function findBound(nums: number[], query: number): number {
  let start: number = 0;
  let end: number = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] < query) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
}

// [1, 3, 6, 8]
// [1, 4, 10, 18]
const nums = [3, 1, 6, 8],
  queries = [1, 5];

console.log(minOperations(nums, queries));
