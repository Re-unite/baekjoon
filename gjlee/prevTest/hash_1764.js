const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let notHeardCnt;
let notSeenCnt;
const notHeards = [];
const notSeens = [];

rl.on('line', function (line) {
  if (!notHeardCnt && !notSeenCnt) {
    const cntArr = line.split(' ');
    notHeardCnt = Number(cntArr[0]);
    notSeenCnt = Number(cntArr[1]);
  } else if (notHeards.length !== notHeardCnt) {
    notHeards.push(line);
  } else {
    notSeens.push(line);
    if (notSeens.length === notSeenCnt) {
      solution(notHeards, notSeens);
    }
  }
}).on('close', function () {
  process.exit();
});

const solution = (notHeards, notSeens) => {
  const nobodys = notHeards.filter((man) => notSeens.includes(man));
  nobodys.sort();
  nobodys.unshift(nobodys.length);

  nobodys.forEach((element) => {
    console.log(element);
  });
};
