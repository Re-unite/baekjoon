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

const solution = (board) => {
  let result = '';
  const xList = board.split('.');
  const oddNumList = xList.filter((x) => x !== '' && x.length % 2 === 1);

  if (oddNumList.length > 0) {
    result = -1;
  } else {
    const polyList = xList.map((x) => {
      if (x === '') {
        return x;
      } else {
        let poly = '';
        const cnt = parseInt(x.length / 4);

        for (let i = 0; i < cnt; i++) {
          poly += 'AAAA';
        }

        if (x.length % 4 > 0) {
          poly += 'BB';
        }
        return poly;
      }
    });

    result = polyList.join('.');
  }

  console.log(result);
};
