// tips < calcTip.length; tips++ // ! NOT SURE !

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log("🚀 ~ bills:", bills)
let tips = [];
let totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// for(let i = 0; i < bills.length; i++) { // My way to do it
// const tip = calcTip(bills[i]);
// const totals = bills[i] + tips;

// tips.push(tip);
// totals.push(totals);
// }

// Jonas solytion of challenge
for(let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
  }

  // Bonus challenge
const calcAverage = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    // sum = sum + arr[i];
    sum += arr[i];   
  }
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage([totals]));
console.log(calcAverage([tips]));