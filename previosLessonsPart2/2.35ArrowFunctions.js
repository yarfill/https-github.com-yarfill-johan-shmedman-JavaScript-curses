// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yrearsUntilRetierement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retierement = 75 - age;
  // return retierement;
  return `${firstName} retires in ${retierement} years`;
}

console.log(yrearsUntilRetierement(1999, `Phill`));
console.log(yrearsUntilRetierement(2022, `Kilim`));