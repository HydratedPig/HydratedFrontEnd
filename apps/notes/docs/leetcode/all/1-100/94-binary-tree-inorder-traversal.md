# [Binary Tree Inorder Traversal](https://leetcode.cn/problems/binary-tree-inorder-traversal/description/)

## 思路

1. 递归
2. 迭代法，先遍历塞入所有左节点，然后取出来，如果取出来有右节点，塞入右节点，并把所有右节点的左子节点塞进去

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
function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  const left = inorderTraversal(root.left);
  const right = inorderTraversal(root.right);
  return [...left, root.val, ...right];
}

// 小递归
function inorderTraversal(root: TreeNode | null): number[] {
  const result = [];
  const traverse = (r: TreeNode | null) => {
    if (!r) return;
    traverse(r.left);
    result.push(r.val);
    traverse(r.right);
  };
  traverse(root);
  return result;
}

// 迭代法
function inorderTraversal(root: TreeNode | null): number[] {
  const result = [];
  const stack = [];
  if (!root) return result;
  const pushCurAndItsLeft = (r: TreeNode) => {
    stack.push(r);
    while (r.left) {
      stack.push(r.left);
      r = r.left;
    }
  };
  pushCurAndItsLeft(root);

  while (stack.length) {
    const center = stack.pop();
    result.push(center.val);
    center.right && pushCurAndItsLeft(center.right);
  }
  return result;
}
```
