// 116. Populating Next Right Pointers in Eeach Node
/*
 * Linked List
 * Tree
 * Depth-First Search
 * Breadth-First Search
 * Binary Tree
 */

export class _Node {
  val: number;
  left: _Node | null;
  right: _Node | null;
  next: _Node | null;

  constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

function connect(root: _Node | null): _Node | null {
  const queue = [root];

  while (queue.length) {
    let n = queue.length;

    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;

      if (i < n - 1) node.next = queue[0];
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }
  }

  return root;
}
