# 40. Combination Sum II

## [Leetcode](https://leetcode.cn/problems/combination-sum-ii)

## Description

## 思路

简单回溯，排序后，记录回溯栈，注意跳过重复数字

## TypeScript

```ts
function combinationSum2(candidates: number[], target: number): number[][] {
  const combinations: number[][] = [];
  const backtracking: number[] = [];
  candidates.sort((a, b) => a - b);
  const tracking = (start: number, t: number) => {
    for (let i = start; i < candidates.length; ) {
      const candidate = candidates[i];
      const nextTarget = t - candidate;
      if (nextTarget === 0) {
        combinations.push([...backtracking, candidate]);
        return;
      }
      if (nextTarget < 0) return;
      backtracking.push(candidate);
      tracking(i + 1, nextTarget);
      backtracking.pop();
      while (candidate === candidates[i]) {
        i++;
      }
    }
  };
  tracking(0, target);
  return combinations;
}
```

## C++

```c++

```
