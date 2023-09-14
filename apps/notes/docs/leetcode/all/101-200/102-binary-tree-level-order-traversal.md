# [Binary Tree Level Order Traversal](https://leetcode.cn/problems/binary-tree-level-order-traversal/)

## 思路

用队列实现层序遍历，节点出的时候子节点入队，每一层集体入队，集体出队时候下一层集体入队

```ts
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    public val: number,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}
// queue
function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  const queue: TreeNode[] = [];
  if (!root) return result;
  queue.push(root);
  while (queue.length) {
    const levelQueue: number[] = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      levelQueue.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(levelQueue);
  }
  return result;
}
```
