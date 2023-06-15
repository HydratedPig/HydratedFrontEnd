# Writing and running a rust program

```rust title=hello-world.rs
fn main() {
    println!("Hello, world!");
}
```

Save the file. Then enter the following commands to compile and run the file.

```shell
$ rustc hello_world.rs
$ ./hello_world.rs
Hello, world!
```

# Anatomy of a Rust Program

First piece of the puzzle

```rust
fn main() {

}
```

The `main` function is always the first code that runs in every executable Rust program. Here, it has no parameters and returns nothing.

The function body is wrapped in curly brackets `{}`. A good style in rust is putting a space between curly bracket and the function declaration.

Here is the body code.

```rust
    println!("Hello, world!");
```

1. Indent with four spaces, not a tab.
2. `println!` calls a Rust macro. You can give more details in Chapter 19.
3. We pass the `"Hello, world!"` string as an argument to `println!`, and the string is printed to the screen.
4. The semicolon at the end of the line indicates that this expression is over and the next one is ready to begin.

# Compiling and Running Are Separate Steps

1. Compile

```bash
$ rustc hello_world.rs
```

2. Execute

```bash
$ ./hello_world # or .\hello_world.exe on windows
```
