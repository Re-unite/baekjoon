const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let row;
let column;
let arr2d = [];

rl.on('line', function (line) {
  if (!row && !column) {
    const cntArr = line.split(' ');
    row = Number(cntArr[0]);
    column = Number(cntArr[1]);
  } else if (row - 1 > arr2d.length) {
    arr2d.push(line.split(' '));
  } else if (row - 1 === arr2d.length) {
    arr2d.push(line.split(' '));
    solution(row, column, arr2d);
  }
}).on('close', function () {
  process.exit();
});

const solution = (row, column, arr2d) => {
  let result = '';
  if (row % 2 === 1) {
    // 행의 수가 홀수
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        if (i % 2 === 0) {
          // 홀수 행

          result += 'R';

          if (j === column - 1) {
            result += 'D';
          }
        } else {
          // 짝수 행

          result += 'L';

          if (j === column - 1) {
            result += 'D';
          }
        }
      }
    }
  } else if (column % 2 === 1) {
    // 열의 수가 홀수
    for (let i = 0; i < column; i++) {
      for (let j = 0; j < row; j++) {
        if (i % 2 === 0) {
          // 홀수 열

          result += 'D';

          if (j === row - 1) {
            result += 'R';
          }
        } else {
          // 짝수 열

          result += 'U';

          if (j === row - 1) {
            result += 'R';
          }
        }
      }
    }
  } else {
    // 행, 열 모두 짝수
  }
};
