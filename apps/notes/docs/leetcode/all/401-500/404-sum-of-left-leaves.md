# [404. Sum Of Left Leaves](https://leetcode.cn/problems/sum-of-left-leaves/description/)

## Description

Given the root of a binary tree, return the sum of all left leaves.

A **leaf** is a node with **no children**. A left leaf is a leaf that is the left child of another node.

## 思路

较为简单的一道题，理解题意就可以解出来了，遍历所有节点找出左叶子节点，sum 一下

## TypeScript

```ts
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function isLeaf(node: TreeNode) {
  return !node.left && !node.right;
}

// 层序遍历
function sumOfLeftLeaves(root: TreeNode | null): number {
  const queue: TreeNode[] = [];
  let sum = 0;
  if (!root) return sum;
  queue.push(root);
  while (queue.length) {
    const front = queue.shift();
    if (front.left && isLeaf(front.left)) {
      sum += front.left.val;
    } else {
      front.left && queue.push(front.left);
    }
    front.right && queue.push(front.right);
  }
  return sum;
}
// 迭代
function sumOfLeftLeaves(root: TreeNode | null): number {
  const stack: TreeNode[] = [];
  let sum = 0;
  if (!root) return sum;
  stack.push(root);
  while (stack.length) {
    const top = stack.pop();
    if (top.left && isLeaf(top.left)) {
      sum += top.left.val;
    } else {
      top.left && stack.push(top.left);
    }
    top.right && stack.push(top.right);
  }
  return sum;
}
```

## C++

```ts
// 迭代
class Solution {
public:
    inline bool isLeaf(TreeNode* root) {
        return root->left == NULL && root->right == NULL;
    }

    int sumOfLeftLeaves(TreeNode* root) {
        stack<TreeNode*> st;
        int sum = 0;
        if (root == NULL) return sum;
        st.push(root);
        while(!st.empty()) {
            TreeNode* front = st.top();
            st.pop();
            if (front->left && isLeaf(front->left)) {
                sum += front->left->val;
            } else if (front->left) {
                st.push(front->left);
            }
            if (front->right) {
                st.push(front->right);
            }
        }
        return sum;
    }
};

// 递归
class Solution {
public:
    int sumOfLeftLeaves(TreeNode* root) {
        int sum = 0;
        sumLeft(root, sum, false);
        return sum;
    }
    void sumLeft(TreeNode* root, int& sum, bool flag) {
        if(!root->left && !root->right && flag) {
            sum += root->val;
        }
        if (root->left) sumLeft(root->left,sum,true);
        if(root->right) sumLeft(root->right,sum,false);
    }
};
```
