const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0;
let toppingCnt = 0;

const calorie = {
  douth: 0,
  toppings: [],
};

const price = {
  dough: 0,
  topping: 0,
};

rl.on('line', function (line) {
  if (lineCnt === 0) {
    toppingCnt = Number(line);
  } else if (lineCnt === 1) {
    const prices = line.split(' ');
    price.dough = Number(prices[0]);
    price.topping = Number(prices[1]);
  } else if (lineCnt === 2) {
    calorie.dough = Number(line);
  } else {
    calorie.toppings.push(Number(line));

    if (toppingCnt === calorie.toppings.length) {
      solution(calorie, price);
      rl.close();
    }
  }

  lineCnt++;
}).on('close', function () {
  process.exit();
});

const solution = (calorie, price) => {
  calorie.toppings = getDescSortArr(calorie.toppings);

  let result = getCaloriePriceRatio(calorie.dough, [], price.dough);

  for (let i = 0; i < calorie.toppings.length; i++) {
    const pizzaPrice = price.dough + price.topping * (i + 1);
    const calorieRatio = getCaloriePriceRatio(
      calorie.dough,
      calorie.toppings.slice(0, i + 1),
      pizzaPrice
    );

    result = result > calorieRatio ? result : calorieRatio;
  }

  console.log(result);
  return result;
};

const getCaloriePriceRatio = (douth, toppings, price) => {
  let calorie = douth;
  for (let i = 0; i < toppings.length; i++) {
    calorie += toppings[i];
  }

  return Math.floor(calorie / price);
};

const getDescSortArr = (array) => {
  const result = [...array];

  return result.sort((a, b) => b - a);
};
