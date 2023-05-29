# Hello, Cargo!

Cargo is Rust's build system and package manager. We can check whether Cargo is installed by entering the following in my terminal:

```shell
$ cargo --version
```

## Creating a Project with Cargo

I created a hello_cargo in my demos. And it didn't initialize Git along with a `.gitignore` file because it was run in a repository that already exists in Git.

```shell
$ cargo new hello_cargo
$ cd hello_cargo
```

Then I can execute the command in my terminal.

```shell
$ cd hello_cargo
$ cat Cargo.toml
```

Filename: Cargo.toml

```ini
[package]
name = "hello_cargo"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
```

This file is in the TOML(Tom' Obvious, Minimal Language) format, which is Cargo's configuration format.

`[package]`, is a section heading that indicates that the following statements a configuring a package.

`[dependencies]`, is the start of a section for me to list any of my project's dependencies.

The official suggestion is that the codes should be placed in the src directory and that the top-level project directory should only contain README files, license information, configuration files, and anything else not related to my code.

## Building and Running a Cargo Project

```shell
$ cargo build
   Compiling hello_cargo v0.1.0 (file:///projects/hello_cargo)
    Finished dev [unoptimized + debuginfo] target(s) in 0.52 secs
```

The executable file is created in `target/debug/hello_cargo` instead of the current `src` directory.

The file named `Cargo.lock` is created at the top-level to keep track of the exact versions of dependencies in my project.

```shell
$ cargo run
   Compiling hello_cargo v0.1.0 (file:///projects/hello_cargo)
    Finished dev [unoptimized + debuginfo] target(s) in 0.33 secs
     Running `target/debug/hello_cargo`
Hello, world!
```

Using `cargo run` is convenient than having to remember to run `cargo build` and the use the whole path to the binary, so most developers use `cargo run`.

Meanwhile we can use a command called `cargo check` to check if our code compiles quickly without producing an executable.

```shell
$ cargo check
   Checking hello_cargo v0.1.0 (file:///projects/hello_cargo)
    Finished dev [unoptimized + debuginfo] target(s) in 0.32 secs
```
