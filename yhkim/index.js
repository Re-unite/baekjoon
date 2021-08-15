const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let hearPersonCount = 0;
let sayPersonCount = 0;
const hearPersons = [];
const sayPersons = [];

rl.on('line', function (line) {
  if (hearPersonCount === 0 || sayPersonCount === 0) {
    const hearSayCount = line.split(' ');
    hearPersonCount = Number(hearSayCount[0]);
    sayPersonCount = Number(hearSayCount[1]);
  } else if (hearPersons.length !== hearPersonCount) {
    hearPersons.push(line);
  } else {
    sayPersons.push(line);
    if (sayPersons.length === sayPersonCount) {
      solution(hearPersons, sayPersons);
    }
  }
}).on('close', function () {
  process.exit();
});

function solution(hearPersons, sayPersons) {
  // 듣도 보도 못한 사람 정렬 배열 생성
  const hearSaytPersons = [...hearPersons, ...sayPersons];
  hearSaytPersons.sort();
  const hearSaySamePersons = [];

  // 정렬 기준 같은 단어 배열 생성
  for (let i = 0; hearSaytPersons.length - 1 > i; i++) {
    if (hearSaytPersons[i] === hearSaytPersons[i + 1]) {
      hearSaySamePersons.push(hearSaytPersons[i]);
    }
  }

  console.log(hearSaySamePersons.length);
  hearSaySamePersons.forEach((hearSayPerson) => {
    console.log(hearSayPerson);
  });
}
