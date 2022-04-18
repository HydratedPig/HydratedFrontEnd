# Add Two Numbers - 两数相加
## [Leetcode](https://leetcode-cn.com/problems/add-two-numbers/)

## Description
You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

## Example
<img src="https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg" style="width: 483px; height: 342px"/>
```markdown
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

## 思路
题目中给定的是两个非空链表，每个链表代表一个逆序的数字，一个节点代表一个数字，需要求出两数之和，且按照逆序链表返回。
思路很简单，一个是直接求和，然后逆序回去，不过这样效率有点慢，我们直接采用十进制逢十进一的思路，```carry``` 记录进位数（需要进位值为 1，否则为 0），同时遍历两个链表，当前位 sum 为 **v1 + v2 + carry**，根据 sum 生成当前位数字以及下一次进位数 ```carry```，直到两个链表都遍历完了为止。之后再判断 ```carry``` 是否为 1 如果是，则需要再一次进位（```new ListNode(carry)```）。

## Code

```typescript
function getVal(list: ListNode | null) {
  return list?.val || 0
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const l3 = new ListNode();
  let p = l3;
  let carry = 0;
  while(l1 || l2) {
    const v1 = getVal(l1);
    const v2 = getVal(l2);
    const sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    p.next = new ListNode(sum % 10);
    p = p.next;
    l1 = l1?.next;
    l2 = l2?.next;
  } 
  if (carry) {
    p.next = new ListNode(carry)
  }
  return l3.next;
};
```

## 补充
上面说的[数字相加再逆序](#思路)是我疏忽了，忘记考虑大数相加的问题了，看了[评论区](https://leetcode-cn.com/problems/add-two-numbers/comments/)被啪啪啪打脸