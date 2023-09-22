# [106. Construct Binary Tree From Inorder And Postorder Traversal](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

## Description

Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

## 思路

找到根节点，从根节点入手，将数组对拆成左子树中后序数组和右子树中后序数组，递归生成左右子树

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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  // 这里 inorder 和 postorder 长度一直都是一样的，不用考虑边界情况
  if (
    !inorder.length ||
    !postorder.length ||
    inorder.length !== postorder.length
  )
    return null;
  const rootVal = postorder.pop();
  const inorderRootIdx = inorder.findIndex((i) => i === rootVal);
  const leftInorder = inorder.splice(0, inorderRootIdx);
  inorder.shift();
  const leftPostorder = postorder.splice(0, leftInorder.length);
  const root = new TreeNode(rootVal);
  root.left = buildTree(leftInorder, leftPostorder);
  root.right = buildTree(inorder, postorder);
  return root;
}
```
