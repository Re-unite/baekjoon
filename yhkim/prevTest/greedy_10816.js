const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 상근이가 가진 카드
let haveCards = [];
let haveCardSize = 0;
// 결과를 구해야하는 카드
let resultCards = [];
let resultCardSize = 0;

rl.on('line', function (line) {
  if (haveCardSize === 0) {
    haveCardSize = Number(line);
  } else if (haveCards.length === 0) {
    haveCards = line.split(' ');
  } else if (resultCardSize === 0) {
    resultCardSize = Number(line);
  } else {
    resultCards = line.split(' ');
    if (resultCards.length === resultCardSize) {
      solution(haveCards, resultCards);
      rl.close();
    }
  }
}).on('close', function () {
  process.exit();
});

function solution(haveCards, resultCards) {
  // 가진 카드 갯수 셋 생성
  const haveCardsData = getHaveCountData(haveCards);

  const resultCounts = [];
  // 각 카드 숫자 카운트
  for (const resultCard of resultCards) {
    resultCounts.push(haveCardsData[resultCard] ? haveCardsData[resultCard] : 0);
  }

  console.log(resultCounts.join(' '));
}

// 카드 셋 생성
const getHaveCountData = (haveCards) => {
  const haveCardsData = {};
  for (const haveCard of haveCards) {
    if (haveCardsData[haveCard]) {
      haveCardsData[haveCard] += 1;
    } else {
      haveCardsData[haveCard] = 1;
    }
  }

  return haveCardsData;
};
