# [Binary Tree Postorder Traversal](https://leetcode.cn/problems/binary-tree-postorder-traversal/description/)

## 思路

递归没啥好说的，迭代法一时半会儿居然没想起来怎么用先序遍历转换，看了下题解...倒序居然没想到，智障如我

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
function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  const left = postorderTraversal(root.left);
  const right = postorderTraversal(root.right);
  return [...left, ...right, root.val];
}

// 小递归
function postorderTraversal(root: TreeNode | null): number[] {
  const result = [];
  const traverse = (r: TreeNode | null) => {
    if (!r) return;
    result.push(r.val);
    traverse(r.right);
    traverse(r.left);
  };
  traverse(root);
  return result;
}

// 迭代法
function postorderTraversal(root: TreeNode | null): number[] {
  const result = [];
  const traversal = [];
  if (!root) return result;
  traversal.push(root);
  while (traversal.length) {
    const center = traversal.pop();
    result.push(center.val);
    center.left && traversal.push(center.left);
    center.right && traversal.push(center.right);
  }
  return result.reverse();
}
```
