for (let rep = 1; rep < 10; rep++) {
  console.log(`Counting repetition ${rep}`);
}

// While loop
let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Counting repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1; // here we created new radom number so the code will run againg
  if (dice === 6) console.log('Loop is about to end...');
}