# 39. Combination Sum

## [Leetcode](https://leetcode.cn/problems/combination-sum)

## Description

## 思路

简单回溯，排序后，记录回溯栈

## TypeScript

```ts
function combinationSum(candidates: number[], target: number): number[][] {
  const combinations: number[][] = [];
  const backtracking: number[] = [];
  candidates.sort((a, b) => a - b);
  const tracking = (start: number, t: number) => {
    for (let i = start; i < candidates.length; i++) {
      const curCandidate = candidates[i];
      const nextTarget = t - curCandidate;
      if (nextTarget === 0) {
        combinations.push([...backtracking, curCandidate]);
        return;
      }
      if (nextTarget < 0) return;
      backtracking.push(curCandidate);
      tracking(i, nextTarget);
      backtracking.pop();
    }
  };
  tracking(0, target);
  return combinations;
}
```

## C++

```c++

```
