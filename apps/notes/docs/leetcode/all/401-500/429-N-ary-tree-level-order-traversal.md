# [N-ary Tree Level Order Traversal](https://leetcode.cn/problems/n-ary-tree-level-order-traversal/description/)

## 思路

没啥好说的，人家都要我们层序遍历了，开整

```ts
class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}
// queue
function levelOrder(root: Node | null): number[][] {
  const result: number[][] = [];
  const queue: Node[] = [];
  if (!root) return result;
  queue.push(root);
  while (queue.length) {
    const levelQueue: number[] = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      levelQueue.push(node.val);
      for (let child of node.children) {
        queue.push(child);
      }
    }
    result.push(levelQueue);
  }
  return result;
}
```
