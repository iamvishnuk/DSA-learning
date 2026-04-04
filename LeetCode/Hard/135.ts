// 135. Candy
/*
 * Array
 * Greedy
 */

function candy(ratings: number[]): number {
  const n = ratings.length;
  const candy = new Array(n).fill(1);

  // left -> right
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candy[i] = candy[i - 1] + 1;
    }
  }

  // right -> left
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candy[i] = Math.max(candy[i], candy[i + 1] + 1);
    }
  }

  return candy.reduce((a, c) => a + c, 0);
}
