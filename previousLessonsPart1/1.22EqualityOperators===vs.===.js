const age = 18;
if(age === 18) console.log('You just became an adult (strict)');

if(age == 18) console.log('You just became an adult (loose');

//Promt function
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 25) {
  console.log('Cool! 25 is nice number!'); //If you take the 25 it's showing string!
} else if(favourite === 7) {
  console.log('7 is also good number'); //If you don't take the number 7 then you will see the 
} else {
  console.log('Number is not 25 or 7'); //You can add how many you want/need!!
} 

if(favourite !== 25) console.log('Why NOT 25'); //If you press any nice number insept of 25... 