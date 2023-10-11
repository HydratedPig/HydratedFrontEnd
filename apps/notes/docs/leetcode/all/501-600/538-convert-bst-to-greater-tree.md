# 538. Convert BST to Greater Tree

## [Leetcode](https://leetcode.cn/problems/convert-bst-to-greater-tree)

## Description

<div class="xFUwe" data-track-load="description_content"><p>Given an integer array <code>nums</code> where the elements are sorted in <strong>ascending order</strong>, convert <em>it to a </em><span data-keyword="height-balanced" class=" cursor-pointer relative text-dark-blue-s text-sm"><div class="popover-wrapper inline-block" data-headlessui-state=""><div><div aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:rri:"><div><strong><em>height-balanced</em></strong></div></div><div style="position: fixed; z-index: 40; inset: 0px auto auto 0px; transform: translate(698px, 221px);"></div></div></div></span> <em>binary search tree</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg" style="width: 302px; height: 222px;">
<pre><strong>Input:</strong> nums = [-10,-3,0,5,9]
<strong>Output:</strong> [0,-3,9,-10,null,5]
<strong>Explanation:</strong> [0,-10,5,null,-3,null,9] is also accepted:
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg" style="width: 302px; height: 222px;">
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/btree.jpg" style="width: 342px; height: 142px;">
<pre><strong>Input:</strong> nums = [1,3]
<strong>Output:</strong> [3,1]
<strong>Explanation:</strong> [1,null,3] and [3,1] are both height-balanced BSTs.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>nums</code> is sorted in a <strong>strictly increasing</strong> order.</li>
</ul>
</div>

## 思路

It's a straightforward question. Find the center number. Make the center number as root. Transform the center's left side into BST and plant it as root's left subtree. And do it for the center's right side

It's a straightforward question. Find the central number, set it as the root, transform the left side of the center into a BST, and attach it as the left subtree of the root. Repeat the process for the right side of the center.

## TypeScript

```ts
function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) return null;
  const rootIdx = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[rootIdx]);
  root.left = sortedArrayToBST(nums.slice(0, rootIdx));
  root.right = sortedArrayToBST(nums.slice(rootIdx + 1, nums.length));
  return root;
}
```

## C++

```c++

```
