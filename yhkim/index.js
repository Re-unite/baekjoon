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

function solution(polyomino) {
  let result = polyomino.replace(/XXXX/g, 'AAAA');
  result = result.replace(/XX/g, 'BB');

  if (result.includes('X')) {
    result = -1;
  }

  console.log(result);
}
