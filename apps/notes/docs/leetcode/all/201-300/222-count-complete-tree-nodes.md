# [222. Count Complete Tree Nodes](https://leetcode.cn/problems/count-complete-tree-nodes/description/)

## 思路

如果只是算节点数量还是很简单的，复杂度也低，不过这题是要算 complete tree 特性的

### 什么是 complete Tree

> A complete binary tree is a special type of binary tree where all the levels of the tree are filled completely except the lowest level nodes which are filled from as left as possible.

简单来说就是除了最底层的，上面每一层节点都是全的，共 2 ^ (n - 2) + 1 个节点，叶子节点左侧部分全部填满

```ts
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function countNodes(root: TreeNode | null): number {
  const queue: TreeNode[] = [];
  let count = 0;
  if (!root) return count;
  queue.push(root);
  while (queue.length) {
    const front = queue.shift();
    count++;
    front.left && queue.push(front.left);
    front.right && queue.push(front.right);
  }
  return count;
}
```
