
// object Literal Syntax
// const yaroslav = {
//   firstName: 'Phill', // this is properties!
//   lastName: 'Filatov', // this is properties!
//   age: 2025 - 1999,  // this is properties!
//   job: 'developer', // this is properties!
//   friends: ['Vova', 'Max', 'Rodya', 'Lazar'] // this is properties!
// };
// console.log("🚀 ~ yaroslav:", yaroslav)
// console.log(yaroslav.friends)
// console.log(yaroslav['friends'])

// const nameKey = 'Name';
// console.log(yaroslav['first' + nameKey]);
// console.log(yaroslav['last' + nameKey]);

// // console.log(yaroslav.'last' + nameKey); // not working without brackets notation so in this case we need to write the full name like here 'yaroslav.friends'

// const interestedIn = prompt('What do you want to know about Yaroslav? Choose btwn firstName, lastName, age, job, and friends');

// if(yaroslav[interestedIn]) {
//   console.log(yaroslav[interestedIn]);
// } else {
//   console.log('Wrong request! Choose btwn firstName, lastName, age, job, and friends')
// }

// yaroslav.location = 'Canada';
// yaroslav['twitter'] = '@yarosphill';
// console.log(yaroslav);

// Challenge
const jonas = {
  job: 'teacher', // this is properties!
  friends: ['Michel', 'friend1', 'friend2', 'friends3'], // this is properties!
  // bestFriend: 'Michel'
  };
console.log(`${jonas.job} has ${jonas.friends} and name for his best friend is ${jonas.bestFriend}`); // How i did it 

console.log(`${jonas.job} has ${jonas.friends.length} and name for his best friend is ${jonas.friends[0]}`); // How Jonas did it 

