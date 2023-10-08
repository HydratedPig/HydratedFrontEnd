# 236. Lowest Common Ancestor of a Binary Tree

## [Leetcode](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree)

## Description

<p>Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.</p>

<p>According to the <a href="https://en.wikipedia.org/wiki/Lowest_common_ancestor" target="_blank">definition of LCA on Wikipedia</a>: &ldquo;The lowest common ancestor is defined between two nodes <code>p</code> and <code>q</code> as the lowest node in <code>T</code> that has both <code>p</code> and <code>q</code> as descendants (where we allow <b>a node to be a descendant of itself</b>).&rdquo;</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/14/binarytree.png" style="width: 200px; height: 190px;" />
<pre>
<strong>Input:</strong> root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
<strong>Output:</strong> 3
<strong>Explanation:</strong> The LCA of nodes 5 and 1 is 3.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/14/binarytree.png" style="width: 200px; height: 190px;" />
<pre>
<strong>Input:</strong> root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
<strong>Output:</strong> 5
<strong>Explanation:</strong> The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> root = [1,2], p = 1, q = 2
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[2, 10<sup>5</sup>]</code>.</li>
	<li><code>-10<sup>9</sup> &lt;= Node.val &lt;= 10<sup>9</sup></code></li>
	<li>All <code>Node.val</code> are <strong>unique</strong>.</li>
	<li><code>p != q</code></li>
	<li><code>p</code> and <code>q</code> will exist in the tree.</li>
</ul>

## 思路

回溯，先序和后序均可

1. 不过后序本质上就是个回溯，代码会简单一些，也容易理解，只要发现 p/q 就立即回溯，如果左右节点发现了 p、q 那么就返回 root
2. 先序回溯要记录回溯栈方便查找祖先节点

## TypeScript

```ts
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
// 后序
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (p === root || q === root || !root) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return !left ? right : left;
}
// 先序

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) return root;
  if (!p || !q) return null;
  const ancestorP: TreeNode[] = [];
  let findP = false;
  const ancestorQ: TreeNode[] = [];
  let findQ = false;
  const recursion = (r: TreeNode) => {
    if (findP && findQ) return;
    if (!findP) {
      ancestorP.push(r);
    }
    if (r.val === p.val) {
      findP = true;
    }
    if (!findQ) {
      ancestorQ.push(r);
    }
    if (r.val === q.val) {
      findQ = true;
    }
    r.left && recursion(r.left);
    r.right && recursion(r.right);
    if (!findP) {
      ancestorP.pop();
    }
    if (!findQ) {
      ancestorQ.pop();
    }
  };

  recursion(root);
  let lca = null;
  if (!findP || !findQ) return lca;
  for (let i = 0; i < ancestorP.length; i++) {
    const aP = ancestorP[i];
    const aQ = ancestorQ[i];
    if (aP === aQ) {
      lca = aP;
    } else {
      break;
    }
  }
  return lca;
}
```

## C++

```c++

```
