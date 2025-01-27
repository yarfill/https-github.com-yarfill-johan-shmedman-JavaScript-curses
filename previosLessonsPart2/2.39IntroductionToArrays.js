'use strict';
const friend1 = 'Max';
const friend2 = 'Lazar';
const friend3 = 'Rodion';

// One way to make it Array
const friends = ['Max', 'Lazar', 'Rodion'];// Bracket syntax 
// console.log("🚀 ~ friends:", friends)

// Second way to make it Array 
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'; // To change some friend
console.log(friends);
//friends = ['Bob', 'Alice']// not working because we already have "friends"

const firstName = 'Phill';
const phill = [firstName, 'Filatov', 2037 - 1999, 'developer', friends];
console.log("🚀 ~ phill:", phill);
console.log(phill.length);

//Exercise
const calcAge = birthYear => 2037 - birthYear;

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.lengt - 1])];
console.log(ages);