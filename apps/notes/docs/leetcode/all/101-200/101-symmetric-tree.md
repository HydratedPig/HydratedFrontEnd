# [Symmetric Tree](https://leetcode.cn/problems/symmetric-tree/description/)

## 思路

想了一会儿，写二叉树写得脑子浆糊了，一直在想遍历二叉树，不就是两两比较么，一开始想的是层序遍历，每一层左右双指针遍历，能是能，就是会超时...两两比较+遍历，放到一起好了啊

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

// 递归
function isSymmetricTree(root: TreeNode | null): boolean {
  if (!root) return true;

  const compare = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (left?.val !== right?.val) return false;
    if (!left || !right) return true;
    return compare(left.left, right.right) && compare(left.right, right.left);
  };

  return compare(root.left, root.right);
}

// 迭代法
function isSymmetricTree(root: TreeNode | null): boolean {
  if (!root) return true;
  const queue: (TreeNode | null)[] = [];
  queue.push(root.left, root.right);
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size / 2; i++) {
      const left = queue.shift();
      const right = queue.shift();
      if (left?.val !== right?.val) return false;
      if (!left || !right) continue;
      queue.push(left.left, right.right);
      queue.push(left.right, right.left);
    }
  }
  return true;
}
```
