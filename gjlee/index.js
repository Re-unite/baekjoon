const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {}).on('close', function () {
  process.exit();
});

const solution = (calorie, price) => {
  const result = '결과값';
  console.log(result);
};
