const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCnt = 1;
const inputData = [];

// INPUT 알맞게 조정
rl.on('line', function (line) {
  console.log(line);
  if (inputCnt === 0) {
    inputCnt = Number(line);
  } else {
    if (inputData.length !== inputCnt) {
      inputData.push(line);

      if (inputCnt === inputData.length) {
        const result = solution(inputData[0].split(' '));
        console.log(result);
        rl.close();
      }
    }
  }
}).on('close', function () {
  process.exit();
});

function solution(data) {
  const n = Number(data[0]);
  const k = Number(data[1]);

  if (validate(n, k)) {
    if (n % k === 0) {
      return Math.floor(k / 2) * 2;
    } else {
      return Math.floor(k / 2) * 2 + 1;
    }
  } else {
    return -1;
  }
}

function validate(n, k) {
  return n >= (k * (k + 1)) / 2;
}
