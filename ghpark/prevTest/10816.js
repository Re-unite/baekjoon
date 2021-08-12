const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCnt = 4;
const inputData = [];

// INPUT 알맞게 조정
rl.on('line', function (line) {
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
}).on('close', function () {
  process.exit();
});

function solution(data) {
  const myCardList = data[1].split(' ');
  const cardList = data[3].split(' ');

  const myCardSet = new Set(myCardList);
  const myCardMap = new Map();
  myCardList.forEach((item) => {
    if (myCardSet.has(item)) {
      myCardMap.set(item, myCardMap.get(item) ? myCardMap.get(item) + 1 : 1);
    }
  });

  const result = cardList.map((item) => {
    if (myCardSet.has(item)) {
      return myCardMap.get(item);
    } else {
      return 0;
    }
  });

  console.log(result.join(' '));
}
