// const bill = 430;
// const bill = 40;

// between 50/ 300 = 15 otherwise 20

// const tip20 = 20;

const bill = 275;
const tip15 = 15/100; //0.15
const tip20 = 20/100; //0.2
const isInRange = bill >= 50 && bill <= 300;

let currentTip;

currentTip = isInRange ? tip15 : tip20;

console.log((currentTip * bill) + bill);