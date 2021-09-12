const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let map1Size = 0;
let list2Len = 0;
const map1 = new Map();
const list2 = [];

// INPUT 알맞게 조정
rl.on('line', function (line) {
  if (map1Size + list2Len === 0) {
    map1Size = Number(line.split(' ')[0]);
    list2Len = Number(line.split(' ')[1]);
  } else {
    if (map1.size < map1Size) {
      map1.set(line, line);
    } else {
      list2.push(line);

      if (list2.length === list2Len) {
        solution(map1, list2);
        rl.close();
      }
    }
  }
}).on('close', function () {
  process.exit();
});

function solution(map1, list2) {
  const result = [];

  list2.forEach((item) => {
    if (map1.has(item)) {
      result.push(item);
    }
  });

  result.sort();
  console.log(result.length);
  result.forEach((item) => console.log(item));
}
