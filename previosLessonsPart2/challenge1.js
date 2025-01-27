const calcAverage = (score) => (score) / 3; // D=(44 + 23 + 71) / 3 // K=(65 + 54 + 49) / 3

// const scoreDolphins = calcAverage(44, 23, 71);
const dolphinsSeasonOne = 44 + 23 + 71;
const dolphinsSeasonTwo = calcAverage(85 + 54 + 41);

const koalasSeasonOne = 65 + 54 + 49;
const koalasSeasonTwo = calcAverage(23 + 34 + 27);

const scoreDolphins = dolphinsSeasonOne + dolphinsSeasonTwo;
const avgDolphins = calcAverage(scoreDolphins);
console.log("🚀 ~ avgDolphins:", avgDolphins)

const scoreKoalas = koalasSeasonOne + koalasSeasonTwo;
const avgKoalas = calcAverage(scoreKoalas);
console.log("🚀 ~ avgKoalas:", avgKoalas)

function checkWinner(avgDolphins, avgKoalas) {

  if (avgKoalas > avgDolphins) {
    console.log(`Koalas win the game!! ${avgKoalas}`);
  } else if(avgDolphins > avgKoalas) {
    console.log(`Dolphins win the game!! ${avgDolphins}`);
  } else{
    console.log('Nobody win xD');
  }
}

checkWinner(avgDolphins, avgKoalas);