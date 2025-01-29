const yaroslav = [
  'Phill',
  'Filatov',
  2025 - 1999,
  'developer',
  ['Vova', 'Max', 'Rodya', 'Lazar'],
  true
];
const types = [];
//console.log(yaroslav[0])
// console.log(yaroslav[1])
// ...
// console.log(yaroslav[4])

//(yaroslav[5]) does NOT exist 

for (let i = 0; i < yaroslav.length; i++) {
  // Reading from yaroslav array
  console.log(yaroslav[i], typeof yaroslav[i]); // How to write without loop [0]

  // Filling types array
  // types[i] = typeof yaroslav[i];
  types.push(typeof yaroslav[i]);
}

console.log(types);

const years = [1999, 2007, 1985, 2011];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}


/// ! ! ! \\\
console.log('---Only STRINGS---')
for (let i = 0; i < yaroslav.length; i++) {
  if(typeof yaroslav[i] !== 'string') continue;
  
  console.log(yaroslav[i], typeof yaroslav[i]); 
}

/// ! ! ! \\\
console.log('---BREAK WITH NUMBERS---')
for (let i = 0; i < yaroslav.length; i++) {
  if(typeof yaroslav[i] === 'string') break;
  
  console.log(yaroslav[i], typeof yaroslav[i]); 
}