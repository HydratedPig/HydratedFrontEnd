# 108. Convert Sorted Array to Binary Search Tree

## [Leetcode](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree)

## Description

<div class="xFUwe" data-track-load="description_content"><p>Given the <code>root</code> of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.</p>

<p>As a reminder, a <em>binary search tree</em> is a tree that satisfies these constraints:</p>

<ul>
	<li>The left subtree of a node contains only nodes with keys <strong>less than</strong> the node's key.</li>
	<li>The right subtree of a node contains only nodes with keys <strong>greater than</strong> the node's key.</li>
	<li>Both the left and right subtrees must also be binary search trees.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/05/02/tree.png" style="width: 500px; height: 341px;">
<pre><strong>Input:</strong> root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
<strong>Output:</strong> [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> root = [0,null,1]
<strong>Output:</strong> [1,null,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.</li>
	<li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code></li>
	<li>All the values in the tree are <strong>unique</strong>.</li>
	<li><code>root</code> is guaranteed to be a valid binary search tree.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Note:</strong> This question is the same as 1038: <a href="https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/" target="_blank">https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/</a></p>
</div>

## 思路

Give a global flag to save the sum of greater value. Then recurse the right subtree of the root. Calculate the flag with root's value. Then recurse the left subtree.

Introduce a global flag to store the sum of greater value encountered. Next, recursively explore the right subtree of the root. Updating the flag by adding the value of the root and then update the root with the flag. Finally, proceed to recursively explore the left subtree.

## TypeScript

```ts
function convertBST(root: TreeNode | null): TreeNode | null {
  let sum = 0;
  const recursion = (root: TreeNode | null) => {
    if (!root) return root;
    recursion(root.right);
    sum += root.val;
    root.val = sum;
    recursion(root.left);
  };
  recursion(root);
  return root;
}
```

## C++

```c++

```
