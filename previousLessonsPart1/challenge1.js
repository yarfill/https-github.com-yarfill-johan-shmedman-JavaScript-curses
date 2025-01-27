//Step 1
const massMark = 78;
const heightMark = 1.95;

const massJohn = 92;
const heightJohn = 1.69;

//Step 2
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

//Step 3
 console.log("bmi mark -", BMIMark);
 console.log("bmi johon -", BMIJohn);
 
 //Step 4
 let markHigherBMI = BMIMark > BMIJohn;
 console.log(markHigherBMI);