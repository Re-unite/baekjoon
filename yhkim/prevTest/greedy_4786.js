const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 1;

rl.on('line', function (line) {
  if (line === '0 0 0') {
    rl.close();
  } else {
    solution(line.split(' '), count);
    count++;
  }
}).on('close', function () {
  process.exit();
});

function solution(dayCampings, count) {
  const campingWorking = Number(dayCampings[0]);
  const campingPossibleWorking = Number(dayCampings[1]);
  const userVacation = Number(dayCampings[2]);

  // 사용자 휴가 기간 동안 가능
  const possibleWorking = Math.floor(userVacation / campingPossibleWorking) * campingWorking;
  // 남은 사용자 휴가
  const remainderWorking = userVacation % campingPossibleWorking;

  // 남은 휴가가 없을 경우
  if (remainderWorking === 0) {
    console.log(`Case ${count}: ${possibleWorking}`);
    return;
  }

  // 남은 휴가와 가능한 캠핑 일수 계산
  if (remainderWorking < campingWorking) {
    console.log(`Case ${count}: ${possibleWorking + remainderWorking}`);
  } else {
    console.log(`Case ${count}: ${possibleWorking + campingWorking}`);
  }
}
