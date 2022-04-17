# Two Sum - 两数之和
## [Leetcode](https://leetcode.com/problems/two-sum/)

## Description
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Example
```markdown
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```
## 思路
遍历数组，在 map 表中寻找和当前数字相加之和的结果为 target 的另一半值，如果找到了，直接返回另一半值的下标和当前值的下标数组，如果找不到，将当前数字作为键名，下标作为值存入 map 表中

使用 JavaScript 的 some 遍历，题目中有说明只有确切的唯一值，所以找到这对值时直接终止循环，以节约用时（剪枝）。

## Code

```typescript
function twoSum(nums: number[], target: number): number[] {
  const m: Record<string, number> = {};
  const res = [];
  nums.some((num, index) => {
    const another = target - num;
    if (m[another] !== undefined) {
      res.push(m[another], index);
      return true
    }
    m[num] = index;
    return false;
  });
  return res;
};
```