const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCntList = null;
const list1 = [];
const list2 = [];

// INPUT 알맞게 조정
rl.on('line', function (line) {
  if (!inputCntList) {
    inputCntList = line.split(' ').map((item) => Number(item));
  } else {
    if (list1.length < inputCntList[0]) {
      list1.push(line);
    } else {
      list2.push(line);

      if (list2.length === inputCntList[1]) {
        solution(list1, list2);
        rl.close();
      }
    }
  }
}).on('close', function () {
  process.exit();
});

function solution(list1, list2) {
  const result = [];
  const dictionary = new Map();

  list1.forEach((item) => {
    const firstWord = item.substring(0, 1);
    if (dictionary.has(firstWord)) {
      dictionary.set(firstWord, [...dictionary.get(firstWord), item]);
    } else {
      dictionary.set(firstWord, [item]);
    }
  });

  list2.forEach((item) => {
    const firstWord = item.substring(0, 1);
    if (dictionary.has(firstWord)) {
      if (dictionary.get(firstWord).filter((word) => word === item).length > 0) {
        result.push(item);
      }
    }
  });

  result.sort();
  console.log(result.length);
  result.forEach((item) => console.log(item));
}
