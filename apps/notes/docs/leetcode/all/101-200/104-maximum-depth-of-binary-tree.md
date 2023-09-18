# [104. Maximum Depth of Binary Tree](https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/)

## 思路

同 [559](../501-600/559-maximum-depth-of-n-ary-tree.md)

```ts
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

// 迭代
function maxDepth(root: TreeNode | null): number {
  const queue: TreeNode[] = [];
  let depth = 0;
  if (!root) return depth;
  queue.push(root);
  while (queue.length) {
    const size = queue.length;
    depth++;
    for (let i = 0; i < size; i++) {
      const front = queue.shift();
      front.left && queue.push(front.left);
      front.right && queue.push(front.right);
    }
  }
  return depth;
}
```
