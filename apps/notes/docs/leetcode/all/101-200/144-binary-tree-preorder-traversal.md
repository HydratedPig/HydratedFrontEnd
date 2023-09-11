# [Binary Tree Preorder Traversal](https://leetcode.cn/problems/binary-tree-preorder-traversal/description/)

## 思路

递归没啥好说的，我先想到的是个大递归，比较消耗，然后写了下迭代法求解，脑抽，写层序遍历写习惯了，看半天没看出来错误在哪

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
// 大递归
function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  const left = preorderTraversal(root.left);
  const right = preorderTraversal(root.right);
  return [root.val, ...left, ...right];
}

// 小递归
function preorderTraversal(root: TreeNode | null): number[] {
  const result = [];
  const traverse = (r: TreeNode | null) => {
    if (!r) return;
    result.push(r.val);
    traverse(r.left);
    traverse(r.right);
  };
  traverse(root);
  return result;
}

// 迭代法
function preorderTraversal(root: TreeNode | null): number[] {
  const result = [];
  const traversal = [];
  if (!root) return result;
  traversal.push(root);
  while (traversal.length) {
    const center = traversal.pop();
    result.push(center.val);
    // 注意，这里要先右入栈，后左入栈，因为 result 是出栈取值的！
    center.right && traversal.push(center.right);
    center.left && traversal.push(center.left);
  }
  return result;
}
```
