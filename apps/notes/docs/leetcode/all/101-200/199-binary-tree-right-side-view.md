# [Binary Tree Right Side View](https://leetcode.cn/problems/binary-tree-right-side-view/description/)

## 思路

他要看右视图，那就给他右视图，就是每一行最右边的节点，诶？每一行，每一层，哦~层序遍历

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

// queue
function rightSideView(root: TreeNode | null): number[] {
  const result: number[] = [];
  const queue: TreeNode[] = [];
  if (!root) return result;
  queue.push(root);
  while (queue.length) {
    const levelQueue: number[] = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const top = queue.shift();
      levelQueue.push(top.val);
      top.left && queue.push(top.left);
      top.right && queue.push(top.right);
    }
    const right = levelQueue.pop();
    result.push(right);
  }
  return result;
}
```
