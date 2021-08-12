const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  solution(line);
}).on('close', function () {
  process.exit();
});

const solution = (num) => {};
