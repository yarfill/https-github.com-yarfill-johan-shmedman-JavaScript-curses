
// const tip15 = 15/100; //0.15
// const tip20 = 20/100; //0.2
// const bill1 = 125;
// const bill2 = 555;
// const bill3 = 44;

// let currentTip;

// function calcTip(bill) {
//   const isInRange = bill >= 50 && bill <= 300; 

//   currentTip = isInRange ? tip15 : tip20;

//   totalTip = currentTip * bill;
//   currentBill = totalTip + bill;

//   return totalTip;
// }

// function calcTotal(bill) {
//   const isInRange = bill >= 50 && bill <= 300; 

//   currentTip = isInRange ? tip15 : tip20;

//   currentBill = totalTip + bill;
//   return currentBill;
// }


// // calcTip(bill1);
// // calcTip(bill2);
// // calcTip(bill3);

// const bills = new Array(bill1, bill2, bill3);
// console.log("🚀 ~ bills:", bills)
// const tips = new Array(calcTip(bill1), calcTip(bill2), calcTip(bill3));
// console.log("🚀 ~ tips:", tips)
// const totals = new Array(calcTotal(bill1), calcTotal(bill2), calcTotal(bill3));
// console.log("🚀 ~ totals:", totals)

//Johan solution

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// console.log("🚀 ~ bills:", bills)
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log("🚀 ~ tips:", tips)
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log("🚀 ~ totals:", totals)

//////!!!!!\\\\\\
const realYear = 2025;

const yearsMax = realYear - 1989;
const yearsVika = realYear - 1989;

//TODO - Use the argument
//TODO - console.log the returned value from the function call
const olderlAge = function (ageStatus) {
 const overalOlder = yearsVika - yearsMax;
  if (yearsMax >= yearsVika) {
    console.log(`Vika ${yearsVika} years you yunger than Max on ${overalOlder} because he has ${yearsMax} years old!`);
  }else if(yearsMax <= yearsVika) {
    console.log(`Max ${yearsMax} years you yunger than Vika on ${overalOlder} years because she has ${yearsVika} years old!`);
  }else if(yearsMax === yearsVika) {
    console.log('Every body old =)');
  }  
  return ageStatus; 
}
 olderlAge();

 //TODO - Do a function which is NOT a CONST
 //TODO - return and consoleloog results

 //TODO - BONUS - arrow function
 //TODO - BONUS - arrow function console log return 