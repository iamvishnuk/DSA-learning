// 1685. Sum of Absolute Differences in a Sorted Array
/*
 * Array
 * Math
 * Prefix Sum
 */

function getSumAbsoluteDifferences(nums: number[]): number[] {
  const n: number = nums.length;

  const prefixSum: number[] = [];
  const res: number[] = [];

  prefixSum.push(nums[0]);

  for (let i = 1; i < n; i++) {
    prefixSum.push(prefixSum[i - 1] + nums[i]);
  }

  for (let i = 0; i < n; i++) {
    const leftSum = prefixSum[i] - nums[i];
    const rightSum = prefixSum[n - 1] - prefixSum[i];

    const leftCount = i;
    const rightCount = n - 1 - i;

    const leftTotal = leftCount * nums[i] - leftSum;
    const rightTotal = rightSum - rightCount * nums[i];

    res.push(leftTotal + rightTotal);
  }

  return res;
}
