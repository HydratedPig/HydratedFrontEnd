# [112. Path Sum](https://leetcode.cn/problems/path-sum/)

## Description

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

## 思路

深度遍历的题目，注意回溯，多种方法解题，最先想到的是拿一个数组回溯，遍历到叶子节点后计算总和，不过这样子效率不高，然后折腾回溯，脑子不好，一直在想着凑 targetSum，忘了我可以 targetSum - root.val == leaf.val 来解决

## TypeScript

```ts
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function hasPathSum(root: TreeNode | null, targetNum: number): boolean {
  if (!root) return false;
  if (!root.left && !root.right && root.val === targetNum) {
    return true;
  }
  const nextVal = targetNum - root.val;
  return hasPathSum(root.left, nextVal) || hasPathSum(root.right, nextVal);
}
```
