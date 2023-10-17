# 131. Palindrome Partitioning

## [Leetcode](https://leetcode.cn/problems/palindrome-partitioning)

## Description

## 思路

画图，判断回溯逻辑

## TypeScript

```ts
function strIsPalindrome(s: string) {
  let pre = 0;
  let last = s.length - 1;
  while (pre < last) {
    if (s[pre] !== s[last]) {
      return false;
    }
    pre++;
    last--;
  }
  return true;
}

function partition(s: string): string[][] {
  const palindromes: string[][] = [];
  const backtracking: string[] = [];
  const tracking = (start: number) => {
    if (start === s.length) {
      palindromes.push([...backtracking]);
      return;
    }
    for (let j = start + 1; j <= s.length; j++) {
      const substr = s.slice(start, j);
      const isPalindrome = strIsPalindrome(substr);
      if (!isPalindrome) continue;
      backtracking.push(substr);
      tracking(j);
      backtracking.pop();
    }
  };
  tracking(0);
  return palindromes;
}
```

## C++

```c++

```
