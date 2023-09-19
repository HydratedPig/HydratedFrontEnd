# [257. Binary Tree Paths](https://leetcode.cn/problems/binary-tree-paths/description/)

## 思路

相比较两年前，想到的方法是回溯，海星，这题很明显就是个深度优先遍历的算法，要记录路径上的点，并且回到上层的时候要重置下状态，回溯没跑了~

## TypeScript

```ts
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = [];
  if (!root) return result;
  const stack: TreeNode[] = [];
  const recursion = (node: TreeNode) => {
    stack.push(node);
    node.left && recursion(node.left);
    node.right && recursion(node.right);
    if (!node.left && !node.right) {
      // now it is leaf!
      result.push(stack.map((s) => s.val).join("->"));
    }
    stack.pop();
  };
  recursion(root);
  return result;
}
```
