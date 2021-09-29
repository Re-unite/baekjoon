const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let rollerCoasterCoordX = 0;
let rollerCoasterCoordY = 0;
let rollerCoasterCoords = [];

rl.on('line', function (line) {
  if (rollerCoasterCoordX === 0 || rollerCoasterCoordY === 0) {
    const coords = line.split(' ');
    rollerCoasterCoordX = Number(coords[0]);
    rollerCoasterCoordY = Number(coords[1]);
  } else if (rollerCoasterCoords.length !== rollerCoasterCoordY) {
    const enterCoords = line.split(' ');
    rollerCoasterCoords.push(enterCoords);

    if (rollerCoasterCoords.length === rollerCoasterCoordY) {
      return solution(rollerCoasterCoords, rollerCoasterCoordX, rollerCoasterCoordY);
    }
  }
}).on('close', function () {
  process.exit();
});

function solution(rollerCoasterCoords, rollerCoasterCoordX, rollerCoasterCoordY) {
  let result = '';

  if (rollerCoasterCoordX % 2 === 0 && rollerCoasterCoordY % 2 === 0) {
    let maxX = 0;
    for (let i = 0; rollerCoasterCoordX > i; i++) {
      maxX += Number(rollerCoasterCoords[rollerCoasterCoordY - 1][i]);
    }

    let maxY = 0;
    for (let i = 0; rollerCoasterCoordY > i; i++) {
      maxY += Number(rollerCoasterCoords[i][rollerCoasterCoordX - 1]);
    }

    if (maxX < maxY) {
      for (let i = 0; rollerCoasterCoords.length > i; i++) {
        if (rollerCoasterCoords.length - 1 === i) {
          break;
        }
        for (let j = 0; rollerCoasterCoords[j].length - 1 > j; j++) {
          if (i % 2 === 0) {
            result += 'R';
          } else {
            result += 'L';
          }
        }
        if (rollerCoasterCoords.length !== i) {
          result += 'D';
        }
      }
    } else {
      for (let i = 0; rollerCoasterCoords[0].length > i; i++) {
        if (rollerCoasterCoords[0].length - 1 === i) {
          break;
        }
        for (let j = 0; rollerCoasterCoords.length - 1 > j; j++) {
          if (i % 2 === 0) {
            result += 'D';
          } else {
            result += 'U';
          }
        }
        if (rollerCoasterCoords[0].length !== i) {
          result += 'R';
        }
      }
    }
  } else {
    if (rollerCoasterCoordX % 2 !== 0) {
      for (let i = 0; rollerCoasterCoords[0].length > i; i++) {
        for (let j = 0; rollerCoasterCoords.length - 1 > j; j++) {
          if (i % 2 === 0) {
            result += 'D';
          } else {
            result += 'U';
          }
        }
        if (rollerCoasterCoords[0].length - 1 !== i) {
          result += 'R';
        }
      }
    } else {
      for (let i = 0; rollerCoasterCoords.length > i; i++) {
        for (let j = 0; rollerCoasterCoords[i].length - 1 > j; j++) {
          if (i % 2 === 0) {
            result += 'R';
          } else {
            result += 'L';
          }
        }
        if (rollerCoasterCoords.length - 1 !== i) {
          result += 'D';
        }
      }
    }
  }

  console.log(result);
}
