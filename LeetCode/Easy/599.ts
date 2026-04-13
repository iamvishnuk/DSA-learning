// 599. Minimum Index Sum of Two Lists
/*
 * Array
 * Hash Map
 * String
 */

function findRestaurant(list1: string[], list2: string[]): string[] {
  const map = new Map<string, number>();
  let res: string[] = [];
  let minSum: number = Infinity;
  let sum: number = 0;

  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  for (let i = 0; i < list2.length; i++) {
    if (map.has(list2[i])) {
      sum = i + map.get(list2[i])!;

      if (sum < minSum) {
        res = [];
        res.push(list2[i]);
        minSum = sum;
      } else if (sum === minSum) {
        res.push(list2[i]);
      }
    }
  }

  return res;
}
