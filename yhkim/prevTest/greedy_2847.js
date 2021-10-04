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
    }
  }
}).on('close', function () {
  process.exit();
});

function solution(levels) {
  let result = 0;
  let nextLevel = levels[0];
  for (let i = 1; i < levels.length; i++) {
    nextLevel = nextLevel - 1;

    // 다음 레벨의 점수보다 클 경우 그 차이 결과에 저장
    if (levels[i] - nextLevel > 0) {
      result += levels[i] - nextLevel;
    }
  }

  console.log(result);
}
