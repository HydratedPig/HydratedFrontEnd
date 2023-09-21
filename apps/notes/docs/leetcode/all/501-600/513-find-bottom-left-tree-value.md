# [513. Find Bottom Left Tree Value](https://leetcode.cn/problems/find-bottom-left-tree-value/description/)

## Description

Given the root of a binary tree, return the leftmost value in the last row of the tree.

## 思路

给出最底层的最左边的值，easy 层序遍历，最后一层就是了，but 上难度，递归怎么写？回溯法，记录 depth & result，当深度超过当前深度时，depth & result 更新，遍历完全部节点后，就是我们要的值了

## Typescript

```ts
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
// 递归
function findBottomLeftValue(root: TreeNode | null): number {
  let result = 0;
  let leftLevel = -Infinity;
  if (!root) return result;
  const recursion = (r: TreeNode, level = 0) => {
    if (level > leftLevel) {
      result = r.val;
      leftLevel = level;
    }
    if (r.left) {
      recursion(r.left, level + 1);
    }
    if (r.right) {
      recursion(r.right, level + 1);
    }
  };
  recursion(root);
  return result;
}
// 层序
function findBottomLeftValue(root: TreeNode | null): number {
  let result = 0;
  const queue: TreeNode[] = [];
  if (!root) return result;
  queue.push(root);
  while (queue.length) {
    const size = queue.length;
    const front = queue[0];
    result = front.val;
    for (let i = 0; i < size; i++) {
      const f = queue.shift();
      f.left && queue.push(f.left);
      f.right && queue.push(f.right);
    }
  }
  return result;
}
```
