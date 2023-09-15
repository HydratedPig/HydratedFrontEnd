# [Invert Binary Tree](https://leetcode.cn/problems/invert-binary-tree/description/)

## 思路

一开始想到层序遍历，但是没抓准核心，没想到解题方法，写递归的时候才反应过来所有节点的左右节点互换就行，不用考虑具体咋遍历

```ts
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function swap(root: TreeNode | null) {
  if (!root) return root;
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;
}

// 递归
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root;
  const temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
}
// 迭代
function invertTree(root: TreeNode | null): TreeNode | null {
  const stack: TreeNode[] = [];
  if (!root) return root;
  stack.push(root);
  while (stack.length) {
    const top = stack.pop();
    swap(top);
    top.left && stack.push(top.left);
    top.right && stack.push(top.right);
  }
  return root;
}
// 层序遍历
function invertTree(root: TreeNode | null): TreeNode | null {
  const queue: TreeNode[] = [];
  if (!root) return root;
  queue.push(root);
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const top = queue.pop();
      swap(top);
      top.left && queue.push(top.left);
      top.right && queue.push(top.right);
    }
  }
  return root;
}
```
