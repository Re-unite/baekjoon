const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const caseList = [];

rl.on('line', function (line) {
  if (line === '0 0 0') {
    solution();
  } else {
    const splited = line.split(' ');
    caseList.push({
      l: Number(splited[0]),
      p: Number(splited[1]),
      v: Number(splited[2]),
    });
  }
}).on('close', function () {
  process.exit();
});

const solution = () => {
  caseList.forEach((obj, idx) => {
    const { l, p, v } = obj;

    const quotient = parseInt(v / p) * l;
    const remainder = v % p > l ? l : v % p; // 몫을 제하고 남은 날짜가 l보다 클 땐 l만큼, 작다면 나머지 전부

    console.log(`Case ${idx + 1}: ${quotient + remainder}`);
  });
};
