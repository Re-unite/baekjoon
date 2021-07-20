const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  solution(line);
}).on('close', function () {
  process.exit();
});

const solution = (str) => {
  const getNewStr = (param) => {
    let newStr = '';
    let cnt = 0;

    for (let i = 0; i < param.length; i++) {
      const checkStr = param.substring(i, i + 4);

      if (checkStr === 'PPAP') {
        i = i + 3;
        cnt++;
        newStr = newStr + 'P';
      } else {
        newStr = newStr + param[i];
      }
    }

    return {
      newStr: newStr,
      cnt: cnt,
    };
  };

  let result = 'NP';
  let newStr;
  let obj = {};
  let cnt = 1; // 무조건 한번은 돌아야 하기 때문에
  let idx = 0;

  while (cnt != 0) {
    if (idx == 0) {
      obj = getNewStr(str);
    } else {
      obj = getNewStr(newStr);
    }
    newStr = obj.newStr;
    cnt = obj.cnt;
    idx++;
  }

  if (obj.newStr === 'P') {
    result = 'PPAP';
  }

  console.log(result);
};
