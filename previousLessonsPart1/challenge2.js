// Challenge 1
//Step 1 
const massMark = 78;
const heightMark = 1.95;

const massJohn = 92;
const heightJohn = 1.69;

//Step 2
let BMIMark = Math.round(massMark / (heightMark ** 2 ));
let BMIJohn = Math.round(massJohn / (heightJohn ** 2 ));

//Step 3
 console.log("bmi mark -", BMIMark);
 console.log("bmi john -", BMIJohn);
 
 //Step 4
 let HigherBMI = BMIMark < BMIJohn;
 console.log(HigherBMI);

 // Challenge 2 continie with challenge 1 
 let BMI;

 if (BMIMark > BMIJohn) {
  BMI = `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`;
 } else {
  BMI = "Mark's BMI " + BMIMark + " is higher than John's " + BMIJohn;
 }
 
 console.log(BMI);