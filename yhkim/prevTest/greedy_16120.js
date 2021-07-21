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

const solution = (ppapStr) => {
  if (ppapStr === 'PPAP' || ppapStr === 'P') {
    console.log('PPAP');
    return;
  }

  const stack = [];
  let result = 'NP';

  for (let i = 0; i < ppapStr.length; i++) {
    let temp = ppapStr[i];
    if (temp == 'P') stack.push('P');
    else {
      if (stack.length >= 2 && i < ppapStr.length - 1 && ppapStr[i + 1] == 'P') {
        stack.pop();
        stack.pop();
      } else {
        console.log('NP');
        return;
      }
    }
  }

  result = stack.length === 1 ? 'PPAP' : 'NP';
  console.log(result);
};
