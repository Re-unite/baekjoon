const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(solution(Number(line)));
  rl.close();
}).on('close', function () {
  process.exit();
});

function solution(count) {
  if (count < 5) {
    if (count % 3 > 0) {
      return -1;
    }
  }

  if (count % 5 === 0) {
    return count / 5;
  }

  // 최대 5kg 봉지 수
  let maxFive = Math.floor(count / 5);
  let result = 0;
  while (true) {
    if (maxFive < 0) {
      result = -1;
      break;
    }
    // 남은 kg 계산
    const remainder = count - 5 * maxFive;

    // 남은 kg으로 3kg 갯수 파악
    if (remainder % 3 === 0) {
      result = remainder / 3 + maxFive;
      break;
    }
    maxFive--;
  }

  return result;
}
