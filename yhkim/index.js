const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let levels = [];

rl.on('line', function (line) {
  const input = Number(line);
  if (count === 0) {
    count = input;
  } else {
    levels.push(input);
    if (levels.length === count) {
      solution(levels.reverse());
      rl.close();
    }
  }
}).on('close', function () {
  process.exit();
});

function solution(levels) {
  let result = 0;
  let prevLevel = levels[0];
  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - prevLevel;
    if (diff >= 0) {
      result += diff + 1;
      prevLevel = levels[i] - diff - 1;
    } else {
      prevLevel = levels[i];
    }
  }

  console.log(result);
}
