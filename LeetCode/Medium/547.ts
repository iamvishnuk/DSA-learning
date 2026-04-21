// 547. Number of Provinces
/*
 * Depth-First Search
 * Breadth-First Search
 * Union-Find
 * Graph Theory
 * */

/*
 * isConnected[i][i] = 1;
 * city is connect to j;
 * ----------------------->
 * Row (i) = FROM City
 * Column (j) = TO City
 *
 * City | 0 1 2
 * ------------
 *    0 | 1 1 0
 *    1 | 1 1 0
 *    2 | 0 0 1
 *
 * */

class UnionFind {
  parent: number[];

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // path compression
    }
    return this.parent[x];
  }

  union(a: number, b: number) {
    const rootA = this.find(a);
    const rootB = this.find(b);

    if (rootA !== rootB) {
      this.parent[rootB] = rootA;
    }
  }
}

function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;
  const uf = new UnionFind(n);

  // Step 1: connect cities
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] === 1) {
        uf.union(i, j);
      }
    }
  }

  // Step 2: count unique parents
  const set = new Set<number>();

  for (let i = 0; i < n; i++) {
    set.add(uf.find(i));
  }

  return set.size;
}
