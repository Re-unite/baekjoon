const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCntList = null;
let noneSeeCnt = 0;
const noneListenList = [];
const resultList = [];

rl.on('line', function (line) {
  if (!inputCntList) {
    inputCntList = String(line).split(' ');
  } else {
    const noneListenListLength = Number(inputCntList[0]);
    const noneSeeLength = Number(inputCntList[1]);
    if (!(noneListenList.length === noneListenListLength)) {
      noneListenList.push(line);
    } else {
      const filter = noneListenList.filter((item) => item === line);
      if (filter.length > 0) {
        resultList.push(line);
      }
      noneSeeCnt++;

      if (noneSeeCnt === noneSeeLength) {
        resultList.sort();
        console.log(resultList.length);
        resultList.forEach((item) => console.log(item));
        rl.close();
      }
    }
  }
}).on('close', function () {
  process.exit();
});
