# [501. Find Mode in Binary Search Tree](https://leetcode.cn/problems/find-mode-in-binary-search-tree/description/)

## Description

Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

If the tree has more than one mode, return them in any order.

Assume a BST is defined as follows:

- The left subtree of a node contains only nodes with keys less than or equal to the node's key.
- The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
- Both the left and right subtrees must also be binary search trees.

## 思路

几天没刷题，脑子又浆糊了，BST 立即推 -> 中序遍历，中序遍历的时候 BST 是个递增数组，一个指针指向 preNode ，一个计数，一次循环数组就可以求出众数了

## TypeScript

```ts
function findMode(root: TreeNode | null): number[] {
  let maxCount = 0;
  let preNode = null;
  let count = 0;
  const result = [];
  const recursion = (cur: TreeNode | null) => {
    if (!cur) return;
    recursion(cur.left);
    if (!preNode) {
      count = 1;
    } else if (preNode.val === cur.val) {
      count++;
    } else {
      count = 1;
    }
    preNode = cur;
    if (maxCount === count) {
      result.push(cur.val);
    } else if (count > maxCount) {
      result.length = 0;
      maxCount = count;
      result.push(cur.val);
    }
    recursion(cur.right);
  };
  recursion(root);
  return result;
}
```
