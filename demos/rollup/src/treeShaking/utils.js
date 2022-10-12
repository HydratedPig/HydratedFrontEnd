const __DEV__ = false;

export function foo(obj) {
  obj && obj.foo;
}

export function bar(obj) {
  obj && obj.bar;
}

export function foo2(obj) {
  // dead code
  if (__DEV__) {
    console.log(123);
  }
  obj && obj.foo2;
  console.log(345);
}
