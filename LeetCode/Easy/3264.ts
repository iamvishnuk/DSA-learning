// 3264. Final Array State After K Multiplication Operations I
/*
 * Array
 * Math
 * Heap (Priority Queue)
 * Simulation
 */

function getFinalState(
  nums: number[],
  k: number,
  multiplier: number
): number[] {
  const minHeap = new FinalMinHeap(nums, k, multiplier);

  return minHeap.simulate();
}

class FinalMinHeap {
  private heap: { value: number; index: number }[] = [];
  private k: number;
  private multiplier: number;

  constructor(nums: number[], k: number, multiplier: number) {
    this.k = k;
    this.multiplier = multiplier;
    for (let i = 0; i < nums.length; i++) {
      this.insert(nums[i], i);
    }
  }

  private insert(value: number, index: number) {
    this.heap.push({ value, index });
    this.heapifyUP(this.heap.length - 1);
  }

  private heapifyUP(index: number) {
    while (
      index > 0 &&
      this.compare(this.heap[index], this.heap[this.parent(index)])
    ) {
      [this.heap[index], this.heap[this.parent(index)]] = [
        this.heap[this.parent(index)],
        this.heap[index]
      ];

      index = this.parent(index);
    }
  }

  private heapifyDown(index: number) {
    let smallest = index;
    let leftIndex = this.left(index);
    let rightIndex = this.right(index);

    if (
      leftIndex < this.heap.length &&
      this.compare(this.heap[leftIndex], this.heap[smallest])
    ) {
      smallest = leftIndex;
    }

    if (
      rightIndex < this.heap.length &&
      this.compare(this.heap[rightIndex], this.heap[smallest])
    ) {
      smallest = rightIndex;
    }

    if (smallest !== index) {
      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest]
      ];

      this.heapifyDown(smallest);
    }
  }

  simulate() {
    for (let i = 1; i <= this.k; i++) {
      this.heap[0].value = this.heap[0].value * this.multiplier;
      this.heapifyDown(0);
    }

    const res: number[] = new Array(this.heap.length);

    for (let i = 0; i < this.heap.length; i++) {
      const value = this.heap[i];

      res[value.index] = value.value;
    }

    return res;
  }

  // when two number are equal, you must choose the one with smaller index first
  private compare(
    a: { value: number; index: number },
    b: { value: number; index: number }
  ) {
    if (a.value === b.value) {
      return a.index < b.index;
    }

    return a.value < b.value;
  }

  private parent(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private left(index: number) {
    return 2 * index + 1;
  }

  private right(index: number) {
    return 2 * index + 2;
  }
}

console.log(getFinalState([2, 1, 3, 5, 6], 5, 2));
