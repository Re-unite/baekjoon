const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCnt = 0;
const inputData = [];

// INPUT 알맞게 조정
rl.on('line', function (line) {
  if (inputCnt === 0) {
    inputCnt = Number(line);
  } else {
    if (inputData.length !== inputCnt) {
      inputData.push(Number(line));

      if (inputCnt === inputData.length) {
        solution(inputData);
        rl.close();
      }
    }
  }
}).on('close', function () {
  process.exit();
});

function solution(data) {
  const length = data.length;
  let count = 0;
  for (let i = length - 2; i >= 0; i--) {
    if (data[i] >= data[i + 1]) {
      const value = data[i] - data[i + 1] + 1;
      count += value;
      data[i] = data[i] - value;
    }
  }

  console.log(count);
}
