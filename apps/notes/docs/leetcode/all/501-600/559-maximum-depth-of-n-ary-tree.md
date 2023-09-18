# [559. Maximum Depth of N-ary Tree](https://leetcode.cn/problems/maximum-depth-of-n-ary-tree/description/)

## 思路

第一时间想到的就是层序遍历了，毕竟一层就是一个深度，当然也可以递归深度遍历，最深的就是 maximum depth of n-ary Tree

```ts
interface DepthNode {
  val: number;
  children: DepthNode[];
}

// 层序遍历
function maxDepth(root: DepthNode | null): number {
  const queue: DepthNode[] = [];
  let depth = 0;
  if (!root) return depth;
  queue.push(root);
  while (queue.length) {
    const size = queue.length;
    depth++;
    for (let i = 0; i < size; i++) {
      const firstNode = queue.shift();
      firstNode.children?.map((child) => queue.push(child));
    }
  }
  return depth;
}

// 递归
function maxDepth(root: DepthNode | null): number {
  let depth = 0;
  if (!root) return depth;
  depth++;
  if (!root.children?.length) return depth;
  let max = 0;
  for (let i = 0; i < root.children.length; i++) {
    max = Math.max(maxDepth(root.children[i]), max);
  }
  return depth + max;
}
```

```c++
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val) {
        val = _val;
    }

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
class Solution {
public:
    // 递归
    int maxDepth(Node* root) {
        if (root == NULL) return 0;
        int rootDepth = 0;
        for(int i = 0; i < root->children.size(); i++) {
            rootDepth = max(maxDepth(root->children[i]), rootDepth);
        }
        return rootDepth + 1;
    }
    // 迭代
    int maxDepth(Node* root) {
        queue<Node*> que;
        int depth = 0;
        if (root == NULL) return depth;
        que.push(root);
        while(!que.empty()) {
            int size = que.size();
            depth++;
            for (int i = 0; i < size; i++) {
                Node* firstNode = que.front();
                que.pop();
                for(int j = 0; j < firstNode->children.size();j++) {
                    if (firstNode->children[j]) que.push(firstNode->children[j]);
                }
            }
        }
        return depth;
    }
};
```
