# [111. Minimum Depth of Binary Tree](https://leetcode.cn/problems/minimum-depth-of-binary-tree/)

## 思路

和最大深度一样， 层序遍历，只要子节点全部为空，就返回

```ts
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function minDepth(root: TreeNode | null): number {
  const queue: TreeNode[] = [];
  let depth = 0;
  if (!root) return depth;
  queue.push(root);
  while (queue.length) {
    const size = queue.length;
    depth++;
    for (let i = 0; i < size; i++) {
      const firstNode = queue.shift();
      if (!firstNode.left && !firstNode.right) return depth;
      firstNode.left && queue.push(firstNode.left);
      firstNode.right && queue.push(firstNode.right);
    }
  }
  return depth;
}
```
