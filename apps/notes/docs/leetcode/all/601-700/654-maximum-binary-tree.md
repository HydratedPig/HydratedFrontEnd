# [654. Maximum Binary Tree](https://leetcode.cn/problems/maximum-binary-tree/)

## Description

You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:

- Create a root node whose value is the maximum value in nums.
- Recursively build the left subtree on the subarray prefix to the left of the maximum value.
- Recursively build the right subtree on the subarray suffix to the right of the maximum value.

Return the maximum binary tree built from nums.

## 思路

构建最大二叉树，就是最大的数字在根节点，数字左边在左子树，右边在右子树

## TypeScript

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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (!nums.length) return null;
  let max = -Infinity;
  let maxIdx = -1;
  nums.forEach((num, idx) => {
    if (num > max) {
      max = num;
      maxIdx = idx;
    }
  });
  const leftTree = nums.slice(0, maxIdx);
  const rightTree = nums.slice(maxIdx + 1);
  const root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(leftTree);
  root.right = constructMaximumBinaryTree(rightTree);
  return root;
}
```
