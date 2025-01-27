const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yrearsUntilRetierement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retierement = 75 - age;

  if(retierement > 0) {
    console.log(`${firstName} retires in ${retierement} years`);
    return retierement;
  } else {
    console.log(`${firstName} already retired`);
    return -2; 
  }

  // return `${firstName} retires in ${retierement} years`;
}

console.log(yrearsUntilRetierement(1999, 'Phill'));
console.log(yrearsUntilRetierement(1950, 'Jeremy'));