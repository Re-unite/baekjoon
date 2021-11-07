const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = 0;

rl.on('line', function (line) {
  if (cnt === 0) {
    cnt = Number(line);
  } else {
    solution(
      line
        .split(' ')
        .map((item) => Number(item))
        .sort((a, b) => a - b)
    );
  }
}).on('close', function () {
  process.exit();
});

const solution = (arr) => {
  const loopCnt = parseInt(cnt / 2);
  let min;

  if (cnt % 2 === 1) {
    // 운동기구의 갯수가 홀수
    min = arr[arr.length - 1];

    for (let i = 0; i < loopCnt; i++) {
      const sum = arr[i] + arr[arr.length - 2 - i];
      min = sum > min ? sum : min;
    }
  } else {
    // 운동기구의 갯수가 짝수
    for (let i = 0; i < loopCnt; i++) {
      const sum = arr[i] + arr[arr.length - 1 - i];

      if (i === 0) {
        min = sum;
      } else {
        min = sum > min ? sum : min;
      }
    }
  }

  console.log(min);
};
