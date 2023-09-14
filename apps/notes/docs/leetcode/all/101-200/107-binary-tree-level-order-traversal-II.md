# [Binary Tree Level Order Traversal II](https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/description/)

## 思路

同 [102](./102-binary-tree-level-order-traversal.md) 反转一下就行

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
    const levelQueue: number = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      levelQueue.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.unshift(levelQueue);
  }
  return result;
}
```
