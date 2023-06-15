use std::io;
// TODO: how does rust's package run?
use rand::Rng;
use std::cmp::Ordering::Less;
use std::cmp::Ordering::Greater;
use std::cmp::Ordering::Equal;

fn main() {
  println!("Guessing Number!");
  let guess_number = rand::thread_rng().gen_range(1..=10);

  loop {
    println!("Please input your number");
    let mut guess = String::new();
    io::stdin().read_line(&mut guess).expect("Failed to read line");

    let guess:u32 = match guess.trim().parse() {
      Ok(num) => num,
      Err(_) => continue,
    };

    println!("Your guessed: {guess}");

    match guess.cmp(&guess_number) {
      Less => println!("Too small!"),
      Greater => println!("Too big!"),
      Equal => {
        println!("You win!");
        break;
      }
    }

  }
}
