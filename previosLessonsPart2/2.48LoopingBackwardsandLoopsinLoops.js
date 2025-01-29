const yaroslav = [
  'Phill',
  'Filatov',
  2025 - 1999,
  'developer',
  ['Vova', 'Max', 'Rodya', 'Lazar'],
];

// before we start from [0, 1, ..., 4]
// now we start [4, 3, ..., 0]

for(let i = yaroslav.length - 1; i >= 0; i--) {
  console.log(yaroslav[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---STARTING EXSERCISE ${exercise}`);

  for (let rep = 1; rep < 9; rep++) {
    console.log(`Counting repetition ${rep}`);
  }
 }