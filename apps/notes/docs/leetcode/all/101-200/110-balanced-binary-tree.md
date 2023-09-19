# [110. Balanced Binary Tree](https://leetcode.cn/problems/balanced-binary-tree/description/)

## 思路

一开始没想到解决方案，看了题解...既要又要还要的方法可海星，-1 表示非平衡二叉树，其它表示平衡二叉树最大高度差，

## Balance Tree

A balanced binary tree is a binary tree that follows the 3 conditions:

1. The height of the left and right tree for any node does not differ by more than 1.
2. The left subtree of that node is also balanced.
3. The right subtree of that node is also balanced.

## TypeScript

```ts
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function getHeight(node: TreeNode | null): number {
  if (!node) return 0;
  const leftH = getHeight(node.left);
  if (leftH === -1) return -1;
  const rightH = getHeight(node.right);
  if (rightH === -1) return -1;
  const absH = Math.abs(leftH - rightH);
  return absH > 1 ? -1 : 1 + Math.max(leftH, rightH);
}

function isBalanced(root: TreeNode | null): boolean {
  return getHeight(root) !== -1;
}
```
