const firstName = "Phill";
const job = "developer";
const birthYear = 1999;
const birthMonth = 2;
const birthDay = 18;
const year = 2025;

const currentDate = new Date();

const phill = "Im " + firstName + ', a '  + (year - birthYear) + ' years old ' + job + '!';

////Second part
const phillNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
console.log(phillNew);

console.log(` string with \n\ multiple \n\ lines`);

console.log(` string with 
 multiple 
 lines`);


// My challenge
const birthDateThisYear = new Date(year, birthMonth - 1, birthDay); 
let age = year - birthYear;

if (currentDate < birthDateThisYear) {
  age--;
}

console.log(`${firstName} is ${age} years old in ${year}.`);