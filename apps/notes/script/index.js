const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  // rl.on('line', (line) => {
  //   console.log('here is line', line);
  // });
  const args = process.argv;
  rl.write('arguments are' + args.join(',') + '---' + process.argv0);
}

main();
