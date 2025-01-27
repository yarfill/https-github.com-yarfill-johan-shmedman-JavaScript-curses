// 5 Falsy values: 0, '', undefined, null, NaN
console.log (Boolean(0));
console.log (Boolean(undefined));
console.log (Boolean('Phill'));
console.log (Boolean({}));
console.log (Boolean(''));

const money = 11;
if (money) {
  console.log("Don't spent it all ;)"); // If you have some money
} else {
  console.log ('You should get a job!'); // If you don't have money
}

//Undefined becouse height = 0!!!
let height = 0;
if(height) {
  console.log('YYYAAAYYYY');
} else {
  console.log('NNNOOOOOO');
}