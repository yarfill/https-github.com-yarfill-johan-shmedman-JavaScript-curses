
const friends = ['Mike', 'Steven', 'Peter'];

const newLenght = friends.push ('Mark'); // PUSH ist's a metod of function. ALSO you can return somethink here.
console.log("🚀 ~ newLenght:", newLenght)
console.log(friends);

friends.unshift('Phill');
console.log(friends);

// Remove elements
friends.pop(); // Removing last element
const popped = friends.pop();
console.log("🚀 ~ popped:", popped);
console.log("🚀 ~ friends:", friends);
//!!!\\
friends.shift();// Removing first element
console.log("🚀 ~ friends:", friends);

// When to use indexOf():
// When you just need to find the position of an element.
// When you are working with arrays of primitive values (such as strings or numbers).
// When case sensitivity or exact matching is important.
console.log(friends.indexOf('Mike'));
console.log(friends.indexOf('Steven')); 

// When to use includes():
// When you just need to know if an element is in the array, not its position.
// When you need a boolean value (true or false).
// When working with arrays of primitive values, especially if you just want to check for the presence of an element without caring about its position.
friends.push(23);
console.log(friends.includes('Mike')); 
console.log(friends.includes('Steven'));
console.log(friends.includes(23)); 