# 17. Letter Combinations of a Phone Number

## [Leetcode](https://leetcode.cn/problems/letter-combinations-of-a-phone-number)

## Description

## 思路

简单回溯，记录一个回溯栈就好了

## TypeScript

```ts
const combinationMap = new Map([
  [1, []],
  [2, ["a", "b", "c"]],
  [3, ["d", "e", "f"]],
  [4, ["g", "h", "i"]],
  [5, ["j", "k", "l"]],
  [6, ["m", "n", "o"]],
  [7, ["p", "q", "r", "s"]],
  [8, ["t", "u", "v"]],
  [9, ["w", "x", "y", "z"]],
]);
function letterCombinations(digits: string): string[] {
  const combinations = [];
  let backtracking = [];
  const tracking = (digit: string) => {
    if (!digit) {
      const res = backtracking.join("");
      res && combinations.push(res);
      return;
    }
    const char = Number(digit[0]);
    const charArr = combinationMap.get(char);
    for (let i of charArr) {
      backtracking.push(i);
      tracking(digit.slice(1));
      backtracking.pop();
    }
  };
  tracking(digits);
  return combinations;
}
```

## C++

```c++

```
