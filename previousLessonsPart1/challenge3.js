// const scoreDolphins = (96  + 108  + 89) / 3; 
// const scoreKoalas = (88 + 91  + 110) / 3;

// if(scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
//  } else if(scoreDolphins < scoreKoalas) {
//   console.log("Koalas win the trophy");
//  } else if(scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy");
// }

const scoreDolphins = (97 + 112 + 101) / 3; 
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
 } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
 } else if (scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100) {
  console.log("Both win the trophy");
} else {
  console.log(`Nobody win's`);
}