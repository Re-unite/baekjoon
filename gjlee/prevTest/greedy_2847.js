const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let levelCnt = -1;
let scoreList = [];

rl.on('line', function (line) {
  if (levelCnt === -1) {
    levelCnt = Number(line);
  } else {
    scoreList.push(Number(line));

    if (levelCnt === 1) {
      solution();
    } else {
      levelCnt--;
    }
  }
}).on('close', function () {
  process.exit();
});

const solution = () => {
  const len = scoreList.length;
  let result = 0;
  let currScore;
  let prevScore;
  let diff;

  for (let i = len - 1; i > 0; i--) {
    currScore = scoreList[i]; // 현재 스코어
    prevScore = scoreList[i - 1]; // 이전 스코어

    if (prevScore > currScore) {
      // 이전 스코어가 현재 스코어 보다 큰 경우
      diff = (prevScore % currScore) + 1;
      scoreList[i - 1] = prevScore - diff;
      result += diff;
    } else if (prevScore === currScore) {
      // 이전 스코어와 현재 스코어가 같은 경우
      scoreList[i - 1] = prevScore - 1;
      result++;
    }

    // 이전 스코어가 현재 스코어보다 작은 경우 (pass)
  }

  // 초기화
  levelCnt = -1;
  scoreList = [];

  console.log(result);
};
