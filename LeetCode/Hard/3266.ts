// 3266. Final Array State After K Multiplication Operations II
/*
 * Array
 * Heap (Priority Queue)
 * Simulation
 */

function getFinalState(
  nums: number[],
  k: number,
  multiplier: number
): number[] {
  const simulator = new FinalStateSimulator(nums, k, multiplier);

  return simulator.solve();
}

class FinalStateSimulator {
  private heap: { value: bigint; index: number }[] = [];
  private readonly MOD = 1000000007n;
  private readonly multiplier: bigint;
  private k: number;
  private maxValue: bigint;

  constructor(nums: number[], k: number, multiplier: number) {
    this.k = k;
    this.multiplier = BigInt(multiplier);

    this.maxValue = BigInt(Math.max(...nums));

    for (let i = 0; i < nums.length; i++) {
      this.heap.push({
        value: BigInt(nums[i]),
        index: i
      });
    }

    this.buildHeap();
  }

  solve(): number[] {
    // nothing changes
    if (this.multiplier === 1n) {
      return this.buildResult();
    }

    // phase 1 -> simulate until balanced
    while (
      this.k > 0 &&
      this.heap[0].value * this.multiplier <= this.maxValue
    ) {
      const smallest = this.pop();

      smallest.value = smallest.value * this.multiplier;

      if (smallest.value > this.maxValue) {
        this.maxValue = smallest.value;
      }

      this.push(smallest);

      this.k--;
    }

    // phase 2 -> distribute remaining operations
    const n = this.heap.length;

    const full = Math.floor(this.k / n);

    const extra = this.k % n;

    // current heap order matters
    this.heap.sort((a, b) => {
      if (a.value === b.value) {
        return a.index - b.index;
      }

      return a.value < b.value ? -1 : 1;
    });

    const result: number[] = new Array(n);

    for (let i = 0; i < n; i++) {
      const item = this.heap[i];

      let operations = full;

      if (i < extra) {
        operations++;
      }

      const finalValue =
        (item.value * this.modPow(this.multiplier, operations)) % this.MOD;

      result[item.index] = Number(finalValue);
    }

    return result;
  }

  private buildResult(): number[] {
    const result: number[] = new Array(this.heap.length);

    for (const item of this.heap) {
      result[item.index] = Number(item.value % this.MOD);
    }

    return result;
  }

  private modPow(base: bigint, exp: number): bigint {
    let result = 1n;

    while (exp > 0) {
      if (exp % 2 === 1) {
        result = (result * base) % this.MOD;
      }

      base = (base * base) % this.MOD;

      exp = Math.floor(exp / 2);
    }

    return result;
  }

  private buildHeap(): void {
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  private push(item: { value: bigint; index: number }): void {
    this.heap.push(item);

    this.heapifyUp(this.heap.length - 1);
  }

  private pop(): {
    value: bigint;
    index: number;
  } {
    const top = this.heap[0];

    const last = this.heap.pop()!;

    if (this.heap.length > 0) {
      this.heap[0] = last;

      this.heapifyDown(0);
    }

    return top;
  }

  private heapifyUp(index: number): void {
    while (index > 0) {
      const parent = this.parent(index);

      if (!this.compare(this.heap[index], this.heap[parent])) {
        break;
      }

      [this.heap[index], this.heap[parent]] = [
        this.heap[parent],
        this.heap[index]
      ];

      index = parent;
    }
  }

  private heapifyDown(index: number): void {
    while (true) {
      let smallest = index;

      const left = this.left(index);

      const right = this.right(index);

      if (
        left < this.heap.length &&
        this.compare(this.heap[left], this.heap[smallest])
      ) {
        smallest = left;
      }

      if (
        right < this.heap.length &&
        this.compare(this.heap[right], this.heap[smallest])
      ) {
        smallest = right;
      }

      if (smallest === index) {
        break;
      }

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index]
      ];

      index = smallest;
    }
  }

  private compare(
    a: { value: bigint; index: number },
    b: { value: bigint; index: number }
  ): boolean {
    if (a.value === b.value) {
      return a.index < b.index;
    }

    return a.value < b.value;
  }

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private left(index: number): number {
    return index * 2 + 1;
  }

  private right(index: number): number {
    return index * 2 + 2;
  }
}
