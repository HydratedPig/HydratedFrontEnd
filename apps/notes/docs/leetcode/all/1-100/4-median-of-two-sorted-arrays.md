# Median of Two Sorted Arrays - 寻找两个正序数组的中位数
## [Leetcode](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/)

## Description
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

## Example

```markdown
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

## 思路
几个官方题解我都没想到（狗头），只会写这个 O(m+n)复杂度的东西...献丑了，贴下代码，这有点偏数学知识了

## Code

```typescript
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  /**
  * 分奇偶讨论
  * 1. mid 为奇数，计数器 c 所在位置就是 median
  * 2. mid 为偶数，计数器 c 所在数字以及它前面一个数字的平均数为 median
   */
  let i1 = 0;
  let i2 = 0;
  const flag = (nums1.length + nums2.length)%2
  const mid = Math.floor((nums1.length + nums2.length)/2);
  let t1 = -Infinity;
  let t2 = -Infinity;
  for (let c = 0; c <= mid; c++) {
    const n1 = nums1[i1];
    const n2 = nums2[i2];
    t1 = t2;
    if (n1 <= n2 || n2 === undefined) {
      i1++;
      t2 = n1;
    } else if(n2 < n1 || n1 === undefined) {
      i2++;
      t2 = n2;
    }
  }

  if (flag === 1) {
    return t2;
  } else {
    return (t1 + t2)/2
  }
};
```