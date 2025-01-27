// // In objects we actually define key value pairs.  !   !   !
// const yaroslavArray = [
//   'Phill',
//   'Filatov',
//   2025 - 1999,
//   'developer'
//   ['Vova', 'Max', 'Rodya', 'Lazar']
// ];

// // object Literal Syntax
// const yaroslav = {
//   firstName: 'Phill', // this is properties!
//   lastName: 'Filatov', // this is properties!
//   age: 2025 - 1999,  // this is properties!
//   job: 'developer', // this is properties!
//   friends: ['Vova', 'Max', 'Rodya', 'Lazar'] // this is properties!
// };


const currentDate = new Date().getFullYear();

const yearsMax = 1987;
const yearsVika = 1986;

// if (hisAge > herAge) {
//   console.log(`Vika ${herAge} years you yunger than Max on ${overalOlder} because he has ${hisAge} years old!`);
// }else if(hisAge < herAge) {
//   console.log(`Max ${hisAge} years you yunger than Vika on ${overalOlder} years because she has ${herAge} years old!`);
// }else if(hisAge === herAge) {
//   console.log('Every body old =)');
// }  

// const = ;
// console.log("🚀 ~ 'use it':", 'use it')

// console.log("🚀 ~ 'yearsVika':", 'yearsVika')



//TODO - Use the argument
//TODO - console.log  the returned value from the function call

// function olderlAge(vikaAge, maxAge) {

//   const herAge = currentDate - vikaAge;
//   const hisAge = currentDate - maxAge;
//   const overalOlder = herAge - hisAge;

//    return overalOlder; 
//  }

//  const result = olderlAge(yearsVika, yearsMax);
//  console.log("🚀 ~ result:", result)

// arrow function
 const olderlAge = (vikaAge, maxAge) => {

  const herAge = currentDate - vikaAge;
  const hisAge = currentDate - maxAge;
  const overalOlder = herAge - hisAge;

   return overalOlder; 
 }

 const result = olderlAge(yearsVika, yearsMax);

  //TODO - Do a function which is NOT a CONST +
  //TODO - return and consoleloog results +
 
  //TODO - BONUS - arrow function +
  //TODO - BONUS - arrow function console log return +