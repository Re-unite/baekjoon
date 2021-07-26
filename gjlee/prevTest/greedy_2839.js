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

const solution = (num) => {
  let result = -1;

  if (num == 3) {
    result = 1;
  } else if (num >= 5 && num <= 5000) {
    const len = num / 5;
    let target = -1;

    for (let idx = 0; idx <= len; idx++) {
      let n;

      if (idx === 0) {
        n = 0;
      } else {
        n = 5 * idx;
      }

      const diffNum = num - n;

      if (diffNum % 3 === 0) {
        target = idx + diffNum / 3;
      }

      if (target != -1 && (result == -1 || (result != -1 && target < result))) {
        result = target;
      }
    }
  }

  console.log(result);
};
