const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const [ball, basket] = line.split(' ');
  solution(Number(ball), Number(basket));
}).on('close', function () {
  process.exit();
});

function solution(ball, basket) {
  let result = 0;
  const minCount = ((basket + 1) * basket) / 2;
  // 최소 공의 갯수가 안될경우
  if (minCount > ball) {
    result = -1;
    // 남은 공의 갯수가 바구니와 수와 일치 할 경우
  } else if ((minCount - ball) % basket === 0) {
    result = basket - 1;
  } else {
    result = basket;
  }

  console.log(result);
}
