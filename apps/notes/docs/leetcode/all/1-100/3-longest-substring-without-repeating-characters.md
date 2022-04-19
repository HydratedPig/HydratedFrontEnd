# Longest Substring Without Repeating Characters - 无重复字符的最长子串
## [Leetcode](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

## Description
Given a string s, find the length of the longest substring without repeating characters.

## Example

```markdown
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

## 思路
滑动窗口，一开始被局限住思维了，固定的认为 ```str.indexOf(char)```的效率不是很高，就另辟蹊径，然后各种边界考虑错误...
标准解法是用滑动窗口，记录子串左侧和右侧的 index ，判断右侧字符和子串是否有重复字符，如果没有子串加一个字符，并更新子串最大长度；若有重复字符，记录重复位置 ```repeat```，left 指针指向 ```repeat``` 下一个字符，更新子串为 ```s.substring(left, right + 1)```
我用的是另外一个方法，也是滑动窗口，但是记录的不是子串了，判断右侧字符与是否在 map 中出现，如果没有子串加一个字符，并更新子串最大长度；若有重复字符，记录重复位置 ```repeat```，left 指针指向 ```repeat``` 下一个字符，最大长度为 ```Math.max(max, s.substring(left, right + 1).length)```。更新 map 表。

## Code

```typescript
function lengthOfLongestSubstring(s: string): number {
  const m: Map<string, number> = new Map();
  let max = 0;
  for (let left = 0, right = 0;right < s.length; right++) {
    const char = s[right];
    const repeat = m.get(char);
    if (repeat >= left) {
      left = repeat + 1;
    }
    m.set(char, right);
    max = Math.max(max, s.substring(left, right + 1).length)
  }
  return max;
};
```

## 其他
字符位置和日期加减法一直是弱项，老是不知道该不该加 1 ...这题因为这个边界条件耽误有点久