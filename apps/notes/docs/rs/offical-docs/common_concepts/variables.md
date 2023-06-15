## variables

In Rust, you can declare an immutable variables with `let` keywords followed by the variable name and its value. Once declared, the value of the variable cannot be changed. For example:

```rust
fn main() {
  let x = 5;
}
```

If you want to change the value bound to `x` from `5` to `6`, you can add `mut` in front of the variable name to make it mutable. For instance:

```rust
fn main() {
  let mut x = 5;
  x = 6;
}
```

## Constants

Like immutable variables, _constants_ are values that are bound to a name and are not allowed to change. Meanwhile, there are a few difference between constants and variables.

First, no `mut`.

Constants can be declared in any scope, including the global scope, which makes them useful for values that many parts of code need to know about.

The last difference is that constants may be set only to a constant expression, not the result of a value that could only be computed at runtime.

Here's an example of a constant declaration:

```rust
const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;
```

## Shadowing

_first variable is shadowed by the second until either the second is shadowed or the scope ends_

```rust
fn main() {
  let x = 5;

  let x = x + 1;

  {
    let x = x * 2;
    println!("The value of x in the inner scope is: {x}");
  }

  println!("The value of x is: {x}");
}
```
