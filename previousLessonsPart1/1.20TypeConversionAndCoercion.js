//Type Conversion
const inputYear = '1999';
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18);

console.log(Number('Phill')); // Not gonna works with number becouse its not a number!
console.log(typeof NaN);

console.log(String(23), 23);

//Type Coercion
console.log(`I'm ` + 23 + ' years old');
console.log(`I'm ` + String(23) + 'years old');
console.log('23' - '10' - 5);
console.log('23' * '2');// Converted to numbers so miltiplayer/divader can work proper

let n = '1' + 1; // '1' Is a string, so this becomes '11'. STRING + number = string Number 
n = n - 1;
console.log(n);

//let n = '2' + (11 + 30) + '5';//EXPERIMENT