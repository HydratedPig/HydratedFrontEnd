# 本周刷题内容

## [94. Binary Tree Inorder Traversal](../../all/1-100/94-binary-tree-inorder-traversal.md)

## [101. Symmetric Tree](../../all/101-200/101-symmetric-tree.md)

## [102. Binary Tree Level Order Traversal](../../all/101-200/102-binary-tree-level-order-traversal.md)

## [107. Binary Tree Level Order Traversal II](../../all/101-200/107-binary-tree-level-order-traversal-II.md)

## [144. Binary Tree Preorder Traversal](../../all/101-200/144-binary-tree-preorder-traversal.md)

## [145. Binary Tree Postorder Traversal](../../all/101-200/145-binary-treee-postorder-traversal.md)

## [199. Binary Tree Right Side View](../../all/101-200/199-binary-tree-right-side-view.md)

## [226. Invert Binary Tree](../../all/201-300/226-invert-binary-tree.md)

## [429. N Ary Tree Level Order Traversal](../../all/429-N-ary-tree-level-order-traversal.md)

# 总结

## 低价选手总结，部分更高阶的逻辑还未掌握，争取常看常新

1. 前序遍历（中左右），中序遍历（左中右），后序遍历（左右中），层序遍历
2. 二叉树迭代递归方法很简单，只需要简单调换个位置就好了
3. 普通迭代法要注意，后序遍历相对于前序遍历谨记左右互换后，最后反转下
4. 普通迭代法中序遍历需要注意，和先序遍历很不一样，左子孙节点全部入栈后出栈，如果有右节点，右节点入栈后，其所有左子孙节点全部入栈，完成遍历
5. 反转二叉树，就是所有左右节点互换，完全不用考虑具体遍历规则
6. 对称二叉树，两两比较，将要比较的一起入队，没有啥花里胡哨的
7. 右视角看树就是层序遍历的简单应用，每一层取最右侧节点就行
