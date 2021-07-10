const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputCnt = 0;
const inputData = [];

rl.on('line', function(line) {
  console.log(line);
  if (inputCnt === 0) {
      inputCnt = Number(line);
  } else {
    if (inputData.length !== inputCnt) {
      inputData.push(line);

      if (inputCnt === inputData.length) {
        solution(inputData);
        rl.close();
      }
    }
  }

}).on("close", function() {
  process.exit();
});

function solution(data) {
    console.log(data);
}

